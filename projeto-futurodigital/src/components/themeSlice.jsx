import { createSlice } from '@reduxjs/toolkit';

const temaSalvo = localStorage.getItem('isDarkMode');

const initialState = {
  isDarkMode: temaSalvo !== null ? JSON.parse(temaSalvo) : true, 
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;

      localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;