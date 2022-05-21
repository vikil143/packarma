import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../utility/api';

export const getMeasureUnits = createAsyncThunk(
  'getMeasureUnits',
  async ({data}) => {
    const response = await api({
      url: 'measurement_unit/listing',
      data,
    });

    return response.data;
  },
);

export const getStorageCondition = createAsyncThunk(
  'getStorageCondition',
  async ({data}) => {
    const response = await api({
      url: 'storage_condition/listing',
      data,
    });

    return response.data;
  },
);

export const getMachine = createAsyncThunk('getMachine', async ({data}) => {
  const response = await api({
    url: 'packaging_machine/listing',
    data,
  });

  return response.data;
});

export const getProductForm = createAsyncThunk(
  'getProductForm',
  async ({data}) => {
    const response = await api({
      url: 'product_form/listing',
      data,
    });

    return response.data;
  },
);

export const getPackagingType = createAsyncThunk(
  'getPackagingTreament',
  async ({data}) => {
    const response = await api({
      url: 'packaging_type/listing',
      data,
    });

    return response.data;
  },
);

const masterData = createSlice({
  name: 'masterData',
  initialState: {
    measureUnits: [],
    storageConditions: [],
    machine: [],
    productForm: [],
    packagingType: [],
  },
  extraReducers: {
    [getMeasureUnits.pending]: (state, action) => {},
    [getMeasureUnits.fulfilled]: (state, action) => {
      state.measureUnits = action.payload.data.result;
    },
    [getMeasureUnits.rejected]: (state, action) => {},

    [getStorageCondition.pending]: (state, action) => {},
    [getStorageCondition.fulfilled]: (state, action) => {
      state.storageConditions = action.payload.data.result;
    },
    [getStorageCondition.rejected]: (state, action) => {},

    [getMachine.pending]: (state, action) => {},
    [getMachine.fulfilled]: (state, action) => {
      state.machine = action.payload.data.result;
    },
    [getMachine.rejected]: (state, action) => {},

    [getProductForm.pending]: (state, action) => {},
    [getProductForm.fulfilled]: (state, action) => {
      state.productForm = action.payload.data.result;
    },
    [getProductForm.rejected]: (state, action) => {},

    [getPackagingType.pending]: (state, action) => {},
    [getPackagingType.fulfilled]: (state, action) => {
      state.packagingType = action.payload.data.result;
    },
    [getPackagingType.rejected]: (state, action) => {},
  },
});

export default masterData.reducer;
