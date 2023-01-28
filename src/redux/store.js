import { configureStore } from "@reduxjs/toolkit";
import recommendationsReducer from "./reducers/recommendationsSlice";
import globalHitsReducer from "./reducers/globalHitsSlice";

const store = configureStore({
  reducer: {
    recommendations: recommendationsReducer,
    globalHits: globalHitsReducer,
  },
});

export default store;
