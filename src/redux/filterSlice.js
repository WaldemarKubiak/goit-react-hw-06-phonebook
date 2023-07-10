import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = {
//   value: '',
// };
const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  //   initialState: '',
  reducers: {
    filterAction(state, action) {
      //   state.value = action.payload;
      state = action.payload;
    },
  },
});

export const { filterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
