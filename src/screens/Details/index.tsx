import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  absoluteContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 5,
    right: 5,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
  },
  priceTextStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  nightTextStyle: {
    fontSize: 10,
    marginLeft: 3,
    marginTop: 3,
    color: 'white',
  },
  starContainerStyle: {
    width: 90,
    marginTop: 10,
    marginRight: 10,
  },
});
const Details = ({route}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{flex: 1}}>
        <Image
          source={{uri: item.gallery[0]}}
          style={{height: '100%', margin: 10, borderRadius: 10}}
          resizeMode={'cover'}
        />
        <View style={styles.absoluteContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontWeight: '600',
                marginLeft: 10,
              }}>
              {item?.name}
            </Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Text style={styles.priceTextStyle}>€ {item?.price}</Text>
              <Text style={styles.nightTextStyle}>/ night</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <MaterialCommunityIcons
                name="map-marker"
                color={'white'}
                size={15}
                style={{marginTop: 10}}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  fontWeight: '300',
                  marginTop: 8,
                  marginLeft: 5,
                }}>
                {item?.location?.city}
              </Text>
            </View>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={item?.stars}
              starSize={15}
              containerStyle={styles.starContainerStyle}
              fullStarColor={'orange'}
              emptyStarColor={'grey'}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <ScrollView style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginTop: 20,
              marginLeft: 19,
            }}>
            Gallery
          </Text>
          <FlatList
            horizontal={true}
            data={item?.gallery}
            style={{marginTop: 10, marginLeft: 10}}
            renderItem={({item}) => (
              <Image
                source={{uri: item}}
                style={{
                  height: 100,
                  width: 100,
                  marginLeft: 10,
                  borderRadius: 10,
                }}
              />
            )}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginTop: 20,
              marginLeft: 19,
            }}>
            Rules
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <MaterialCommunityIcons
              name="clock-time-three"
              color={'black'}
              size={15}
              style={{marginLeft: 20, marginTop: 1}}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                marginLeft: 5,
                color: 'grey',
              }}>
              Check-in : {item?.checkIn?.from} / {item?.checkIn?.to}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <MaterialCommunityIcons
              name="clock-time-three"
              color={'black'}
              size={15}
              style={{marginLeft: 20, marginTop: 1}}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                marginLeft: 5,
                color: 'grey',
              }}>
              Check out : {item?.checkOut?.from} / {item?.checkOut?.to}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginTop: 20,
              marginLeft: 19,
            }}>
            Address
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <MaterialCommunityIcons
              name="map-marker"
              color={'black'}
              size={15}
              style={{marginLeft: 20, marginTop: 1}}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                marginLeft: 5,
                color: 'grey',
              }}>
              {item?.location?.address} / {item?.location?.city}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginTop: 20,
              marginLeft: 19,
            }}>
            Contact
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              borderRadius: 10,
              borderWidth: StyleSheet.hairlineWidth,
              height: 35,
              alignItems: 'center',
              width: 150,
              marginLeft: 20,
              borderColor: 'grey',
            }}>
            <MaterialCommunityIcons
              name="phone"
              color={'blue'}
              size={15}
              style={{marginLeft: 10, marginTop: 1}}
            />
            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                fontWeight: '500',
                marginLeft: 5,
                color: 'grey',
                flex: 1,
              }}>
              {item?.contact?.phoneNumber}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              borderRadius: 10,
              borderWidth: StyleSheet.hairlineWidth,
              height: 35,
              alignItems: 'center',
              width: 250,
              marginLeft: 20,
              borderColor: 'grey',
            }}>
            <MaterialCommunityIcons
              name="at"
              color={'blue'}
              size={15}
              style={{marginLeft: 10, marginTop: 1}}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                marginLeft: 5,
                color: 'grey',
                flex: 1,
              }}
              numberOfLines={1}>
              {item?.contact?.email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                marginTop: 20,
              }}>
              ✦ User Rating :
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                marginLeft: 5,
                color: 'grey',
                flex: 1,
                marginTop: 20,
              }}
              numberOfLines={1}>
              {item?.userRating}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;
