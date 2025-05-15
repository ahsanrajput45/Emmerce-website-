import { createSlice } from '@reduxjs/toolkit'
export const fetchstatusSlice = createSlice({
  name: 'fetchstatus',
  initialState: {
fetchdone:false,
currentlyfetching:false,

  },




  reducers:{
    markfetchdone:(state,action)=>{
       state.fetchdone=true;
    },
    markfetchstarting:(state,action)=>{
      state.currentlyfetching=true;
    },
    markfetchfinished:(state,action)=>{
    state.currentlyfetching=false;
    }

  }
}) 
export const {markfetchdone,markfetchstarting,markfetchfinished}  = fetchstatusSlice.actions
export default fetchstatusSlice.reducer;



