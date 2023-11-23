import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  fname: yup.string().required('First _ Name is required'),
  lname: yup.string().required('Last _ Name is required'),
  email: yup.string().email('Enter a valid email'),
  age: yup.number().typeError('Age must be a number'),
  adress: yup.string().required('Adress must be 10 characters'),


});

const DataEntryForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission logic here
  };

  return (
    <View>
      <Formik
        initialValues={{adress: '', fname: '',lname: '', email: '', age: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              onChangeText={handleChange('fname')}
              onBlur={handleBlur('fname')}
              value={values.fname}
              placeholder="First _ Name"
            />
            {errors.fname && <Text style={{ color: 'red' }}>{errors.fname}</Text>}

            <TextInput
              onChangeText={handleChange('lname')}
              onBlur={handleBlur('lname')}
              value={values.lname}
              placeholder="Last _ Name"
            />
            {errors.lname && <Text style={{ color: 'red' }}>{errors.lname}</Text>}

            <TextInput
              onChangeText={handleChange('adress')}
              onBlur={handleBlur('adress')}
              value={values.adress}
              placeholder="adress"
            />
            {errors.adress && <Text style={{ color: 'red' }}>{errors.adress}</Text>}


            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

            <TextInput
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              placeholder="Age"
            />
            {errors.age && <Text style={{ color: 'red' }}>{errors.age}</Text>}

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default DataEntryForm;
