import { configureStore } from '@reduxjs/toolkit';
import {itemSlice} from './features/itemslice';
import { fetchstatusSlice } from './features/loadState';
import { BagSlice } from './features/BagSlice';
export const myntrastore = configureStore({
  reducer: {
    items:itemSlice.reducer,
    fetchstatus:fetchstatusSlice.reducer,
    Bagitems:BagSlice.reducer
  },
});
