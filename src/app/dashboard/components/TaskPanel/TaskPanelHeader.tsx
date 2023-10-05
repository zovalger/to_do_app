"use client";
import { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useTheme } from "@mui/material/styles";
import { TaskPanelWidth } from "@/config/UISettings";
import { TextField } from "@mui/material";

import StepTask from "./StepTask";
import { useGlobalContext } from "@/app/contexts/Global.context";
import { useTaskContext } from "@/app/contexts/Task.context";
import { DefaultTask } from "@/defaultValues";

const TaskPanelHeader = () => {
	const { taskPanelOpen, handleTaskPanelOpen } = useGlobalContext();
	const { taskEditing, setTaskEditing } = useTaskContext();

	const handleClose = () => {
		handleTaskPanelOpen(false);
	};

	const ChangeProperty = () => {};

	// *************************** modificacion de titulo ***************************
	const [titleValue, setTitleValue] = useState("");
	const [titleEditing, setTitleEditing] = useState(false);

	const onClickTitle = () => {
		if (!taskEditing) return;

		setTitleEditing(true);
		setTitleValue(taskEditing.title);
	};
	const changeTitle = (value: string) => {
		setTitleValue(value);
	};

	const saveTitle = () => {
		if (!taskEditing) return;

		setTaskEditing({ ...taskEditing, title: titleValue });

		setTitleEditing(false);
		setTitleValue("");
	};

	// *************************** importante y completado ***************************

	const handleComplete = () => {
		if (!taskEditing) return;
		const { complete } = taskEditing;

		setTaskEditing({ ...taskEditing, complete: !complete });
	};

	const handleImportant = () => {
		if (!taskEditing) return;
		const { important } = taskEditing;

		setTaskEditing({ ...taskEditing, important: !important });
	};

	// *************************** estetica ***************************

	const [checkHover, setCheckHover] = useState(false);
	const [importantHover, setImportantHover] = useState(false);

	const importantIcon = taskEditing?.important ? (
		<StarOutlinedIcon />
	) : importantHover ? (
		<StarOutlinedIcon />
	) : (
		<StarOutlineOutlinedIcon />
	);

	const completeIcon = taskEditing?.complete ? (
		<CheckCircleOutlinedIcon />
	) : checkHover ? (
		<CheckCircleOutlinedIcon />
	) : (
		<RadioButtonUncheckedOutlinedIcon />
	);
	// *************************** render ***************************

	return (
		<Box sx={{ position: "sticky", top: 0, bgcolor: "#fff", zIndex: 1 }}>
			<Box sx={{ display: "flex", justifyContent: "flex-end", pr: 0.8 }}>
				<IconButton onClick={handleClose}>
					<CloseOutlinedIcon sx={{ fontSize: 18 }} />
				</IconButton>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					py: 0.7,
					px: 0.5,
					mb: 0,

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
						{taskEditing?.title}
					</Typography>
				)}

				<IconButton
					color="secondary"
					onClick={handleImportant}
					onMouseEnter={() => setImportantHover(true)}
					onMouseLeave={() => setImportantHover(false)}

					// onClick={() => setImportantHover(!importantHover)}
				>
					{importantIcon}
				</IconButton>
			</Box>
		</Box>
	);
};

export default TaskPanelHeader;