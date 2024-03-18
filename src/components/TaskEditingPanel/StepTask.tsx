"use client";
import { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import {
	InputBase,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	TextField,
	Tooltip,
} from "@mui/material";

import { StepTaskAttributes } from "@/types";
import { updateStepOfTask } from "@/app/helper/Task.helper";
import HoverIconButtom from "../HoverIconButtom";
import ButtonMoreOptionsStepTask from "./ButtonMoreOptionsStepTask";

interface props {
	data: StepTaskAttributes;
}

const StepTask = ({ data }: props) => {
	// const { taskEditing, setTaskEditing } = useTaskContext();

	const { _id, complete, title } = data;

	// *************************** modificacion de titulo ***************************
	const [titleValue, setTitleValue] = useState("");
	const [titleEditing, setTitleEditing] = useState(!title);

	const onClickTitle = () => {
		// if (!taskEditing) return;
		setTitleEditing(true);
		setTitleValue(title.trim());
	};

	const changeTitle = (value: string) => {
		setTitleValue(value);
	};

	const saveTitle = () => {
		// if (!taskEditing) return;
		if (!title.trim() && !titleValue.trim()) return;
		// const newTask = updateStepOfTask(taskEditing, _id, {
		// 	...data,
		// 	title: titleValue,
		// });
		// setTaskEditing(newTask);
		setTitleEditing(false);
		setTitleValue("");
	};

	// *************************** completado ***************************

	const handleComplete = () => {
		// if (!taskEditing) return;
		// const newTask = updateStepOfTask(taskEditing, _id, {
		// 	...data,
		// 	complete: !complete,
		// });
		// setTaskEditing(newTask);
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					py: 0.7,
					px: 0.5,
					ml: 1.2,
					"& .MuiSvgIcon-root": {
						fontSize: 20,
					},
				}}
			>
				<HoverIconButtom
					active={complete}
					hoverIcon={<CheckCircleOutlinedIcon />}
					idleIcon={<RadioButtonUncheckedOutlinedIcon />}
					onClick={handleComplete}
				/>

				{/* <TextField
						value={titleValue}
						onChange={({ target: { value } }) => changeTitle(value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") saveTitle();
						}}
						onBlur={saveTitle}
						autoFocus
						size="small"
					/> */}

				{titleEditing ? (
					<InputBase
						sx={{
							ml: 1,
							flexGrow: 1,
							minHeight: 36,
							// color:"primary"
						}}
						onChange={({ target: { value } }) => changeTitle(value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") saveTitle();
						}}
						onBlur={saveTitle}
						autoFocus
						// size="small"
						value={titleValue}
						placeholder="Agregar Paso"
						inputProps={{
							sx: { fontSize: 13, py: 0 },
						}}
					/>
				) : (
					<Typography
						onClick={onClickTitle}
						sx={{
							ml: 1.3,
							flexGrow: 1,
							fontSize: 13,
							textDecoration: complete ? "line-through" : "none",
						}}
					>
						{title}
					</Typography>
				)}

				<ButtonMoreOptionsStepTask complete={complete} />
			</Box>

			<Divider sx={{ ml: 6, mr: 2 }} />
		</>
	);
};

export default StepTask;
