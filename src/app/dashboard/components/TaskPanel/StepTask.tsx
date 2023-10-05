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

import { StepTask } from "@/types";

interface props {
	data: StepTask;
}

const StepTask = ({ data }: props) => {
	const theme = useTheme();

	const [open, setOpen] = useState(true);
	const [openNav, setOpenNav] = useState(false);

	const [hoverCheck, setHoverCheck] = useState(false);
	const [important, setImportant] = useState(false);

	const handdleOpenNav = () => {
		setOpenNav(!openNav);
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
};

export default StepTask;
