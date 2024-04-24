import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import authReducer from "./authSlice/authSlice";

export default configureStore({
  reducer: {
    global: themeReducer,
    auth: authReducer,
  },
});
