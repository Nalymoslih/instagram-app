import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Button, Divider, Image} from 'react-native-elements';
import {Formik} from 'formik';
import validUrl from 'valid-url';

const placeholder_IMG =
  'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character'),
});
const FormikPostUploaded = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(placeholder_IMG);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={values => {
        console.log(values);
        console.log('Your post was submitted successfully 🥳');
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : placeholder_IMG,
              }}
              style={{width: 100, height: 100}}
            />
            <View style={{flex: 1, marginLeft: 12}}>
              <TextInput
                style={{color: 'white', fontSize: 20}}
                placeholder="Write a cption..."
                placeholderTextColor={'gray'}
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            style={{color: 'white', fontSize: 18}}
            placeholder="Enter Image Url"
            placeholderTextColor={'gray'}
            multiline={true}
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{fontSize: 10, color: 'red'}}>errors.imageUrl</Text>
          )}
          <Button
            style={{marginTop: 8}}
            title="Share"
            onPress={handleSubmit}
            disabled={!isValid}
          />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploaded;
