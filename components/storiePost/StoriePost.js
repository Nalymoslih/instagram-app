import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import InstaStory from 'react-native-insta-story';

const StoriePost = () => {
  const USERS = [
    {
      id: '1',
      user: 'Naly_Moslih',
      image: 'https://pbs.twimg.com/media/FADhDRwXoAA8Rbc.jpg',
      imageStories: [
        {
          storyImage:
            'https://pbs.twimg.com/profile_images/1637196707153825793/MGxTNmHw_400x400.jpg',
          story_id: 1,
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
      ],
    },
    {
      id: '2',
      user: 'Yusf_Jasm',
      image:
        'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403',
      imageStories: [
        {
          storyImage:
            'https://i.pinimg.com/736x/6e/ee/8c/6eee8c021e20a267a2e896313e418977.jpg',
          story_id: 1,
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
      ],
    },
    {
      id: '3',
      user: 'Kawan_Edris',
      image:
        'https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg',
      imageStories:
        'https://www.modeandthecity.net/wp-content/uploads/2019/07/faire-de-belles-stories-sur-instagram-3.jpg',
    },
    {
      id: '4',
      user: 'Dlier_Vana',
      image:
        'https://i.pinimg.com/originals/d5/29/09/d52909b3751b3f8507873d280295ccc7.jpg',
      imageStories: [
        {
          storyImage:
            'https://uploads-ssl.webflow.com/62d42d2f755658e8a8e4eb8a/6383e7559a5c612c5a5edb6a_Titelbild1_IGStory_Blogpost_quadratisch.jpg',
          story_id: 1,
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
      ],
    },
    {
      id: '5',
      user: 'Shakew_Moslih',
      image: 'https://picsum.photos/200/300/?blur',
      imageStories: [
        {
          storyImage:
            'https://petapixel.com/assets/uploads/2022/12/image5-2-800x420.jpg',
          story_id: 1,
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
      ],
    },
  ];
  const navigation = useNavigation();

  const [seenStories, setSeenStories] = useState(new Set());

  const updateSeenStories = ({story: {story_id}}) => {
    setSeenStories(prevSet => {
      prevSet.add(story_id);
      return prevSet;
    });
  };

  const handleSeenStories = async item => {
    console.log(item);
    const storyIds = [];
    seenStories.forEach(storyId => {
      if (storyId) storyIds.push(storyId);
    });
    if (storyIds.length > 0) {
      await fetch('myApi', {
        method: 'POST',
        body: JSON.stringify({storyIds}),
      });
      seenStories.clear();
    }
  };

  <InstaStory
    data={USERS}
    duration={10}
    onStart={item => console.log(item)}
    onClose={handleSeenStories}
    onStorySeen={updateSeenStories}
    renderCloseComponent={({item, onPress}) => (
      <View style={{flexDirection: 'row'}}>
        <Button onPress={shareStory}>Share</Button>
        <Button onPress={onPress}>X</Button>
      </View>
    )}
    renderTextComponent={({item, profileName}) => (
      <View>
        <Text>{profileName}</Text>
        <Text>{item.customProps?.yourCustomProp}</Text>
      </View>
    )}
    style={{marginTop: 30}}
  />;
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Container: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  headerText: {
    marginBottom: 550,
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    position: 'absolute',
    top: 53,
    left: 60,
    zIndex: 10,
  },
  story: {
    position: 'relative',
    width: 400,
    flex: 1,
    resizeMode: 'cover',
  },
});

export default StoriePost;
