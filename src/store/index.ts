// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import vacationPlanReducer from "@/features/vacationPlan/vacationPlanSlice";  

// Example dummy reducer
export const store = configureStore({
  reducer: {
    vacationPlan: vacationPlanReducer,
  },
});

// Types for use elsewhere
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
