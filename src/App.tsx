import React from 'react';
import { View,Text,Button,StyleSheet,TextInput,Alert } from "react-native";
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  fname: yup.string().required('First _ Name is required'),
  lname: yup.string().required('Last _ Name is required'),
  email: yup.string().email('Enter a valid email'),
  Pnumber: yup.number().typeError('Phone number must be a number'),
  adress: yup.string().required('Adress must be 10 characters'),
  Pcode: yup.number().typeError('Postal code must be of 5 number'),
  Rnumber:yup.number().typeError('Refral number must be of 8 number'), 



});

const App = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission logic here
  };

  return (
         <View style={{backgroundColor: 'white',flex:1}}>
      <Text style={{color: 'black',fontWeight: 'bold', alignSelf: 'center',fontSize: 30,marginVertical: 20}}>
        Data Entry Form
      </Text>
      <Formik
        initialValues={{adress: '',Rnumber: '',Pcode: '', fname: '',lname: '', email: '', Pnumber: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.mainView}>
            <TextInput
            style={styles.input} 
              onChangeText={handleChange('fname')}
              onBlur={handleBlur('fname')}
              value={values.fname}
              placeholder="First _ Name"
              placeholderTextColor={"black"}
            />
            {errors.fname && <Text style={{ color: 'red' }}>{errors.fname}</Text>}
            <Text style={{color: 'black',marginLeft: 10}}>First Name</Text>


            <TextInput
                        style={styles.input} 
              onChangeText={handleChange('lname')}
              onBlur={handleBlur('lname')}
              value={values.lname}
              placeholder="Last _ Name"
              placeholderTextColor={"black"}
            />
            {errors.lname && <Text style={{ color: 'red' }}>{errors.lname}</Text>}
            <Text style={{color: 'black',marginLeft: 10}}>last Name</Text>


            <TextInput
             style={styles.input} 
              onChangeText={handleChange('adress')}
              onBlur={handleBlur('adress')}
              value={values.adress}
              placeholder="adress"
              placeholderTextColor={"black"}
            />
            {errors.adress && <Text style={{ color: 'red' }}>{errors.adress}</Text>}
            <Text style={{color: 'black',marginLeft: 10}}>Adress      </Text>


            <TextInput
              style={styles.input} 
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
              placeholderTextColor={"black"}
            />
            {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
            <Text style={{color: 'black',marginLeft: 10}}>Email        </Text>


            <TextInput
              style={styles.input} 
              onChangeText={handleChange('Pnumber')}
              onBlur={handleBlur('Pnumber')}
              value={values.Pnumber}
              placeholder="Phone _ number"
              placeholderTextColor={"black"}
            />
            {errors.Pnumber && <Text style={{ color: 'red' }}>{errors.Pnumber}</Text>}
            <Text style={{color: 'black',marginLeft: 10}}>P# Number</Text>


            <TextInput
              style={styles.input} 
              onChangeText={handleChange('Rnumber')}
              onBlur={handleBlur('Rnumber')}
              value={values.Rnumber}
              placeholder="Refral _ number"
              placeholderTextColor={"black"}
            />
            {errors.Rnumber && <Text style={{ color: 'red' }}>{errors.Rnumber}</Text>}
            <Text style={{color: 'black',marginLeft: 10}}>referral_code</Text>


            <TextInput
              style={styles.input} 
              onChangeText={handleChange('Pcode')}
              onBlur={handleBlur('Pcode')}
              value={values.Pcode}
              placeholder="Postal _ code"
              placeholderTextColor={"black"}
            />
            {errors.Pcode && <Text style={{ color: 'red' }}>{errors.Pcode}</Text>}
            <Text style={{color: 'black',marginLeft: 10}}>Postal_code</Text>
            <View style={{marginLeft: 50,marginTop:40}}>
<Button title="Sign_up"onPress={() => Alert.alert('wait for the logic')}/>
</View>
          </View>
        )}
      </Formik>
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

