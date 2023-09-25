import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { dataSteps } from "../helpers/dataSteps";

export interface AppState {
  isFormOpen: {
    one: boolean;
    two: boolean;
    three: boolean;
    four: boolean;
    five: boolean;
  };
  isOpacityTransition: boolean;
  currentImg: string;
  steps: any[];
  checkoutLoading: boolean;
  isCheckoutApprove: { approve: boolean; interest: boolean };
  selectedOption: string;
}

type OpenFormAction = {
  type: string; // Add the action type if not defined
  payload: keyof AppState["isFormOpen"]; // Ensure payload is a valid key of isFormOpen
};

type CheckoutAction = {
  type: string; // Add the action type if not defined
  payload: keyof AppState["isCheckoutApprove"];
};

const initialState: AppState = {
  isFormOpen: { one: true, two: false, three: false, four: false, five: true },
  isOpacityTransition: false,
  currentImg: dataSteps[0].img,
  steps: dataSteps,
  checkoutLoading: false,
  isCheckoutApprove: { approve: false, interest: false },
  selectedOption: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openForm: (state, action: OpenFormAction) => {
      // Reset all form states to false
      state.isFormOpen = {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
      };

      // Set the desired form state to true based on the action payload
      state.isFormOpen[action.payload] = true;
      state.isOpacityTransition = false;
    },
    setOpacityTransition: (state, action) => {
      state.isOpacityTransition = action.payload;
    },
    setCurrentImage: (state, action) => {
      state.currentImg = state.steps[action.payload].img;
    },
    setCheckoutLoading: (state, action) => {
      state.checkoutLoading = action.payload;
    },
    setCheckoutConfirmation: (state, action: CheckoutAction) => {
      state.isCheckoutApprove = {
        approve: false,
        interest: false,
      };

      state.isCheckoutApprove[action.payload] = true;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setCheckoutReset: (state) => {
      state.isCheckoutApprove.approve = false;
      state.isCheckoutApprove.interest = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openForm,
  setOpacityTransition,
  setCurrentImage,
  setCheckoutLoading,
  setCheckoutConfirmation,
  setSelectedOption,
  setCheckoutReset,
} = appSlice.actions;
export default appSlice.reducer;
