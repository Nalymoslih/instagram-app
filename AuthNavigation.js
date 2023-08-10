import React, {useEffect, useState} from 'react';
import {SignedInStack, SignedOutStack} from './navigation';
import firebase from '@react-native-firebase/app';
import {Platform, StatusBar, Text} from 'react-native';

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const useHandler = user =>
    user ? setCurrentUser(user) : setCurrentUser(null);
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => useHandler(user));
  }, []);

  return (
    <>
      <StatusBar hidden={Platform.OS === 'ios'} />
      {currentUser ? <SignedInStack /> : <SignedOutStack />}
    </>
  );
};

export default AuthNavigation;
