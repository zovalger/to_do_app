"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { TaskAttributes } from "@/types";
import HoverIconButtom from "./HoverIconButtom";
import { taskListItemVariant } from "@/enums";
import moment from "moment";
import React from "react";
import Divider from "@mui/material/Divider";
import TaskDescriptionItems from "./TaskDescriptionItems";
import { IconButton, Tooltip } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TaskOptions from "./TaskOptions";

interface props {
	data: TaskAttributes;
	variant?: taskListItemVariant;
}
const TaskItemList = ({
	data,
	variant = taskListItemVariant.primary,
}: props) => {
	// const { setTaskEditing, tasks, setTasks } = useTaskContext();
	const { _id, title, important, complete } = data;

	const handleClickContent = () => {
		// setTaskEditing(data);
	};

	const handleImportantButton = async () => {
		// const newTask = await updateTask(_id, { ...data, important: !important });
		// const newTasks = updateTaskInArr(tasks, _id, newTask);
		// setTasks(newTasks);
		// setTaskEditing(null);
	};

	const handleCompleteButton = async () => {
		// const newTask = await updateTask(_id, { ...data, complete: !complete });
		// const newTasks = updateTaskInArr(tasks, _id, newTask);
		// setTasks(newTasks);
		// setTaskEditing(null);
	};

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleCloseMoreOptions = () => {
		setAnchorEl(null);
	};
	const handleRightClick = (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		event.preventDefault();
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	return (
		<>
			<Box
				onClick={handleClickContent}
				onContextMenu={handleRightClick}
				sx={
					variant == taskListItemVariant.primary
						? {
								display: "flex",
								alignItems: "center",
								py: 0.7,
								px: 0.5,
								mb: 0.25,
								bgcolor: "#eee",
								cursor: "pointer",

								":hover": { bgcolor: "#ddd" },
						  }
						: {
								alignItems: "center",
								display: "flex",
								py: 0.7,
								px: 1.7,
								cursor: "pointer",
								":hover": { bgcolor: "#ddd" },
						  }
				}
			>
				<HoverIconButtom
					active={complete}
					hoverIcon={<CheckCircleOutlinedIcon />}
					idleIcon={<RadioButtonUncheckedOutlinedIcon />}
					onClick={handleCompleteButton}
				/>

				<Box sx={{ flexGrow: 1, ml: 1 }}>
					<Typography
						sx={{
							fontSize: 13,
							textDecoration: complete ? "line-through" : "",
						}}
					>
						{title}
					</Typography>

					<TaskDescriptionItems data={data} variant={variant} />
				</Box>

				{variant == taskListItemVariant.suggestions ? (
					<Tooltip title="Agregar a mi día">
						<IconButton
							// onClick={handleClickOpen}

							size="small"
							color="secondary"
						>
							<AddOutlinedIcon />
						</IconButton>
					</Tooltip>
				) : (
					<HoverIconButtom
						active={important}
						color="secondary"
						hoverIcon={<StarOutlinedIcon />}
						idleIcon={<StarOutlineOutlinedIcon />}
						onClick={handleImportantButton}
					/>
				)}
			</Box>

			<TaskOptions
				anchorEl={anchorEl}
				close={handleCloseMoreOptions}
				tasks={data}
			/>

			{/* // todo: hacer el menu desplegable con click derecho  */}

			{variant == taskListItemVariant.suggestions && (
				<Divider sx={{ ml: 3, mr: 2 }} />
			)}
		</>
	);
};

export default TaskItemList;
