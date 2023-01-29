import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { globalHitsOptions } from "../../helpers/api_headers_options";

const initialState = {
  isLoading: false,
  globalHitsPreview: [],
  globalHits: [],
  error: null,
};

export const fetchGlobalHits = createAsyncThunk(
  "charts/fetchGlobalHits",
  async () => {
    const response = await axios.request(globalHitsOptions);
    return response.data;
  }
);

const globalHitsSlice = createSlice({
  name: "global",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalHits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGlobalHits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.globalHits = action.payload.tracks;
        state.globalHitsPreview = action.payload.tracks.slice(0, 6);
      })
      .addCase(fetchGlobalHits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const getGlocalHitsPreview = (state) =>
  state.globalHits.globalHitsPreview;
export const getGlobalHits = (state) => state.globalHits.globalHits;
export const isFetching = (state) => state.globalHits.isLoading;
export default globalHitsSlice.reducer;
