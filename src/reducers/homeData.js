import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../utility/api';
import {SUCCESS} from '../utility/constants';

export const getBannerData = createAsyncThunk(
  'getBannerData',
  async ({data}) => {
    const response = await api({
      url: 'banner/listing',
      data: data,
    });

    return response.data;
  },
);

export const getCategoryData = createAsyncThunk(
  'getCategoryData',
  async ({data}) => {
    const response = await api({
      url: 'category/listing',
      data: data,
    });

    return response.data;
  },
);

export const getSubCategoryData = createAsyncThunk(
  'getSubCategoryData',
  async ({data}) => {
    const response = await api({url: 'sub_category/listing', data});

    return response.data;
  },
);

export const getTreamentData = createAsyncThunk(
  'getTreamentData',
  async ({data}) => {
    const response = await api({
      url: 'packaging_treatment/listing',
      data,
    });

    return response.data;
  },
);

export const getProductData = createAsyncThunk(
  'getProductData',
  async ({data}) => {
    const response = await api({
      url: 'products/listing',
      data,
    });

    return response.data;
  },
);

const homeData = createSlice({
  name: 'homeData',
  initialState: {
    loader: false,
    bannerData: [],
    categoryData: [],
    subCategoryData: [],
    treamentData: [],
    productData: [],
  },
  extraReducers: {
    [getBannerData.pending]: (state, action) => {
      console.log('on pending ', action.payload);
    },
    [getBannerData.fulfilled]: (state, action) => {
      console.log('### response data banner', action.payload);
      if (action.payload.success === SUCCESS) {
        state.bannerData = action.payload.data.result;
      }
    },
    [getBannerData.rejected]: (state, action) => {
      console.log('on reject ', action.payload);
    },

    [getCategoryData.pending]: (state, action) => {},
    [getCategoryData.fulfilled]: (state, action) => {
      console.log('### response data category...', action.payload.data);
      if (action.payload.success === SUCCESS) {
        state.categoryData = action.payload.data.result;
      }
    },
    [getCategoryData.rejected]: (state, action) => {
      console.log('ON reject ', action.payload);
    },
    [getTreamentData.pending]: (state, action) => {},
    [getTreamentData.fulfilled]: (state, action) => {
      console.log('### response data', action.payload);
      if (action.payload.success === SUCCESS) {
        state.treamentData = action.payload.data.result;
      }
    },
    [getTreamentData.rejected]: (state, action) => {},
    [getProductData.pending]: (state, action) => {
      // if (action.payload.success === SUCCESS) {
      // }
    },
    [getProductData.fulfilled]: (state, action) => {
      state.productData = action.payload.data.result;
    },
    [getProductData.rejected]: (state, action) => {},
    [getSubCategoryData.pending]: (state, action) => {},
    [getSubCategoryData.fulfilled]: (state, action) => {
      if (action.payload.success === SUCCESS) {
        state.subCategoryData = action.payload.data.result;
      }
    },
    [getSubCategoryData.rejected]: (state, action) => {},
  },
});

export default homeData.reducer;
