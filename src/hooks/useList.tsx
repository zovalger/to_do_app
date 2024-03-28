import { listDefaultValues } from "@/defaultValues";
import {
	addOrUpdateListToIndex,
	removeListFromIndexed,
} from "@/redux/Slices/ListsIndexedSlice";
import {
	addListToOrder,
	removeListFromOrder,
} from "@/redux/Slices/OrderListsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ListAttributes } from "@/types";

const useList = () => {
	const indexed = useAppSelector((e) => e.listsIndexed);
	const dispatch = useAppDispatch();

	const createList = async () => {
		const newList = { ...listDefaultValues() };

		dispatch(addOrUpdateListToIndex({ _id: newList._id, data: newList }));

		dispatch(addListToOrder(newList));
	};

	const createGroup = async () => {
		const newGroup = { ...listDefaultValues(true) };

		dispatch(addOrUpdateListToIndex({ _id: newGroup._id, data: newGroup }));
		dispatch(addListToOrder(newGroup));
	};

	const updateList = async (_id: string, listData: Partial<ListAttributes>) => {
		const oldList = indexed[`${_id}`];

		const list = { ...oldList, ...listData };

		dispatch(addOrUpdateListToIndex({ _id, data: list }));
	};

	const deleteList = async (_id: string) => {
		dispatch(removeListFromOrder(_id));
		dispatch(removeListFromIndexed(_id));
	};

	return {
		createList,
		createGroup,
		updateList,
		deleteList,
	};
};

export default useList;
