import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FormikPostUploaded from './FormikPostUploaded';

const AddNewPost = ({navigation}) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <FormikPostUploaded navigation={navigation} />
  </View>
);
const Header = ({navigation}) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
      <Image
        source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}}
        style={{width: 30, height: 30}}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>AddNewPost</Text>
    <Text></Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 23,
  },
});

export default AddNewPost;
