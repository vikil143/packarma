import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userLocalData from '../reducers/userLocalData';
import homeData from '../reducers/homeData';
import masterData from '../reducers/masterData';

export default configureStore({
  reducer: {
    userLocalData: userLocalData,
    homeData: homeData,
    masterData: masterData,
  },
  middleware: [
    ...getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
  ],
});
