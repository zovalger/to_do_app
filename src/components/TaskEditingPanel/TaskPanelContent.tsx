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
import TaskPanelHeader from "./TaskPanelHeader";
import DueDateButtonTaskEditing from "./DueDateButtonTaskEditing";
import RememberDateButtonTaskEditing from "./RememberDateButtonTaskEditing";
import FrequencyRepeatDateButtonTaskEditing from "./FrequencyRepeatDateButtonTaskEditing";

import AttachFileButtonTaskEditing from "./AttachFileButtonTaskEditing";

const TaskPanelContent = () => {
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
				<TaskPanelHeader />

				{/* {taskEditing?.steps.map((t) => ( */}
				{/* <StepTask
					key={"21321321"}
					data={{ _id: "dasda", title: "hola", complete: false }}
				/>
				<StepTask
					key={"21321321"}
					data={{
						_id: "dasda",
						title: "hdsdsdsdsdsdsdsdsdsdsdola",
						complete: true,
					}} */}
				{/* /> */}
				{/* ))} */}

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

					<InputBase
						sx={{
							ml: 1,
							flexGrow: 1,
							minHeight: 36,
							// color:"primary"
						}}
						// value={"titulo de tarea"}
						placeholder="Agregar Paso"
						inputProps={{
							sx: { fontSize: 13, py: 0 },
						}}
					/>
				</Box>

				<Divider />

				<Box
					sx={{
						["& .MuiListItemButton-root"]: { pl: 1, py: 1, height: 50 },
						["& .MuiListItemIcon-root .MuiSvgIcon-root"]: {
							fontSize: 18,
							mx: 2,
							// mr: 0,
						},
						["& .MuiTypography-root"]: { fontSize: 13 },
					}}
				>
					<ListItemButton
						onClick={toggleInMyDay}
						// sx={{ my: 1 }}
						selected={
							false
							// !!taskEditing &&
							// !!taskEditing.myDay &&
							// moment().isSame(taskEditing.myDay, "day")
						}
					>
						<ListItemIcon>
							<WbSunnyOutlinedIcon sx={{}} />
						</ListItemIcon>

						<ListItemText primary={"Agregar a mi día"} />
					</ListItemButton>

					<Divider />

					<RememberDateButtonTaskEditing />

					<DueDateButtonTaskEditing />

					<FrequencyRepeatDateButtonTaskEditing />

					<Divider />

					<AttachFileButtonTaskEditing />
					<Divider />
				</Box>

				<Box sx={{ px: 2 }}>
					<TextField
						label="Nota"
						multiline
						maxRows={8}
						minRows={4}
						fullWidth
						value={noteValue}
						onChange={({ target: { value } }) => onChangeNote(value)}
						onBlur={SaveNote}
						inputProps={{ style: { fontSize: 13 } }}
						sx={{ mt: 2 }}
						// sx={{fontSize:13}}
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
