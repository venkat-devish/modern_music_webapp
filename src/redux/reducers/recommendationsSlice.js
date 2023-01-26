import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { recommendationOptions } from "../../helpers/api_headers_options";

export const fetchSongsRecommendations = createAsyncThunk(
  "recommendations/fetchSongsRecommendations",
  async () => {
    const response = await axios.request(recommendationOptions);
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  recommendations: [],
  error: null,
};

const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongsRecommendations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSongsRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recommendations = action.payload;
      })
      .addCase(fetchSongsRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.recommendations = [];
        state.error = action.error.message;
      });
  },
});

export const isLoading = (state) => state.recommendations.isLoading;
export const recommendationsList = (state) =>
  state.recommendations.recommendations;
export default recommendationsSlice.reducer;
