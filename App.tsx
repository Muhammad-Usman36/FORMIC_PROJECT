import React from "react";
import { View,Text,StyleSheet } from "react-native";

export const App =()=>{
  return (
<View style={styles.body}>  
    <Text style={styles.text}>
    FORMIC_PROJECT
      </Text>
    </View>
);
};
export default App;

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color:'white',
    fontWeight:'bold',
  },
});