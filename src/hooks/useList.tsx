import { listDefaultValues } from "@/defaultValues";
import { SmartListsIds } from "@/enums";
import {
	addOrUpdateListToIndex,
	removeListFromIndexed,
} from "@/redux/Slices/ListsIndexedSlice";
import {
	addListToOrder,
	removeListFromOrder,
} from "@/redux/Slices/OrderListsSlice";
import { setListSelected } from "@/redux/Slices/ToDoNavPropertiesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ListAttributes } from "@/types";

const useList = () => {
	const indexed = useAppSelector((e) => e.listsIndexed);
	const { listSelected } = useAppSelector((e) => e.toDoNavProperties);
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
		if (listSelected == _id) dispatch(setListSelected(SmartListsIds.myDay));

		dispatch(removeListFromOrder(_id));
		dispatch(removeListFromIndexed(_id));
	};

	// ************* funciones avanzadas *************

	const extraListFunctions = {
		changeName: () => {},
		shareList: () => {},
		extractFromGroup: () => {},
		printList: () => {},
		sendForEmail: () => {},
		moveTo: () => {},
		pin: () => {},
		duplicate: () => {},
	};

	return {
		createList,
		createGroup,
		updateList,
		deleteList,
		extraListFunctions,
	};
};

export default useList;
