// store/index.ts
import { configureStore } from "@reduxjs/toolkit";

// Example dummy reducer
const dummyReducer = (state = {}) => state;

export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});

// Types for use elsewhere
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
