import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import UIReducer from "./Slices/UISlice";
import OrderListsReducer from "./Slices/OrderListsSlice";
import ListsIndexedReducer from "./Slices/ListsIndexedSlice";

export const store = configureStore({
	reducer: {
		UI_Settings: UIReducer,
		user: userReducer,
		orderList: OrderListsReducer,
		listsIndexed: ListsIndexedReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
