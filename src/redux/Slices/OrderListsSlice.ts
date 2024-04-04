import { OrderListTestdata } from "@/test_data/ListsTestData";
import { ListAttributes, OrderList } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = OrderListTestdata;

export const OrderListSlice = createSlice({
	name: "orderList",
	initialState,
	reducers: {
		// set data
		setOrderListData: (_state, actions: PayloadAction<OrderList[]>) => {
			return actions.payload;
		},
		setOrderInGroup: (
			state,
			actions: PayloadAction<{ _id: string; childrens: OrderList[] }>
		) => {
			const { _id, childrens } = actions.payload;

			return state.map((l) => (l._id === _id ? { ...l, childrens } : l));
		},

		// add list
		addListToOrder: (state, actions: PayloadAction<ListAttributes>) => {
			const { _id, type } = actions.payload;

			return [...state, { _id, childrens: [], type }];
		},

		removeListFromOrder: (state, actions: PayloadAction<string>) => {
			const _id = actions.payload;

			return state.filter((l) => l._id != _id);
		},

		// move to
		// insert into
		// extract from | move to
	},
});

// Action creators are generated for each case reducer function
export const {
	setOrderListData,
	setOrderInGroup,
	addListToOrder,
	removeListFromOrder,
} = OrderListSlice.actions;

export default OrderListSlice.reducer;
