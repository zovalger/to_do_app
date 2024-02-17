import { createSlice } from "@reduxjs/toolkit";
import UI_Settings from "@/config/UI_Settings";

export const UISlice = createSlice({
	name: "UI_Settings",
	initialState: UI_Settings,
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = UISlice.actions;

export default UISlice.reducer;
