import React from "react";

import { Button, Typography } from "@mui/material";

import TaskListSelector from "./TaskListSelector";
import { TaskAttributes } from "@/types";

interface props {
	data: TaskAttributes;
}

const TaskListButton = ({ data }: props) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		event.preventDefault();
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const onClose = () => {
		setAnchorEl(null);
	};

	const [openListContened, setOpenListContened] = React.useState(false);

	const handleCloseListContened = () => {
		setOpenListContened(false);
	};

	// ****************** Eliminacion ******************

	const handleDeleteGroup = async () => {
		// todo: eliminar grupo
		// const newGroupsList = await deleteListGroup(listGroups, _id);
		// setListGroups(newGroupsList);
	};

	const onClick = () => {
		// setListSelected(_id);
		// handleAsidePanelToggle()
	};

	// todo: anadir comparaciones para hoy, manana
	const title = "Nombre de lista";

	return (
		<>
			<Button variant="text" aria-label="directions" onClick={handleClick}>
				{/* <CalendarMonthIcon /> */}
				<Typography>{title}</Typography>
			</Button>

			<TaskListSelector
				value={data.listId}
				anchorEl={anchorEl}
				close={onClose}
				onChange={() => {}}
			/>
		</>
	);
};

export default TaskListButton;
