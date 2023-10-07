"use client";
import { useEffect, useState } from "react";
import {
	InputBase,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	TextField,
	Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import moment from "moment";

import { TaskPanelWidth } from "@/config/UISettings";
import StepTask from "./StepTask";
import { useTaskContext } from "@/app/contexts/Task.context";
import TaskPanelHeader from "./TaskPanelHeader";
import { addStepToTask, updateTaskInArr } from "@/app/helper/Task.helper";
import { deleteTask, updateTask } from "@/app/services/TasksService";
import { setTasksLocalStorage } from "@/app/services/offline/TasksOffline";
import ButtonDate from "./ButtonDate";

const TaskPanelContent = () => {
	const { tasks, setTasks, taskEditing, setTaskEditing } = useTaskContext();

	useEffect(() => {
		if (!taskEditing) return;

		const { _id } = taskEditing;

		updateTask(_id, taskEditing).then((t) => {
			const newtasks = updateTaskInArr(tasks, _id, taskEditing);
			setTasks(newtasks);
		});
	}, [taskEditing]);

	const addStep = () => {
		if (!taskEditing) return;

		const newTask = addStepToTask(taskEditing);

		setTaskEditing(newTask);
	};

	const toggleInMyDay = () => {
		if (!taskEditing) return;

		const myDay = !taskEditing.myDay ? new Date() : null;

		setTaskEditing({ ...taskEditing, myDay });
	};

	const handleDelete = async () => {
		if (!taskEditing) return;

		const { _id } = taskEditing;

		await deleteTask(_id);

		const newTask = tasks.filter((t) => t._id != _id);

		setTaskEditing(null);
		setTasksLocalStorage(newTask);
		setTasks(newTask);
	};

	const [date, setDate] = useState<Date>();

	return (
		<>
			<Box
				sx={{
					width: `${TaskPanelWidth}px`,
					mt: 1,
					mb: 5,
					position: "relative",
				}}
			>
				<TaskPanelHeader />

				{taskEditing?.steps.map((t) => (
					<StepTask key={t._id} data={t} />
				))}

				<Box
					onClick={addStep}
					sx={{
						display: "flex",
						alignItems: "center",
						py: 0.5,
						pr: 0.5,
						pl: 1.5,
						// ml: 1.2,
						":hover": { bgcolor: "#ddd" },
						cursor: "pointer",
					}}
					// boxShadow={1}
				>
					<IconButton color="primary">
						<AddOutlinedIcon />
					</IconButton>

					<Typography color="primary" sx={{ fontSize: 13 }}>
						Agregar Paso
					</Typography>
				</Box>

				<Divider />

				<ListItemButton
					onClick={toggleInMyDay}
					selected={
						!!taskEditing &&
						!!taskEditing.myDay &&
						moment().isSame(taskEditing.myDay, "day")
					}
					sx={{
						["&"]: { pl: 0, my: 1 },
						["& .MuiListItemIcon-root .MuiSvgIcon-root"]: { mx: 2 },
						["& .MuiTypography-root"]: { fontSize: 13 },
					}}
				>
					<ListItemIcon>
						<WbSunnyOutlinedIcon
							sx={{
								fontSize: 18,
								mx: 1.3,
							}}
						/>
					</ListItemIcon>

					<ListItemText primary={"Agregar a mi día"} />
				</ListItemButton>

				<Box sx={{ px: 2, py: 2 }}>
					<ButtonDate />
				</Box>
				<Box sx={{ px: 2 }}>
					<TextField
						id="outlined-multiline-flexible"
						label="Nota"
						multiline
						maxRows={8}
						minRows={4}
						fullWidth
						// sx={{mx:1}}
					/>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					mt: "auto",
					position: "sticky",
					bottom: 0,
					left: 0,
					right: 0,
					background: "#fff",
				}}
			>
				<Box sx={{ flexGrow: 1, pl: 2, my: 1 }}>
					<Typography>...</Typography>
				</Box>

				<Tooltip title="Eliminar tarea">
					<IconButton
						onClick={handleDelete}
						sx={{
							borderRadius: 0,
							flexShrink: 0,
							width: 48,
						}}
						color="inherit"
					>
						<DeleteOutlinedIcon />
					</IconButton>
				</Tooltip>
			</Box>
		</>
	);
};

export default TaskPanelContent;
