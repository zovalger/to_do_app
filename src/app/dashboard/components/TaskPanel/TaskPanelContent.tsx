"use client";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import { TaskPanelWidth } from "@/config/UISettings";
import StepTask from "./StepTask";
import { useTaskContext } from "@/app/contexts/Task.context";
import TaskPanelHeader from "./TaskPanelHeader";
import { useEffect } from "react";
import { addStepToTask, updateTaskInArr } from "@/app/helper/Task.helper";
import { updateTask } from "@/app/services/TasksService";

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

	return (
		<Box sx={{ width: `${TaskPanelWidth}px`, mt: 1, position: "relative" }}>
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

			<Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
				<WbSunnyOutlinedIcon
					sx={{
						fontSize: 18,
						mx: 1.3,
					}}
				/>

				<Typography sx={{ fontSize: 13 }}>Agregar a mi día</Typography>
			</Box>

			<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
				<WbSunnyOutlinedIcon
					sx={{
						fontSize: 18,
						mx: 1.3,
					}}
				/>

				<Typography sx={{ fontSize: 13 }}>Agregar a mi día</Typography>
			</Box>
		</Box>
	);
};

export default TaskPanelContent;
