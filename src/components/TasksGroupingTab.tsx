import React, { useState } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import { taskListItemVariant } from "@/enums";
import { TasksToView } from "@/types";
import TaskItemList from "./TaskItemList";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import TaskOptions from "./TaskOptions";
import useList from "@/hooks/useList";

interface props {
	title?: string;
	data: TasksToView;
	variant?: taskListItemVariant;
}

const TasksGroupingTab = ({
	title: displayTitle,
	data,
	variant = taskListItemVariant.primary,
}: props) => {
	const { listId, tasks } = data;

	const { listData, loanding } = useList(listId);

	// ****************** Desplegable ******************

	const [grouped, setGrouped] = useState(false);

	const handleClick = () => {
		setGrouped((s) => !s);
		// handleCloseMoreOptions();
	};

	// ****************** Menu Desplegable de opciones ******************

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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

	if (loanding) return "loading";

	// todo: colocar placeholder
	if (!loanding && listData == null && !displayTitle) return "fallo al cargar.";

	const title = displayTitle || listData?.title;

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
			onClick={handleClick}
			onContextMenu={handleRightClick}
		>
			<KeyboardArrowDown
				sx={{
					mr: 0.5,
					fontSize: 18,
					// opacity:,
					transform: grouped ? "rotate(-90deg)" : "rotate(0)",
					transition: "transform 0.2s",
				}}
			/>

			<Typography sx={{ fontSize: 13 }}>{title}</Typography>
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
			// onClick={handleClick}
			onContextMenu={handleRightClick}
		>
			<Typography sx={{ fontSize: 14, fontWeight: "600" }}>{title}</Typography>

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
				{!grouped &&
					tasks.map((t) => <TaskItemList key={t} _id={t} variant={variant} />)}
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
