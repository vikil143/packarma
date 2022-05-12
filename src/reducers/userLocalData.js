import {createSlice} from '@reduxjs/toolkit';

const userLocalData = createSlice({
  name: 'userLocalData',
  initialState: {
    token: '',
  },
  reducers: {
    storeUserData: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const {storeUserData} = userLocalData.actions;

export default userLocalData.reducer;
