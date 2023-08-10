import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl:
      'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
    likedImageUrl: 'https://img.icons8.com/ios-filled/50/fa314a/like--v1.png',
  },
  {
    name: 'Comment',
    imageUrl:
      'https://img.icons8.com/material-outlined/60/ffffff/speech-bubble--v1.png',
  },
  {
    name: 'Share',
    imageUrl: 'https://img.icons8.com/material-outlined/60/ffffff/sent.png',
  },
  {
    name: 'Save',
    imageUrl:
      'https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon--v1.png',
  },
];

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
      <Divider width={1} animation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter />
      </View>
      <Likes post={post} />
      <Caption post={post} />
      <CommentsSecotion post={post} />
      <Comments post={post} />
    </View>
  );
};

const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      alignItems: 'center',
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{uri: post.profile_picture}} style={styles.story} />
      <Text style={{color: 'white', fontWeight: 700, marginLeft: 5}}>
        {post.user}
      </Text>
    </View>
    <Text style={{color: 'white', fontWeight: 900}}>...</Text>
  </View>
);
const PostImage = ({post}) => (
  <View style={{width: '100%', height: 450}}>
    <Image
      source={{uri: post.imageUrl}}
      style={{resizeMode: 'cover', height: '100%'}}
    />
  </View>
);

const PostFooter = () => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon
        imgStyle={[styles.footerIcon, styles.shareIcon]}
        imgUrl={postFooterIcons[2].imageUrl}
      />
    </View>
    <View style={{flex: 1, alignItems: 'flex-end'}}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);
const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image source={{uri: imgUrl}} style={imgStyle} />
  </TouchableOpacity>
);
const Likes = ({post}) => (
  <View style={{flexDirection: 'row', marginTop: 4}}>
    <Text style={{color: 'white', fontWeight: 600}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
);
const Caption = ({post}) => (
  <View style={{marginTop: 5}}>
    <Text style={{color: 'white'}}>
      <Text style={{fontWeight: '700'}}>{post.user}</Text>
      <Text>{post.caption}</Text>
    </Text>
  </View>
);
const CommentsSecotion = ({post}) => (
  <View style={{marginTop: 5}}>
    {!!post.comments.length && (
      <Text style={{color: 'gray'}}>
        View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
  </View>
);
const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{color: 'white'}}>
          <Text style={{fontWeight: '700'}}>{comment.user}</Text>
          <Text> {comment.comment}</Text>
        </Text>
      </View>
    ))}
  </>
);
const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    marginLeft: 6,
    borderColor: '#ff8501',
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  shareIcon: {
    transform: [{rotate: '320deg'}],
    marginTop: -5,
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
  },
});

export default Post;
