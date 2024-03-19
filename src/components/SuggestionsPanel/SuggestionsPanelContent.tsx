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
import { useTheme } from "@mui/material/styles";

import { useAppSelector } from "@/redux/store";
import StepTask from "./StepTask";
import DueDateButtonTaskEditing from "./DueDateButtonTaskEditing";
import RememberDateButtonTaskEditing from "./RememberDateButtonTaskEditing";
import FrequencyRepeatDateButtonTaskEditing from "./FrequencyRepeatDateButtonTaskEditing";

import AttachFileButtonTaskEditing from "./AttachFileButtonTaskEditing";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import HoverIconButtom from "../HoverIconButtom";
import TaskItemList from "../TaskItemList";
import { Frequencys, taskListItemVariant } from "@/enums";

const SuggestionsPanelContent = () => {
	const { rightPanelWitdh, rightPanelOpen } = useAppSelector(
		(e) => e.UI_Settings
	);

	const theme = useTheme();

	// const { tasks, setTasks, taskEditing, setTaskEditing } = useTaskContext();

	// useEffect(() => {
	// 	if (!taskEditing) return;

	// 	const { _id } = taskEditing;

	// 	updateTask(_id, taskEditing).then((t) => {
	// 		const newtasks = updateTaskInArr(tasks, _id, taskEditing);
	// 		setTasks(newtasks);
	// 	});
	// }, [taskEditing]);

	const addStep = () => {
		// if (!taskEditing) return;
		// const newTask = addStepToTask(taskEditing);
		// setTaskEditing(newTask);
	};

	const toggleInMyDay = () => {
		// if (!taskEditing) return;
		// const myDay = !taskEditing.myDay ? new Date() : null;
		// setTaskEditing({ ...taskEditing, myDay });
	};

	const handleDelete = async () => {
		// if (!taskEditing) return;
		// const { _id } = taskEditing;
		// await deleteTask(_id);
		// const newTask = tasks.filter((t) => t._id != _id);
		// setTaskEditing(null);
		// setTasksLocalStorage(newTask);
		// setTasks(newTask);
	};

	// *********************** Fechas ***********************
	const ChangeDueDate = (dueDate: Date | null) => {
		// if (!taskEditing) return;
		// const newTask: TaskData = { ...taskEditing, dueDate };
		// setTaskEditing(newTask);
	};

	// *********************** notas ***********************

	const [noteValue, setNoteValue] = useState<string>("");
	const onChangeNote = (note: string) => setNoteValue(note);

	const SaveNote = () => {
		// if (!taskEditing) return;
		// const note = noteValue.trim();
		// if (taskEditing.note == note) return;
		// const newTask: TaskData = { ...taskEditing, note };
		// setTaskEditing(newTask);
	};

	return (
		<>
			<Box
				sx={{
					width: `${rightPanelWitdh}px`,

					[theme.breakpoints.down("sm")]: {
						width: `96vw`,
					},

					mt: 1,
					mb: 5,
					position: "relative",
				}}
			>
				<Box
					sx={{
						position: "sticky",
						top: 0,
						bgcolor: "#fff",
						zIndex: 1,
						overflowX: "hidden",
						py: 1,
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							pr: 1,
							ml: 3,
						}}
					>
						<Typography sx={{ fontSize: 18, py: 0, fontWeight: "600" }}>
							Sugerencias
						</Typography>
						<IconButton
							// onClick={handleClose}
							sx={{ mr: 0.9 }}
						>
							<CloseOutlinedIcon sx={{ fontSize: 18 }} />
						</IconButton>
					</Box>
				</Box>

				{/* {taskEditing?.steps.map((t) => ( */}
				<StepTask
					key={"21321321"}
					data={{ _id: "dasda", title: "hola", complete: false }}
				/>

				<TaskItemList
					key={31231313}
					variant={taskListItemVariant.suggestions}
					data={{
						_id: "31231313",
						title: "titulo de tarea",
						steps: [
							{ _id: "string", title: "paso 1", complete: false },
							{ _id: "string", title: "paso 2", complete: true },
							{ _id: "string", title: "paso 2", complete: true },
						],
						note: "esta es una nota larga",
						remindMe: new Date(),
						dueDate: new Date(),
						repeat: {
							frequency: Frequencys.daily,
							skip: 2,
						},
						myDay: null,
						complete: false,
						important: false,
						listId: "",
						files: [],
						assignedUser: "dsadasdas",
					}}
				/>

				{/* // todo: hacer el panel de opciones para los items hijos  */}
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						pr: 1,
						ml: 3,
					}}
				>
					<Typography sx={{ fontSize: 14, py: 0, fontWeight: "600" }}>
						Hoy
					</Typography>
					<IconButton
						// onClick={handleClose}
						sx={{ mr: 0.9 }}
					>
						<CloseOutlinedIcon sx={{ fontSize: 18 }} />
					</IconButton>
				</Box>
				<TaskItemList
					key={"dsddd"}
					variant={taskListItemVariant.suggestions}
					data={{
						_id: "ddsdd",
						title: "titulo de tarea2",
						steps: [
							{ _id: "string", title: "paso 1", complete: false },
							{ _id: "string", title: "paso 2", complete: true },
						],
						note: "esta es una nota larga",
						remindMe: new Date(),
						dueDate: new Date(),
						repeat: {
							frequency: Frequencys.daily,
							skip: 2,
						},
						myDay: new Date(),
						complete: true,
						important: true,
						listId: "",
						files: [],
						assignedUser: "dsadasdas",
					}}
				/>
				{/* ))} */}
			</Box>
		</>
	);
};

export default SuggestionsPanelContent;
