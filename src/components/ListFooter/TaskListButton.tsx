import React from "react";

import { Button, Typography } from "@mui/material";

import TaskListSelector from "./TaskListSelector";
import { TaskAttributes } from "@/types";
import useList from "@/hooks/useList";
import { useAppDispatch } from "@/redux/store";

interface props {
	data: TaskAttributes;
	setData(data: TaskAttributes): void;
}

const TaskListButton = ({ data, setData }: props) => {
	const dispatch = useAppDispatch();

	const { listData, loanding } = useList(data.listId);

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

	const handdleChange = (listId: string) => {
		const newData = { ...data, listId };

		setData(newData);
	};

	// todo: anadir comparaciones para hoy, manana
	const title = loanding ? "Cargando..." : listData ? listData.title : "....";

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
				onChange={handdleChange}
			/>
		</>
	);
};

export default TaskListButton;
