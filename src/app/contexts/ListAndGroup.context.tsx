"use client";

import { ListData, ListGroupData } from "@/types";
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
import { getListGroupsLocalStorage } from "../dashboard/services/offline/ListGroupOffline";
import { getListGroups } from "../dashboard/services/GroupListsService";

interface ContextProps {
	lists: ListData[];
	setLists: Dispatch<SetStateAction<ListData[]>>;

	listSelected: string | null;
	setListSelected: Dispatch<SetStateAction<string | null>>;

	listGroups: ListGroupData[];
	setListGroups: Dispatch<SetStateAction<ListGroupData[]>>;
}

const ListAndGroupContext = createContext<ContextProps>({
	lists: [],
	setLists: (): ListData[] => [],

	listSelected: "",
	setListSelected: (): string => "",

	listGroups: [],
	setListGroups: (): ListGroupData[] => [],
});

export const ListAndGroupContextProvider = ({
	children,
}: {
	children: any;
}) => {
	const [lists, setLists] = useState<ListData[]>([]);
	const [listSelected, setListSelected] = useState<string | null>(null);

	const [listGroups, setListGroups] = useState<ListGroupData[]>([]);

	useEffect(() => {
		const localLists = getListsLocalStorage();
		const localListGroups = getListGroupsLocalStorage();

		setLists(localLists);
		setListGroups(localListGroups);

		getLists()
			.then((l) => setLists(l))
			.catch((error) => console.log(error));

		getListGroups()
			.then((g) => setListGroups(g))
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

				listGroups,
				setListGroups,
			}}
		>
			{children}
		</ListAndGroupContext.Provider>
	);
};

export const useListAndGroupContext = () => useContext(ListAndGroupContext);
