import { configureStore } from "@reduxjs/toolkit";
import recommendationsReducer from "./features/recommendationsSlice";
import globalHitsReducer from "./features/globalHitsSlice";

const store = configureStore({
  reducer: {
    recommendations: recommendationsReducer,
    globalHits: globalHitsReducer,
  },
});

export default store;
