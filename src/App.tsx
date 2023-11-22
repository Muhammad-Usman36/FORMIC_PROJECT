import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email('Enter a valid email')  ,
  age: yup.number().typeError('Age must be a number'),
});

const DataEntryForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission logic here
  };

  return (
    <View>
      <Formik
        initialValues={{ name: '', email: '', age: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Name"
            />
            {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}

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
              keyboardType="numeric"
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
