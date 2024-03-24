import React, { useState } from "react";
import {
	Typography,
	Box,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	TextField,
} from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import { taskListItemVariant } from "@/enums";
import { TaskAttributes } from "@/types";
import TaskItemList from "./TaskItemList";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { FormatListBulletedOutlined } from "@mui/icons-material";
import TaskOptions from "./TaskOptions";

interface props {
	tasks: TaskAttributes[];
	variant?: taskListItemVariant;
}

const TasksGroupingTab = ({
	tasks,
	variant = taskListItemVariant.primary,
}: props) => {
	// ****************** Menu Desplegable ******************

	const [ungrouped, setUngrouped] = useState(true);

	// ****************** Menu Desplegable de opciones ******************

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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

	// const buttonChangeName = () => {
	// 	setEditingMode(true);
	// 	setInputValue(title);
	// 	handleCloseMoreOptions();
	// };

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

	const mainListView = (
		<Box
			sx={{
				bgcolor: "#eee",
				borderRadius: 1,
				display: "inline-flex",
				alignItems: "center",
				mb: 1,
				px: 1,
				py: 0.6,
			}}
			onContextMenu={handleRightClick}
		>
			<KeyboardArrowDown
				sx={{
					mr: 0.5,
					fontSize: 18,
					// opacity:,
					transform: ungrouped ? "rotate(-90deg)" : "rotate(0)",
					transition: "transform 0.2s",
				}}
			/>

			<Typography sx={{ fontSize: 13 }}>titulo de lista</Typography>
		</Box>
	);

	const suggestionsView = (
		<Box
			sx={{
				alignItems: "center",
				display: "flex",
				justifyContent: "space-between",
				my: 1,
				pl: 3,
				pr: 1.25,
			}}
			onContextMenu={handleRightClick}
		>
			<Typography sx={{ fontSize: 14, fontWeight: "600" }}>
				titulo de lista
			</Typography>

			<IconButton sx={{ mr: 0.5 }} onClick={handleRightClick}>
				<MoreHorizOutlinedIcon
					sx={{
						fontSize: 18,
					}}
				/>
			</IconButton>
		</Box>
	);

	const view =
		variant === taskListItemVariant.primary ? mainListView : suggestionsView;

	return (
		<>
			<Box sx={{}}>
				{view}
				{tasks.map((t) => (
					<TaskItemList key={t._id} data={t} variant={variant} />
				))}
			</Box>

			{/* ************************* menu desplegable de opciones ****************************** */}
			<TaskOptions
				anchorEl={anchorEl}
				close={handleCloseMoreOptions}
				tasks={tasks}
			/>
		</>
	);
};

export default TasksGroupingTab;
