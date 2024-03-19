"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { TaskAttributes } from "@/types";
import HoverIconButtom from "./HoverIconButtom";
import { updateTaskInArr } from "@/app/helper/Task.helper";
import { SmartListsLabels, taskListItemVariant } from "@/enums";
import moment from "moment";
import { DueDateTitleHelper } from "@/app/helper/TitlesDates.helper";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import Divider from "@mui/material/Divider";
import TaskDescriptionItems from "./TaskDescriptionItems";
import { IconButton, Tooltip } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

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

	return (
		<>
			<Box
				onClick={handleClickContent}
				sx={
					variant == taskListItemVariant.primary
						? {
								display: "flex",
								alignItems: "center",
								py: 0.7,
								px: 0.5,
								mb: 1,
								bgcolor: "#eee",
								cursor: "pointer",

								":hover": { bgcolor: "#ddd" },
								"& .MuiSvgIcon-root": {
									fontSize: 20,
								},
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

			{variant == taskListItemVariant.suggestions && (
				<Divider sx={{ ml: 6, mr: 2 }} />
			)}
		</>
	);
};

export default TaskItemList;
