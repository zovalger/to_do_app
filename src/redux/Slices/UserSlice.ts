import { userAttributes } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const nullUser: userAttributes = {
	_id: "",
	firstName: "",
	lastName: "",
	username: "",
	email: "",
	createAt: "",
	updateAt: "",
};

const initialState = nullUser;

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData: (_state, action: PayloadAction<userAttributes>) => {
			return action.payload;
		},
		closeSesion: () => nullUser,
	},
});

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
