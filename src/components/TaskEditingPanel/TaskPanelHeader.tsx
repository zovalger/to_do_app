"use client";
import { useState } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { InputBase, TextField } from "@mui/material";

import HoverIconButtom from "../HoverIconButtom";

const TaskPanelHeader = () => {
	// const { taskEditing, setTaskEditing } = useTaskContext();

	const handleClose = () => {
		// setTaskEditing(null);
	};

	// *************************** modificacion de titulo ***************************
	const [titleValue, setTitleValue] = useState("");
	const [titleEditing, setTitleEditing] = useState(false);

	const onClickTitle = () => {
		// if (!taskEditing) return;
		// setTitleEditing(true);
		// setTitleValue(taskEditing.title);
	};
	const changeTitle = (value: string) => {
		setTitleValue(value);
	};

	const saveTitle = () => {
		// if (!taskEditing) return;
		// if (!titleValue.trim()) return;
		// setTaskEditing({ ...taskEditing, title: titleValue.trim() });
		// setTitleEditing(false);
		// setTitleValue("");
	};

	// *************************** importante y completado ***************************

	const handleComplete = () => {
		// if (!taskEditing) return;
		// const { complete } = taskEditing;
		// setTaskEditing({ ...taskEditing, complete: !complete });
	};

	const handleImportant = () => {
		// if (!taskEditing) return;
		// const { important } = taskEditing;
		// setTaskEditing({ ...taskEditing, important: !important });
	};

	// *************************** render ***************************

	return (
		<Box
			sx={{
				position: "sticky",
				top: 0,
				bgcolor: "#fff",
				zIndex: 1,
				overflowX: "hidden",
			}}
		>
			<Box sx={{ display: "flex", justifyContent: "flex-end", pr: 1 }}>
				<IconButton onClick={handleClose} sx={{ mr: 0.9 }}>
					<CloseOutlinedIcon sx={{ fontSize: 18 }} />
				</IconButton>
			</Box>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					py: 0.7,
					px: 1,

					mb: 0,
					"& .MuiSvgIcon-root": {
						fontSize: 20,
					},
				}}
			>
				<HoverIconButtom
					active={false}
					hoverIcon={<CheckCircleOutlinedIcon />}
					idleIcon={<RadioButtonUncheckedOutlinedIcon />}
					onClick={handleComplete}
					size="large"
				/>

				<InputBase
					sx={{
						ml: 0.5,
						flexGrow: 1,
						minHeight: 48,
					}}
					value={"titulo de tarea"}
					placeholder="Agregar nueva tarea"
					inputProps={{
						sx: { fontSize: 18, py: 0, fontWeight: "600" },
					}}
				/>

				<HoverIconButtom
					color="secondary"
					active={false}
					hoverIcon={<StarOutlinedIcon />}
					idleIcon={<StarOutlineOutlinedIcon />}
					onClick={handleImportant}
					size="large"
				/>
			</Box>
		</Box>
	);
};

export default TaskPanelHeader;
