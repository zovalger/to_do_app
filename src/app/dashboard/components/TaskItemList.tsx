"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

const TaskItemList = () => {

	const [hoverCheck, setHoverCheck] = useState(false);
	const [important, setImportant] = useState(false);

	return (
		<>
			<Box
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
					onMouseEnter={() => {
						setHoverCheck(true);
					}}
					onMouseLeave={() => {
						setHoverCheck(false);
					}}
				>
					{hoverCheck ? (
						<CheckCircleOutlinedIcon />
					) : (
						<RadioButtonUncheckedOutlinedIcon />
					)}
				</IconButton>

				<Typography sx={{ flexGrow: 1, fontSize: 13 }}>
					Nombre de la tarea
				</Typography>

				<IconButton
					color="secondary"
					onClick={() => {
						setImportant(!important);
					}}
				>
					{important ? <StarOutlinedIcon /> : <StarOutlineOutlinedIcon />}
				</IconButton>
			</Box>
		</>
	);
};

export default TaskItemList;
