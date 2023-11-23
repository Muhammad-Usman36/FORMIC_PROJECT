import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
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

const DataEntryForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission logic here
  };

  return (
    <View>
      <Formik
        initialValues={{adress: '',Rnumber: '',Pcode: '', fname: '',lname: '', email: '', Pnumber: '' }}
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
              onChangeText={handleChange('Pnumber')}
              onBlur={handleBlur('Pnumber')}
              value={values.Pnumber}
              placeholder="Phone _ number"
            />
            {errors.Pnumber && <Text style={{ color: 'red' }}>{errors.Pnumber}</Text>}

            <TextInput
              onChangeText={handleChange('Rnumber')}
              onBlur={handleBlur('Rnumber')}
              value={values.Rnumber}
              placeholder="Refral _ number"
            />
            {errors.Rnumber && <Text style={{ color: 'red' }}>{errors.Rnumber}</Text>}

            <TextInput
              onChangeText={handleChange('Pcode')}
              onBlur={handleBlur('Pcode')}
              value={values.Pcode}
              placeholder="Postal _ code"
            />
            {errors.Pcode && <Text style={{ color: 'red' }}>{errors.Pcode}</Text>}

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default DataEntryForm;
