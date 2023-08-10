import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import ReelsComponent from '../components/reels/ReelsComponent';
import {useNavigation} from '@react-navigation/native';

const Reels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        position: 'relative',
        // backgroundColor: 'black',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
          {/* <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Reels
          </Text> */}
        </TouchableOpacity>
      </View>
      <ReelsComponent />
    </View>
  );
};

export default Reels;
