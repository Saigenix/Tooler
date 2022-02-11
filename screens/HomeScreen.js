import { View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import Colors from '../assests/Colours';
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Tooler</Text>
      <View style={styles.btnbox}>
      <Button color={Colors.RED} 
        title="Study planner"
        onPress={() => navigation.navigate('StudyPlanner')}
      />
      <Button color={Colors.ORANGE}
        title="Work Checker"
        onPress={() => navigation.navigate('WorkChecker')}
      />
      <Button  color={Colors.PURPLE}
        title="Google"
        onPress={() => navigation.navigate('Webs')}
      />
      <Button color={Colors.GRAY}
        title="Stylish Text"
        onPress={() => navigation.navigate('StyleText')}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   
    view : {
        flex: 1,
        alignItems: 'center',
        backgroundColor:Colors.bg,
       
},
  
    txt : {
    color: Colors.txt,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 10,
  },
  btnbox : {
    flex:1,
    justifyContent:"space-evenly"

    

  }


});


export default HomeScreen;
