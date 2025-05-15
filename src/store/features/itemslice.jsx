import { createSlice } from '@reduxjs/toolkit'
// import { DEFAULT_ITEMS } from '/Myntra Project/My_myntra/src/old-clone/data/items';
export const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers:{
    addinitialItems:(state,action)=>{
   
      return action.payload
  
 
    }

  }
}) 
export const {addinitialItems} = itemSlice.actions
export default itemSlice.reducer

