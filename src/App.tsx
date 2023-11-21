import React,{useState} from "react";
import { View,Text,Button,StyleSheet,TextInput,Alert } from "react-native";

export const App: React.FC = () => {

  return(
    <View style={{backgroundColor: 'white',flex:1}}>
      <Text style={{color: 'black',fontWeight: 'bold', alignSelf: 'center',fontSize: 30,marginVertical: 20}}>
        Data Entry Form
      </Text>

 <View style={styles.mainView}>

<TextInput style={styles.input} placeholder="Enter first name" placeholderTextColor={"black"}/>
<Text style={{color: 'black',marginLeft: 10}}>First Name</Text>


<TextInput style={styles.input} placeholder="Enter last Name" placeholderTextColor={"black"}/>
<Text style={{color: 'black',marginLeft: 10}}>last Name</Text>

<TextInput style={styles.input} placeholder="Enter @Email" placeholderTextColor={"black"}/>
<Text style={{color: 'black',marginLeft: 10}}>Email        </Text>



<TextInput style={styles.input} placeholder="Enter Address" placeholderTextColor={"black"}/>
<Text style={{color: 'black',marginLeft: 10}}>Adress      </Text>



<TextInput style={styles.input} placeholder="Enter phone_number" placeholderTextColor={"black"}/>
<Text style={{color: 'black',marginLeft: 10}}>P# Number</Text>


<TextInput style={styles.input} placeholder="Enter Postal_code" placeholderTextColor={"black"}/>
<Text style={{color: 'black',marginLeft: 10}}>Postal_code</Text>


<TextInput style={styles.input} placeholder="Enter referral_code" placeholderTextColor={"black"}/>
<Text style={{color: 'black',marginLeft: 10}}>referral_code</Text>
<View style={{marginTop: 50}}>
<Button title="Sign_up"onPress={() => Alert.alert('wait for the logic')}/>
</View>

</View>


    </View>
   
  
  );
};
export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection:'row',
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