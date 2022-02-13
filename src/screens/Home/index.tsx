/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useMemo, useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetHotelByNameQuery} from '../../services/hotelApiSlice';
import HotelCard from '../../components/HotelCard';
import HotelHeader from '../../components/HotelHeader';
import BottomSheet from '@gorhom/bottom-sheet';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Hotel} from '../../types/hotel';

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
});

const Home = () => {
  const {data, error, isLoading} = useGetHotelByNameQuery();
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables

  const snapPoints = useMemo(() => ['25%', '40%'], []);
  // callbacks

  const navigateToDetails = (item: Hotel) => {
    navigation.navigate('Details', {
      item: item,
    });
  };

  const dummyArr = [];

  const openBottom = () => {
    bottomSheetRef.current.expand();
  };

  const closeBottom = () => {
    bottomSheetRef.current.close();
  };
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <HotelHeader openFilter={openBottom} />
      <FlatList
        // @ts-ignore
        data={data}
        style={{marginTop: 10}}
        renderItem={({item}) => (
          <HotelCard
            name={item?.name}
            price={item?.price}
            stars={item?.stars}
            gallery={item?.gallery}
            navigate={() => navigateToDetails(item)}
          />
        )}
        ListEmptyComponent={() => (
          <>
            {!isLoading && (
              <View>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  No hotels Found.
                </Text>
              </View>
            )}
          </>
        )}
        ListHeaderComponent={() => (
          <>{isLoading && <ActivityIndicator size={'large'} color={'red'} />}</>
        )}
        numColumns={2}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: '#000'}}
        enablePanDownToClose={true}>
        <View style={styles.contentContainer}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginLeft: 20,
              color: 'white',
            }}>
            Sort By
          </Text>

          <Text
            style={{
              fontWeight: 'bold',
              color: 'grey',
              fontSize: 18,
              marginLeft: 20,
              marginTop: 10,
            }}>
            € Price
          </Text>

          <View style={{marginTop: 20}}>
            <TouchableOpacity
              style={{
                height: 50,
                marginRight: 20,
                borderRadius: 20,
                borderWidth: StyleSheet.hairlineWidth,
                justifyContent: 'center',
                alignItems: 'center',
                right: 0,
                marginLeft: 20,
                borderColor: 'grey',
                flexDirection: 'row',
              }}>
              <MaterialCommunityIcons
                name="sort-bool-ascending"
                color={'white'}
                size={22}
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  fontWeight: '600',
                  color: colors.lightGrey,
                  fontSize: 18,
                }}>
                Low to High
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                borderRadius: 20,
                borderWidth: StyleSheet.hairlineWidth,
                justifyContent: 'center',
                alignItems: 'center',
                right: 0,
                marginLeft: 20,
                marginRight: 20,
                borderColor: 'grey',
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <MaterialCommunityIcons
                name="sort-bool-descending"
                color={'white'}
                size={22}
                style={{marginRight: 10}}
              />
              <Text style={{fontWeight: '600', color: 'white', fontSize: 18}}>
                High to Low
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              height: 60,
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View
              style={{
                height: 50,
                borderWidth: StyleSheet.hairlineWidth,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
                flex: 1,
                borderRadius: 5,
                borderColor: 'white',
              }}>
              <TouchableOpacity onPress={closeBottom}>
                <Text
                  style={{
                    fontWeight: '600',
                    color: colors.lightGrey,
                    fontSize: 18,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 50,
                borderWidth: StyleSheet.hairlineWidth,
                justifyContent: 'center',
                alignItems: 'center',
                right: 0,
                marginLeft: 20,
                borderColor: 'white',
                backgroundColor: 'white',
                flexDirection: 'row',
                marginRight: 20,
                flex: 1,
                borderRadius: 5,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontWeight: '600',
                    color: '#000',
                    fontSize: 20,
                  }}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Home;
