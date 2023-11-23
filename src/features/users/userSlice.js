import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {},
});
export const { checkAuthenticated } = userSlice.actions;
export default userSlice.reducer;
