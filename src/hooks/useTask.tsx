import {
	addOrUpdateTaskToIndex,
	removeTaskFromIndexed,
} from "@/redux/Slices/TasksIndexedSlice";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { TaskAttributes } from "@/types";
import { useEffect, useState } from "react";

// interface props {}

const useTask = (_id?: string) => {
	const tasksIndexed = useAppSelector((e) => e.tasksIndexed);
	// const { taskSelected } = useAppSelector((e) => e.toDoNavProperties);
	const dispatch = useAppDispatch();

	const [taskData, setTaskData] = useState<TaskAttributes | null>(null);
	const [loanding, setLoanding] = useState(false);

	const getData = async () => {
		try {
			setLoanding(true);
			const taskData = tasksIndexed[`${_id}`];

			// todo: hacer peticiones al servidor
			// todo: solo si no se encuentra

			setTaskData(taskData);

			setLoanding(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (!_id) return;

		getData();
	}, [_id]);

	const createTask = async () => {
		// const newTask = { ...taskDefaultValues() };
		// dispatch(addOrUpdateTaskToIndex({ _id: newTask._id, data: newTask }));
		// dispatch(addTaskToOrder(newTask));
	};

	const createGroup = async () => {
		// const newGroup = { ...taskDefaultValues(true) };
		// dispatch(addOrUpdateTaskToIndex({ _id: newGroup._id, data: newGroup }));
		// dispatch(addTaskToOrder(newGroup));
	};

	const updateTask = async (_id: string, taskData: Partial<TaskAttributes>) => {
		// const oldTask = tasksIndexed[`${_id}`];
		// const task = { ...oldTask, ...taskData };
		// dispatch(addOrUpdateTaskToIndex({ _id, data: task }));
	};

	const deleteTask = async (_id: string) => {
		// if (taskSelected == _id) dispatch(setTaskSelected(SmartTasksIds.myDay));
		// dispatch(removeTaskFromOrder(_id));
		// dispatch(removeTaskFromIndexed(_id));
	};

	// ************* funciones avanzadas *************

	const extraTaskFunctions = {
		changeName: () => {},
		shareTask: () => {},
		extractFromGroup: () => {},
		printTask: () => {},
		sendForEmail: () => {},
		moveTo: () => {},
		pin: () => {},
		duplicate: () => {},
	};

	return {
		taskData,
		loanding,
		createTask,
		createGroup,
		updateTask,
		deleteTask,
		extraTaskFunctions,
	};
};

export default useTask;
