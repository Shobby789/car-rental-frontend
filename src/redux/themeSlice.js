import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  theme: "light",
  palette: {
    brandOrange: "#F15C20",
    brandRed: "#EF3C36",
    background: "#fff",
    dark_contrast_background: "#fdfdfd",
    light_contrast_background: "#e7e7e7",
    color: "#000",
    dark_contrast_color: "#B4B4B4",
    light_contrast_color: "#8f8f8f",
  },
};

export const themeSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setTheme: (state, action) => {
      console.log("action.payload >> ", action.payload);
      if (action.payload == "light") {
        state.palette = {
          brandOrange: "#F15C20",
          brandRed: "#EF3C36",
          background: "#fff",
          dark_contrast_background: "#fdfdfd",
          light_contrast_background: "#e7e7e7",
          color: "#000",
          dark_contrast_color: "#B4B4B4",
          light_contrast_color: "#8f8f8f",
        };
      }
      else{
        state.palette = {
            brandOrange: "#F15C20",
          brandRed: "#EF3C36",
          background: "#222222",
          dark_contrast_background: "#2d2d2d",
          light_contrast_background: "#393939",
          color: "#fff",
          dark_contrast_color: "#E7E7E7",
          light_contrast_color: "#B4B4B4",
        }
      }
      state.theme = action.payload;
    },
    setPalette: (state, action) => {
      state.palette = action.payload;
    },
  },
});

export const { toggleOpen, setTheme, setPalette } = themeSlice.actions;

export default themeSlice.reducer;
