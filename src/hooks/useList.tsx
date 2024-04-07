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
import { setTasksToView } from "@/redux/Slices/TasksToViewSlice";
import { setListSelected } from "@/redux/Slices/ToDoNavPropertiesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ListAttributes } from "@/types";
import { useEffect, useState } from "react";

// interface props {}

const useList = (_id?: string) => {
	const listsIndexed = useAppSelector((e) => e.listsIndexed);
	const { listSelected } = useAppSelector((e) => e.toDoNavProperties);
	const tasksByList = useAppSelector((e) => e.tasksByList);

	const dispatch = useAppDispatch();

	const [listData, setListData] = useState<ListAttributes | null>(null);
	const [loanding, setLoanding] = useState(false);

	const getData = async () => {
		try {
			setLoanding(true);
			const listData = listsIndexed[`${_id}`];

			// todo: hacer peticiones al servidor
			// todo: solo si no se encuentra

			setListData(listData);

			setLoanding(false);
		} catch (error) {
			console.log(error);
		}
	};

	const getAllListId = () => Object.values(listsIndexed).map((l) => l._id);

	useEffect(() => {
		if (!_id) return;

		getData();
	}, [_id]);

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
		const oldList = listsIndexed[`${_id}`];

		const list = { ...oldList, ...listData };

		dispatch(addOrUpdateListToIndex({ _id, data: list }));
	};

	const deleteList = async (_id: string) => {
		if (listSelected == _id) dispatch(setListSelected(SmartListsIds.myDay));

		dispatch(removeListFromOrder(_id));
		dispatch(removeListFromIndexed(_id));
	};

	// ************* funciones avanzadas *************

	const selectList = (_id: string) => {
		const tasks = tasksByList[_id];

		dispatch(setListSelected(_id));

		dispatch(setTasksToView([{ listId: _id, tasks }]));
	};

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
		listData,
		loanding,

		// *************

		getAllListId,

		// *************

		createList,
		createGroup,
		updateList,
		deleteList,

		// *****************

		extraListFunctions,
		selectList,
	};
};

export default useList;
