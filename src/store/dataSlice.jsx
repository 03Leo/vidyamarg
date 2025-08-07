import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  colleges: [],
  hostels: [],
  lastCollegeId: 0,
  lastHostelId: 0,
};

// Async thunk to fetch hostels
export const fetchHostels = createAsyncThunk('data/fetchHostels', async () => {
  const response = await axios.get('http://localhost:5000/api/hostels');
  console.log('Fetched hostels:', response.data);
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addCollege: (state, action) => {
      state.lastCollegeId += 1;
      state.colleges.push({
        id: state.lastCollegeId,
        ...action.payload,
      });
    },
    addHostel: (state, action) => {
      state.lastHostelId += 1;
      state.hostels.push({
        id: state.lastHostelId,
        ...action.payload,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHostels.fulfilled, (state, action) => {
      action.payload.forEach((hostel) => {
        state.lastHostelId += 1;
        state.hostels.push({
          id: state.lastHostelId,
          ...hostel,
        });
      });
    });
  },
});

export const { addCollege, addHostel } = dataSlice.actions;
export default dataSlice.reducer;

