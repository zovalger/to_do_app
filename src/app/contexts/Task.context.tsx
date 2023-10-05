"use client";

import { TaskData } from "@/types";
import {
	createContext,
	useState,
	useContext,
	Dispatch,
	SetStateAction,
	useEffect,
} from "react";
import { getTasks } from "../services/TasksService";
import { getTasksLocalStorage } from "../services/offline/TasksOffline";

interface ContextProps {
	tasks: TaskData[];
	setTasks: Dispatch<SetStateAction<TaskData[]>>;

	taskEditing: TaskData | null;
	setTaskEditing: Dispatch<SetStateAction<TaskData | null>>;
}

const TaskContext = createContext<ContextProps>({
	tasks: [],
	setTasks: (): TaskData[] => [],

	taskEditing: null,
	setTaskEditing: (): TaskData | null => null,
});

export const TaskContextProvider = ({ children }: { children: any }) => {
	const [tasks, setTasks] = useState<TaskData[]>([]);
	const [taskEditing, setTaskEditing] = useState<TaskData | null>(null);

	useEffect(() => {
		const localTasks = getTasksLocalStorage();

		setTasks(localTasks);

		getTasks()
			.then((l) => setTasks(l))
			.catch((error) => console.log(error));

		return () => {};
	}, []);

	return (
		<TaskContext.Provider
			value={{
				tasks,
				setTasks,
				taskEditing,
				setTaskEditing,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);
