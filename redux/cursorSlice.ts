import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface CursorState {
  state: "mouseenter" | "mouseleave";
}

// Define the initial state using that type
const initialState: CursorState = {
  state: "mouseleave",
};

export const cursorSlice = createSlice({
  name: "cursor",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    mouseEnter: state => {
      state.state = "mouseenter";
    },
    mouseLeave: state => {
      state.state = "mouseleave";
    },
  },
});

export const { mouseEnter, mouseLeave } = cursorSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.cursor.value;

export default cursorSlice.reducer;
