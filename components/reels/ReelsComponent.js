import {View, Text, Alert} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videos} from '../../data/videos';
import SingleReel from './SingleReel';

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videos}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};
export default ReelsComponent;
