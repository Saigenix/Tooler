import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StudyPlanner from './screens/StudyPlanner';
import WorkChecker from './screens/WorkChecker';
import Webs from './screens/Webs';
import StyleText from './screens/StyleText';
const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" 
      component={HomeScreen} 
      options={{ title: 'Tooler' }}/>
      <Stack.Screen name="StudyPlanner" 
      component={StudyPlanner} 
      options={{ title: 'Study Planner' }}/>
      <Stack.Screen name="WorkChecker" 
      component={WorkChecker} 
      options={{ title: 'Work Checker' }}/>
      <Stack.Screen name="Webs" 
      component={Webs}
      options={{ title: 'Browser' }}/>
      <Stack.Screen name="StyleText" 
      component={StyleText}
      options={{ title: 'Stylish text' }}/>
    </Stack.Navigator>
    
  </NavigationContainer>
    
);

export default App;
