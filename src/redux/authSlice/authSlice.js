import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, data);
      console.log("login response >> ", response);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, data);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
