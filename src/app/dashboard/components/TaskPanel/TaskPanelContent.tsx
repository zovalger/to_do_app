"use client";
import { v4 as uuid } from "uuid";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useTheme } from "@mui/material/styles";

import { TaskPanelWidth } from "@/config/UISettings";
import StepTask from "./StepTask";
import { useGlobalContext } from "@/app/contexts/Global.context";
import { useTaskContext } from "@/app/contexts/Task.context";
import TaskPanelHeader from "./TaskPanelHeader";
import { useEffect } from "react";

const TaskPanelContent = () => {
	const theme = useTheme();

	const { taskPanelOpen, handleTaskPanelOpen } = useGlobalContext();

	const { taskEditing, setTaskEditing } = useTaskContext();

	useEffect(() => {
		console.log("Cambio");
	}, [taskEditing]);

	if (!taskEditing) return;

	const { steps } = taskEditing;

	return (
		<Box sx={{ width: `${TaskPanelWidth}px`, mt: 1, position: "relative" }}>
			<TaskPanelHeader />

			{steps.map((t) => (
				<StepTask key={uuid()} data={t} />
			))}

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					py: 0.5,
					pr: 0.5,
					pl: 1.5,
					// ml: 1.2,
					":hover": { bgcolor: "#ddd" },
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
