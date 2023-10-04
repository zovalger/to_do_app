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
}

const TaskContext = createContext<ContextProps>({
	tasks: [],
	setTasks: (): TaskData[] => [],
});

export const TaskContextProvider = ({ children }: { children: any }) => {
	const [tasks, setTasks] = useState<TaskData[]>([]);

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
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);
