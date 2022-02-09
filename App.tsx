/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import StarRating from 'react-native-star-rating';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{height: 250}}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/lastminute/image/upload/q_auto/v1609194083/n88jigk27jtmvekqunbv.jpg',
            }}
            style={{
              height: 250,
              width: Dimensions.get('screen').width / 2 - 20,
              borderRadius: 15,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              height: 80,
              position: 'absolute',
              width: Dimensions.get('screen').width / 2 - 30,
              bottom: 5,
              left: 5,
              right: 5,
              borderRadius: 15,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 12,
                color: 'white',
                fontWeight: '700',
              }}>
              Sahid Montana, Malang
            </Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={3.5}
              starSize={15}
              containerStyle={{
                width: 90,
                marginTop: 5,
                marginLeft: 10,
              }}
              fullStarColor={'orange'}
              emptyStarColor={'grey'}
            />
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  marginTop: 5,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                $26.77
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 3,
                  marginTop: 5,
                  color: 'white',
                }}>
                / night
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1430487613/Exterior_ajaxnb.jpg',
          }}
          style={{
            height: 250,
            width: Dimensions.get('screen').width / 2 - 20,
            marginLeft: 10,
            borderRadius: 15,
          }}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default App;
