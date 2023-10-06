"use client";
import { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";

import { StepTaskData } from "@/types";
import { useTaskContext } from "@/app/contexts/Task.context";
import { updateStepOfTask } from "@/app/helper/Task.helper";

interface props {
	data: StepTaskData;
}

const StepTask = ({ data }: props) => {
	const { taskEditing, setTaskEditing } = useTaskContext();

	const { _id, complete, title } = data;

	// *************************** modificacion de titulo ***************************
	const [titleValue, setTitleValue] = useState("");
	const [titleEditing, setTitleEditing] = useState(!title);

	const onClickTitle = () => {
		if (!taskEditing) return;

		setTitleEditing(true);
		setTitleValue(title.trim());
	};

	const changeTitle = (value: string) => {
		setTitleValue(value);
	};

	const saveTitle = () => {
		if (!taskEditing) return;
		if (!title.trim() && !titleValue.trim()) return;

		const newTask = updateStepOfTask(taskEditing, _id, {
			...data,
			title: titleValue,
		});

		setTaskEditing(newTask);

		setTitleEditing(false);
		setTitleValue("");
	};

	// *************************** completado ***************************

	const handleComplete = () => {
		if (!taskEditing) return;

		const newTask = updateStepOfTask(taskEditing, _id, {
			...data,
			complete: !complete,
		});

		setTaskEditing(newTask);
	};

	// *************************** estetica ***************************

	const [checkHover, setCheckHover] = useState(false);

	const completeIcon = complete ? (
		<CheckCircleOutlinedIcon />
	) : checkHover ? (
		<CheckCircleOutlinedIcon />
	) : (
		<RadioButtonUncheckedOutlinedIcon />
	);

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
				<IconButton
					onClick={handleComplete}
					onMouseEnter={() => setCheckHover(true)}
					onMouseLeave={() => setCheckHover(false)}
				>
					{completeIcon}
				</IconButton>

				{titleEditing ? (
					<TextField
						value={titleValue}
						onChange={({ target: { value } }) => changeTitle(value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") saveTitle();
						}}
						onBlur={saveTitle}
						autoFocus
						size="small"
					/>
				) : (
					<Typography onClick={onClickTitle} sx={{ flexGrow: 1, fontSize: 13 }}>
						{title}
					</Typography>
				)}

				<IconButton color="secondary">
					<MoreVertIcon />
				</IconButton>
			</Box>

			<Divider sx={{ ml: 6, mr: 2 }} />
		</>
	);
};

export default StepTask;
