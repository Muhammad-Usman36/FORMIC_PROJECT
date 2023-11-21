import React from 'react';
import { useFormik } from 'formik';
import { View,TextInput,Button,Text, Alert } from 'react-native';


  const SignupForm = () => {
    const formik = useFormik({
      initialValues: { email: "email" },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    });
  return (
    <View onSubmit={formik.handleSubmit}>
      <Text htmlFor="email">Email Address</Text> 
      <TextInput
      placeholder='hell'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange('email')}
        value={formik.values.email}
      />
<Button title='submit' type="submit" onPress={()=>Alert.alert('chaaa')}/>
      
    </View>
  );
};

export default SignupForm;