import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../../utils/colors';

interface HotelheaderStylesProp {
  headerTextStyle: TextStyle;
  searchContainer: ViewStyle;
  searchIconContainer: TextStyle;
  searchTextStyle: TextStyle;
  filterContainer: ViewStyle;
}

export default StyleSheet.create<HotelheaderStylesProp>({
  filterContainer: {
    backgroundColor: colors.lightGrey,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 10,
    marginRight: 10,
  },
  headerTextStyle: {
    fontSize: 22,
    width: 250,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  },
  searchIconContainer: {
    position: 'absolute',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTextStyle: {
    backgroundColor: colors.lightGrey,
    height: 40,
    flex: 1,
    borderRadius: 10,
    paddingLeft: 30,
  },
});
