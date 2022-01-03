import { createSlice } from '@reduxjs/toolkit';

//setting initial state
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTraveTimeDestination: (state, action) => {
      state.setTraveTimeDestination = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTraveTimeDestination } =
  navSlice.actions;

//selectors
//goes into nav origin and give the current value of the data layer
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
