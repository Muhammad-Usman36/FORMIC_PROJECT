import React,{useState} from "react";
import { View,Text,Button,StyleSheet,TextInput,Alert } from "react-native";

export const App: React.FC = () => {
  const wait_for_the_logic = () =>
  Alert.alert([

    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
  return(
    <View style={styles.mainView}>
      <Text style={{fontSize: 20,margin: 20}}>Please Enter</Text>
      <TextInput style={styles.input} placeholder="Enter Name" />
      <TextInput style={styles.input} placeholder="Enter Number" />
      <TextInput style={styles.input} placeholder="Enter @mail.com" />
      <Button title="ADD"onPress={() => Alert.alert('wait for the logic')}/>

    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  mainView: {
    //backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 200,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 20,
  },
});