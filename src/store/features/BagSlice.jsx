import { createSlice } from '@reduxjs/toolkit'
// import { DEFAULT_ITEMS } from '/Myntra Project/My_myntra/src/old-clone/data/items';
export const BagSlice = createSlice({
  name: 'Bagitems',
  initialState: [],
  reducers:{
    addtobag:(state,action)=>{

       state.push(action.payload)
  
 
    },
      removetobag:(state,action)=>{

      return state.filter(itemid=>itemid!==action.payload)
  
 
    }

  }
}) 
export const {addtobag,removetobag} = BagSlice.actions
export default BagSlice.reducer

