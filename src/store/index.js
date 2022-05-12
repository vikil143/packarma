import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userLocalData from '../reducers/userLocalData';
import homeData from '../reducers/homeData';

export default configureStore({
  reducer: {
    userLocalData: userLocalData,
    homeData: homeData,
  },
  middleware: [
    ...getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
  ],
});
