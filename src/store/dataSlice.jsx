import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  colleges: [],
  hostels: [],
  lastCollegeId: 0,
  lastHostelId: 0,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addCollege: (state, action) => {
      state.lastCollegeId += 1;
      state.colleges.push({
        id: state.lastCollegeId,
        name: action.payload.name,
        location: action.payload.location,
        description: action.payload.description,
        images: action.payload.images || [],
        roomTypes: action.payload.roomTypes || [],
        amenities: action.payload.amenities || [],
      });
    },
    addHostel: (state, action) => {
      state.lastHostelId += 1;
      state.hostels.push({
        id: state.lastHostelId,
        name: action.payload.name,
        location: action.payload.location,
        description: action.payload.description,
        images: action.payload.images || [],
        roomTypes: action.payload.roomTypes || [],
        amenities: action.payload.amenities || [],
      });
    },
  },
});

export const { addCollege, addHostel } = dataSlice.actions;
export default dataSlice.reducer;
