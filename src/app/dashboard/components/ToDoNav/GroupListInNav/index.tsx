import React, { useState } from "react";
import {
	Box,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	TextField,
} from "@mui/material";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { FormatListBulletedOutlined } from "@mui/icons-material";

import { ListData, ListGroupData } from "@/types";
import ListInNav from "../ListInNav";
import { ToDoNavWidth } from "@/config/UISettings";
import {
	deleteListGroup,
	updateListGroup,
} from "@/app/services/GroupListsService";
import { useListAndGroupContext } from "@/app/contexts/ListAndGroup.context";
import { setListGroupsLocalStorage } from "@/app/services/offline/ListGroupOffline";
import ListContainedEditor from "./ListContainedEditor";

interface props {
	data: ListGroupData;
	lists: ListData[];
}

const GroupListInNav = ({ data, lists }: props) => {
	const { listGroups, setListGroups } = useListAndGroupContext();

	const { _id, title } = data;

	// ****************** Menu Desplegable ******************

	const [ungrouped, setUngrouped] = useState(true);

	// ****************** Menu Desplegable de opciones ******************

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMoreOptions = Boolean(anchorEl);

	const handleClickMoreButton = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMoreOptions = () => {
		setAnchorEl(null);
	};
	// ****************** Cambio de nombre ******************

	const [editingMode, setEditingMode] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const buttonChangeName = () => {
		setEditingMode(true);
		setInputValue(title);
		handleCloseMoreOptions();
	};

	const onChangeInput = (value: string) => {
		setInputValue(value);
	};

	const handleResetRename = () => {
		setEditingMode(false);
		setInputValue("");
	};

	const handleSubmit = async () => {
		const newGroup = await updateListGroup(_id, { ...data, title: inputValue });

		const newGroupsList = listGroups.map((g) => (g._id === _id ? newGroup : g));

		setListGroups(newGroupsList);
		setListGroupsLocalStorage(newGroupsList);
		handleResetRename();
	};

	/* ************************* Agregar/quitar listas ****************************** */

	const [openListContened, setOpenListContened] = React.useState(false);

	const handleClickOpen = () => {
		setOpenListContened(true);
		handleCloseMoreOptions();
	};

	const handleCloseListContened = () => {
		setOpenListContened(false);
	};

	// ****************** Eliminacion ******************

	const handleDeleteGroup = async () => {
		// todo: eliminar grupo

		const newGroupsList = await deleteListGroup(listGroups, _id);

		setListGroups(newGroupsList);
	};

	// ****************** Render ******************

	const editView = (
		<>
			<TextField
				size="small"
				autoFocus={true}
				value={inputValue}
				onChange={({ target: { value } }) => onChangeInput(value)}
				// onBlur={handleSubmit}
				onKeyDown={(e) => {
					if (e.key === "Enter") handleSubmit();
					if (e.key === "Escape") handleResetRename();
				}}
				inputProps={{
					style: {
						width: `calc(${ToDoNavWidth}px - 120px )`,
					},
				}}
			/>

			<IconButton edge={"end"} onClick={handleSubmit}>
				<CheckOutlinedIcon />
			</IconButton>
		</>
	);

	const normalView = (
		<>
			<ListItemText primary={title} />

			<KeyboardArrowDown
				sx={{
					// mr: -0.5,
					// opacity:,
					transform: ungrouped ? "rotate(-180deg)" : "rotate(0)",
					transition: "0.2s",
				}}
			/>
			<IconButton edge={"end"} onClick={handleClickMoreButton}>
				<MoreVertOutlinedIcon />
			</IconButton>
		</>
	);

	return (
		<>
			<Box>
				<ListItemButton onClick={() => setUngrouped(!ungrouped)}>
					<ListItemIcon>
						<SourceOutlinedIcon />
					</ListItemIcon>

					{editingMode ? editView : normalView}
				</ListItemButton>

				{ungrouped &&
					lists.map((list) => (
						<ListInNav key={list._id} data={list} inGroup={true} />
					))}
			</Box>

			{/* ************************* menu desplegable de opciones ****************************** */}
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={openMoreOptions}
				onClose={handleCloseMoreOptions}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClickOpen}>
					<ListItemIcon>
						<FormatListBulletedOutlined fontSize="small" />
					</ListItemIcon>
					Agregar o quitar listas
				</MenuItem>

				<MenuItem onClick={buttonChangeName}>
					<ListItemIcon>
						<DriveFileRenameOutlineOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Cambiar nombre
				</MenuItem>

				<MenuItem onClick={handleDeleteGroup}>
					<ListItemIcon>
						<DeleteOutlineOutlinedIcon fontSize="small" />
					</ListItemIcon>

					{lists.length ? "Desagrupar listas" : "Eliminar grupo"}
				</MenuItem>
			</Menu>

			{/* ************************* Panel para agregar/quitar listas ****************************** */}

			<ListContainedEditor
				listGroup={data}
				lists={lists}
				open={openListContened}
				onClose={handleCloseListContened}
			/>
		</>
	);
};

export default GroupListInNav;
