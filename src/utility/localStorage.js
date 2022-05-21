import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGIN = 'LOGIN';
const TOKEN = 'TOKEN';

const getLocalData = async () => await AsyncStorage.getItem(LOGIN);

const setLocalData = async value =>
  await AsyncStorage.setItem(LOGIN, String(value));

const removeLocalData = async () => await AsyncStorage.removeItem(LOGIN);

const getTokenData = async () => await AsyncStorage.getItem(TOKEN);

const setTokenData = async value => await AsyncStorage.setItem(TOKEN, value);

const removeTokenData = async () => await AsyncStorage.removeItem(TOKEN);

export {
  getLocalData,
  setLocalData,
  getTokenData,
  setTokenData,
  removeTokenData,
  removeLocalData,
};
