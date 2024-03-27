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

import { ListAttributes, OrderList } from "@/types";
import { ToDoNavWidth } from "@/config/UISettings";
import ListContainedEditor from "./ListContainedEditor";
import { useAppSelector } from "@/redux/store";
import ListItem from "../ListItem";

interface props {
	data: OrderList;
}

const GroupListItem = ({ data }: props) => {
	const { _id, childrens } = data;
	const listsIndexed = useAppSelector((e) => e.listsIndexed);
	const { title, parentId } = listsIndexed[`${_id}`];

	// ****************** Menu Desplegable ******************

	const [ungrouped, setUngrouped] = useState(true);

	// ****************** Menu Desplegable de opciones ******************

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMoreOptions = Boolean(anchorEl);

	// todo: agregar accesibilidad para el movil (mantener pulsado)
	const handleRightClick = (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		event.preventDefault();
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
		// const newGroup = await updateListGroup(_id, { ...data, title: inputValue });
		// const newGroupsList = listGroups.map((g) => (g._id === _id ? newGroup : g));
		// setListGroups(newGroupsList);
		// setListGroupsLocalStorage(newGroupsList);
		// handleResetRename();
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
		// const newGroupsList = await deleteListGroup(listGroups, _id);
		// setListGroups(newGroupsList);
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
		</>
	);

	if (!title) return "datos no encontrados";

	return (
		<>
			<Box onContextMenu={handleRightClick}>
				<ListItemButton onClick={() => setUngrouped(!ungrouped)}>
					<ListItemIcon>
						<SourceOutlinedIcon />
					</ListItemIcon>

					{editingMode ? editView : normalView}
				</ListItemButton>

				{ungrouped && childrens.map((l) => <ListItem key={l._id} data={l} />)}
			</Box>

			{/* ************************* menu desplegable de opciones ****************************** */}
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
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

					{childrens.length ? "Desagrupar listas" : "Eliminar grupo"}
				</MenuItem>
			</Menu>

			{/* ************************* Panel para agregar/quitar listas ****************************** */}

			{/* <ListContainedEditor
				listGroup={data}
				lists={lists}
				open={openListContened}
				onClose={handleCloseListContened}
			/> */}
		</>
	);
};

export default GroupListItem;
