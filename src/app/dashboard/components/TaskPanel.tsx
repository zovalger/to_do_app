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
import { useTheme } from "@mui/material/styles";

const ToDoNavWidth = 256;

const TaskPanel = () => {
	const theme = useTheme();

	const [open, setOpen] = useState(true);
	const [openNav, setOpenNav] = useState(false);

	const [hoverCheck, setHoverCheck] = useState(false);
	const [important, setImportant] = useState(false);

	const handdleOpenNav = () => {
		setOpenNav(!openNav);
	};

	const miniTask = (
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
					Lorem ipsum, dolor sit amet consectetur adipisicing.
				</Typography>

				<IconButton color="secondary">
					<MoreVertIcon />
				</IconButton>
			</Box>

			<Divider sx={{ ml: 6, mr: 2 }} />
		</>
	);

	const Content = (
		<Box sx={{ width: `${ToDoNavWidth}px`, mt: 1, position: "relative" }}>
			<Box
				sx={{ position: "sticky", top: 0, bgcolor: "#fff", zIndex: 1, pb: 1 }}
			>
				<Box sx={{ display: "flex", justifyContent: "flex-end", pr: 0.8 }}>
					<IconButton>
						<CheckCircleOutlinedIcon sx={{ fontSize: 15 }} />
					</IconButton>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						py: 0.7,
						px: 0.5,
						mb: 1,

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
						Lorem ipsum, dolor sit amet consectetur adipisicing.
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
			</Box>

			{miniTask}
			{miniTask}

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					py: 0.7,
					px: 0.5,

					ml: 1.2,
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
		</Box>
	);

	return (
		<>
			<Drawer
				open
				variant="permanent"
				anchor="right"
				sx={{
					maxWidth: ToDoNavWidth,
					[theme.breakpoints.down("sm")]: {
						display: "none",
					},
				}}
			>
				{Content}
			</Drawer>

			<Drawer
				open={openNav}
				anchor="right"
				variant="temporary"
				onClose={handdleOpenNav}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					maxWidth: ToDoNavWidth,
					[theme.breakpoints.up("sm")]: {
						display: "none",
					},
				}}
			>
				{Content}
			</Drawer>
		</>
	);
};

export default TaskPanel;
