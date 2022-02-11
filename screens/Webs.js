import React, { useState, useEffect, useRef } from 'react';
import {Dimensions,BackHandler, Platform} from 'react-native';
import { WebView } from 'react-native-webview';

const Webs = () => {
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);
  
      return () => {
         BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      }
    }
  }, []);
  const HandleBackPressed = () => {
    if (webView.current.canGoBack) {
        webView.current.goBack();
        return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;
}
    return (
      <WebView 
      ref={webView}
      startInLoadingState={true} 
      ignoreSslError={true} 
      containerStyle = {{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}} 
      source={{ uri: 'https://google.com/'}}
      onNavigationStateChange={navState => {webView.current.canGoBack = navState.canGoBack}} />
    );
}

export default Webs;