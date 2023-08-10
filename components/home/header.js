import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {firebase} from '@react-native-firebase/auth';

const handleSignOut = async () => {
  try {
    firebase.auth().signOut();
    console.log('signout successful');
  } catch (error) {
    console.log(error);
  }
};

const header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Image
          style={styles.logo}
          source={require('../../assets/bg-insta.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image
            source={{
              url: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              url: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('ChatScreen')}>
          <Image
            source={{
              url: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
});
export default header;
