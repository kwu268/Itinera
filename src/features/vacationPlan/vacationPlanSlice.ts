import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VacationPlanInfo } from '@/types';

interface VacationPlanState {
  plans: VacationPlanInfo[];
  selectedPlanId?: string;
}

const initialState: VacationPlanState = {
  plans: [],
  selectedPlanId: undefined,
};

const vacationPlanSlice = createSlice({
  name: 'vacationPlan',
  initialState,
  reducers: {
    addVacationPlan: (state, action: PayloadAction<VacationPlanInfo>) => {
      state.plans.push(action.payload);
    },
    updateVacationPlan: (state, action: PayloadAction<VacationPlanInfo>) => {
      const index = state.plans.findIndex(
        (currentPlan) => currentPlan.id === action.payload.id
      );
      if (index !== -1) {
        state.plans[index] = action.payload;
      }
    },
    deleteVacationPlan: (state, action: PayloadAction<string>) => {
      state.plans = state.plans.filter(
        (currentPlan) => currentPlan.id !== action.payload
      );
    },
    selectVacationPlan: (state, action: PayloadAction<string | undefined>) => {
      state.selectedPlanId = action.payload;
    },
    setVacationPlans: (state, action: PayloadAction<VacationPlanInfo[]>) => {
      state.plans = action.payload;
    },
  },
});

export const {
  addVacationPlan,
  updateVacationPlan,
  deleteVacationPlan,
  selectVacationPlan,
  setVacationPlans,
} = vacationPlanSlice.actions;
export default vacationPlanSlice.reducer;
