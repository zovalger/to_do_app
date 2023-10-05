import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import {
	getNameList,
	getSmartListName,
	uptadeListInArray,
} from "@/app/helper/List.helper";
import { useListAndGroupContext } from "@/app/contexts/ListAndGroup.context";
import { TextField } from "@mui/material";
import { updateList } from "@/app/services/ListsService";
import { setListsLocalStorage } from "@/app/services/offline/ListsOffline";

const TitleListHeader = () => {
	const { lists, setLists, listSelected } = useListAndGroupContext();

	const [inputValue, setInputValue] = useState("");
	const [editingMode, setEditingMode] = useState(false);

	const ifSmartList = getSmartListName(listSelected);

	const title = ifSmartList || getNameList(lists, listSelected);

	const handleClickTitle = () => {
		if (!listSelected) return;

		if (ifSmartList) return;

		setInputValue(title);
		setEditingMode(true);
	};

	const onChange = (value: string) => {
		setInputValue(value);
	};

	const handleSubmit = async () => {
		if (!listSelected) return;

		const oldList = lists.find((l) => l._id == listSelected);

		if (!oldList) return;

		const newList = await updateList(listSelected, {
			...oldList,
			title: inputValue,
		});

		const newArr = uptadeListInArray(lists, oldList._id, newList);

		setListsLocalStorage(newArr);
		setLists(newArr);

		setEditingMode(false);
	};

	useEffect(() => {
		setInputValue("");
		setEditingMode(false);

		return () => {};
	}, [listSelected]);

	return editingMode ? (
		<TextField
			value={inputValue}
			onChange={({ target: { value } }) => {
				onChange(value);
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter") handleSubmit();
			}}
			onBlur={() => {
				handleSubmit();
			}}
		/>
	) : (
		<Typography onClick={() => handleClickTitle()} variant="h5" component="div">
			{title}
		</Typography>
	);
};

export default TitleListHeader;