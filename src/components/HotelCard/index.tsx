import {Image, Text, View} from 'react-native';
import React from 'react';
// @ts-ignore
import StarRating from 'react-native-star-rating';
import styling from './hotelcard.style';

const HotelCard = () => {
  return (
    <View style={styling.containerStyle}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/lastminute/image/upload/q_auto/v1609194083/n88jigk27jtmvekqunbv.jpg',
        }}
        style={styling.imageStyle}
        resizeMode="cover"
      />
      <View style={styling.childContainerStyle}>
        <Text style={styling.hotelNameTextStyle}>Sahid Montana, Malang</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={3.5}
          starSize={15}
          containerStyle={styling.starContainerStyle}
          fullStarColor={'orange'}
          emptyStarColor={'grey'}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={styling.priceTextStyle}>$26.77</Text>
          <Text style={styling.nightTextStyle}>/ night</Text>
        </View>
      </View>
    </View>
  );
};

export default HotelCard;
