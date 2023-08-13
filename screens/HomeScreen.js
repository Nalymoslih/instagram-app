import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/home/header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import {POSTS} from '../data/posts';
import BottomTabs, {bottomTabIcons} from '../components/home/BottomTabs';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/auth/posts',
        ); // Use your backend endpoint to fetch posts
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    // Call the function
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default HomeScreen;
