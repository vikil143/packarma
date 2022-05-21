import {createSlice} from '@reduxjs/toolkit';

const userLocalData = createSlice({
  name: 'userLocalData',
  initialState: {
    token: '',
    userId: '',
  },
  reducers: {
    storeUserData: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
  },
});

export const {storeUserData} = userLocalData.actions;

export default userLocalData.reducer;
