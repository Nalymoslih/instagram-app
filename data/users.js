import InstaStory from 'react-native-insta-story';

export const USERS = [
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
