import {View, Text} from 'react-native';
import React from 'react';
import Chat from '../components/chat/Chat';

const ChatScreen = ({navigation}) => {
  return <Chat navigation={navigation} />;
};

export default ChatScreen;
