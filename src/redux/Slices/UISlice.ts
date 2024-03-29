import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UI_Settings from "@/config/UI_Settings";
import { rightPanels } from "@/enums";

export const UISlice = createSlice({
	name: "UI_Settings",
	initialState: UI_Settings,
	reducers: {
		toggleLeftPanel: (state) => {
			const { leftPanelOpen } = state;

			return { ...state, leftPanelOpen: !leftPanelOpen };
		},

		openLeftPanel: (state) => ({ ...state, leftPanelOpen: true }),
		closeLeftPanel: (state) => ({ ...state, leftPanelOpen: false }),

		openRightPanel: (state, actions: PayloadAction<rightPanels>) => {
			const { payload } = actions;

			return {
				...state,
				rightPanelOpen: true,
				rightPanel_Id: payload,
			};
		},

		closeRightPanel: (state) => {
			return {
				...state,
				rightPanelOpen: false,
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	toggleLeftPanel,
	openLeftPanel,
	closeLeftPanel,
	openRightPanel,
	closeRightPanel,
} = UISlice.actions;

export default UISlice.reducer;
