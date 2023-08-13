import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import {GiftedChat} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';
import io from 'socket.io-client';
import {TouchableOpacity} from 'react-native';
const socket = io('http://localhost:3001');

const Chat = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('');
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  useEffect(() => {
    socket.emit('join', 1);
    socket.on('messages', data => {
      const allMessages = data.map(message => {
        return {
          _id: message.id,
          text: message.message,
          createdAt: message.timestamp,
          user: {
            _id: message.sender_id,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        };
      });
      setMessages(allMessages);
    });
    socket.on('message', data => {
      const newMessage = {
        _id: data.id,
        text: data.message,
        createdAt: data.timestamp,
        user: {
          _id: data.sender_id,
          name: 'React Native',
          avatar: 'https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg',
        },
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessage),
      );
    });
  }, []);

  const onSend = (newMessages = []) => {
    const newMessage = newMessages[0].text;
    const data = {
      message: newMessage,
      room: 1,
      senderId: 1,
      receiverId: 2,
    };

    socket.emit('message', data);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>
          {currentRoom}
          {rooms}
        </Text>
      </TouchableOpacity>

      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
};

export default Chat;
