import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface HotelcardStyle {
  containerStyle: ViewStyle;
  imageStyle: ImageStyle;
  childContainerStyle: ViewStyle;
  starContainerStyle: ViewStyle;
  hotelNameTextStyle: ViewStyle;
  priceTextStyle: TextStyle;
  nightTextStyle: TextStyle;
}

export default StyleSheet.create<HotelcardStyle>({
  containerStyle: {height: 250, margin: 5},
  imageStyle: {
    height: 250,
    width: Dimensions.get('screen').width / 2 - 20,
    borderRadius: 15,
  },
  childContainerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 80,
    position: 'absolute',
    width: Dimensions.get('screen').width / 2 - 30,
    bottom: 5,
    left: 5,
    right: 5,
    borderRadius: 15,
    justifyContent: 'center',
  },
  starContainerStyle: {
    width: 90,
    marginTop: 5,
    marginLeft: 10,
  },
  hotelNameTextStyle: {
    marginLeft: 10,
    fontSize: 12,
    color: 'white',
    fontWeight: '700',
  },
  priceTextStyle: {
    marginLeft: 10,
    fontSize: 14,
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  nightTextStyle: {
    fontSize: 12,
    marginLeft: 3,
    marginTop: 5,
    color: 'white',
  },
});
