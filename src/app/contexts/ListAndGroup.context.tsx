"use client";

import { ListData } from "@/types";
import {
	createContext,
	useState,
	useContext,
	Dispatch,
	SetStateAction,
	useEffect,
} from "react";
import { getListsLocalStorage } from "../dashboard/services/offline/ListsOffline";
import { getLists } from "../dashboard/services/ListsService";

interface ContextProps {
	lists: ListData[];
	setLists: Dispatch<SetStateAction<ListData[]>>;
	listSelected: string | null;
	setListSelected: Dispatch<SetStateAction<string | null>>;
}

const ListAndGroupContext = createContext<ContextProps>({
	lists: [],
	setLists: (): ListData[] => [],
	listSelected: "",
	setListSelected: (): string => "",
});

export const ListAndGroupContextProvider = ({
	children,
}: {
	children: any;
}) => {
	const [lists, setLists] = useState<ListData[]>([]);
	const [listSelected, setListSelected] = useState<string | null>(null);

	useEffect(() => {
		const localLists = getListsLocalStorage();

		setLists(localLists);

		getLists()
			.then((l) => setLists(l))
			.catch((error) => console.log(error));

		return () => {};
	}, []);

	return (
		<ListAndGroupContext.Provider
			value={{
				lists,
				setLists,
				listSelected,
				setListSelected,
			}}
		>
			{children}
		</ListAndGroupContext.Provider>
	);
};

export const useListAndGroupContext = () => useContext(ListAndGroupContext);
