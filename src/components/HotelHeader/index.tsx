import React from 'react';
import {Text, TextInput, View} from 'react-native';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styling from './hotelheader.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Strings} from '../../utils/strings';

interface HotelHeaderProps {
  openFilter: () => void;
}

const HotelHeader = ({openFilter}: HotelHeaderProps) => {
  return (
    <View>
      <MaterialCommunityIcons
        name="bell"
        color={'black'}
        size={20}
        style={{alignSelf: 'flex-end', marginRight: 20}}
      />
      <Text style={styling.headerTextStyle}>{Strings.searchFavorite}</Text>
      <View style={styling.searchContainer}>
        <TextInput
          style={styling.searchTextStyle}
          placeholder={Strings.search}
          placeholderTextColor={'grey'}
        />
        <View style={styling.searchIconContainer}>
          <MaterialCommunityIcons name="magnify" color={'black'} size={18} />
        </View>
        <View style={styling.filterContainer}>
          <TouchableOpacity onPress={() => openFilter()}>
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={'black'}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HotelHeader;
