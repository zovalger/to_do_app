"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { TaskData } from "@/types";
import { useTaskContext } from "@/app/contexts/Task.context";
import { useGlobalContext } from "@/app/contexts/Global.context";

interface props {
	data: TaskData;
}
const TaskItemList = ({ data }: props) => {
	const {handleTaskPanelOpen}=useGlobalContext()
	const {setTaskEditing}=useTaskContext()
	const { _id, title, important, complete } = data;

	const [hoverCheck, setHoverCheck] = useState(false);


	const handleClickContent = ()=>{
		setTaskEditing(data)
		handleTaskPanelOpen(true)
	}
	const handleImportantButton = () => {};
	const handleCompleteButton = () => {};
	

	const iconCheck = complete ? (
		<CheckCircleOutlinedIcon />
	) : hoverCheck ? (
		<CheckCircleOutlinedIcon />
	) : (
		<RadioButtonUncheckedOutlinedIcon />
	);

	return (
		<>
			<Box
			onClick={
				handleClickContent

			}
				sx={{
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
				}}
			>
				<IconButton
					onClick={handleCompleteButton}
					onMouseEnter={() => {
						setHoverCheck(true);
					}}
					onMouseLeave={() => {
						setHoverCheck(false);
					}}
				>
					{iconCheck}
				</IconButton>

				<Typography sx={{ flexGrow: 1, fontSize: 13 }}>{title}</Typography>

				<IconButton color="secondary" onClick={handleImportantButton}>
					{important ? <StarOutlinedIcon /> : <StarOutlineOutlinedIcon />}
				</IconButton>
			</Box>
		</>
	);
};

export default TaskItemList;
