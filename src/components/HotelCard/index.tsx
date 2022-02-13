import {Image, Text, View} from 'react-native';
import React from 'react';
// @ts-ignore
import StarRating from 'react-native-star-rating';
import styling from './hotelcard.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Hotel} from '../../types/hotel';

interface HotelCardProps {
  name: string | undefined;
  stars: number | undefined;
  price: number | undefined;
  gallery: Array<string>;
  navigate: (item: Hotel) => void;
}

const HotelCard = ({name, stars, price, gallery, navigate}: HotelCardProps) => {
  return (
    <TouchableOpacity style={styling.containerStyle} onPress={navigate}>
      <Image
        source={{
          uri: gallery[0],
        }}
        style={styling.imageStyle}
        resizeMode="cover"
      />
      <View style={styling.childContainerStyle}>
        <Text style={styling.hotelNameTextStyle}>{name}</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={stars}
          starSize={15}
          containerStyle={styling.starContainerStyle}
          fullStarColor={'orange'}
          emptyStarColor={'grey'}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={styling.priceTextStyle}>€ {price}</Text>
          <Text style={styling.nightTextStyle}>/ night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;
