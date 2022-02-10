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
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useGetHotelByNameQuery} from '../../services/hotelApiSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HotelCard from '../../components/HotelCard';
import {colors} from '../../utils/colors';

const Home = () => {
  const {data, error, isLoading} = useGetHotelByNameQuery();
  const dummyArr = [];
  console.log(JSON.stringify(data));
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <Text
        style={{
          fontSize: 22,
          width: 250,
          alignSelf: 'flex-start',
          marginLeft: 20,
        }}>
        Search for your favorite hotel
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-start',
          marginLeft: 20,
          marginTop: 10,
        }}>
        <TextInput
          style={{
            backgroundColor: colors.lightGrey,
            height: 35,
            width: '85%',
            borderRadius: 10,
            paddingLeft: 20,
          }}
          placeholder={'search hotel'}
        />
        <View
          style={{
            backgroundColor: '#20B2AA',
            width: 35,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 5,
            borderRadius: 10,
          }}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            color={'white'}
            size={20}
          />
        </View>
      </View>

      <FlatList
        data={data}
        style={{marginTop: 10}}
        renderItem={({item}) => (
          <HotelCard
            name={item?.name}
            price={item?.price}
            stars={item?.stars}
            gallery={item?.gallery}
          />
        )}
        ListEmptyComponent={() => (
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              No hotels Found.
            </Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <>{isLoading && <ActivityIndicator size={'large'} color={'red'} />}</>
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Home;
