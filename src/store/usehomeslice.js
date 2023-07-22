import { createSlice } from '@reduxjs/toolkit'

export const usehomeslice = createSlice({
  name: 'home',
  initialState: {
    url:{},
    genres: {},
  },
  reducers: {
    getApiConfigurations: (state,action) => {
        state.url = action.payload;
    },
    getGenres : (state,action) => {
        state.genres = action.payload;
    }
  }
})

export const {getApiConfigurations, getGenres } = usehomeslice.actions

export default usehomeslice.reducer