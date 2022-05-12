import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const SUCCESS = '1';
const INVALID = '0';
const FORCE_LOGOUT = '4';

export {SCREEN_WIDTH, SCREEN_HEIGHT, SUCCESS, INVALID, FORCE_LOGOUT};
export const Colors = {
  black: '#000000',
  white: '#fff',
  greenColor: '#BBD531',
  redColor: '#EE3F27',
  greyColor: '#E4E4E4',
  brownColor: '#52392F',
  yellowColor: '#F0D4A1',
  orangeColor: '#FF7F00',
  success: '#4BB543',
  danger: '#bb2124',
};
