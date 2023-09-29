"use client";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { TaskPanelWidth, ToDoNavWidth } from "@/config/UISettings";

const ListFooter = () => {
	return (
		<Box
			sx={{
				position: "fixed",
				bottom: 0,
				right: 0,
				left: 0,

				ml: { xs: 0, sm: `${ToDoNavWidth}px` },
				mr: { xs: 0, sm: `${TaskPanelWidth}px` },

				px: 3,
				pt: 1,
				pb: 4,
				backdropFilter: "blur(16px)",

				// bgcolor: "#fff8",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					py: 0.7,
					px: 0.5,
					bgcolor: "#eee",
					":hover": { bgcolor: "#ddd" },
				}}
				// boxShadow={1}
			>
				<IconButton color="primary">
					<AddOutlinedIcon />
				</IconButton>

				<Typography color="primary" sx={{ fontSize: 13 }}>
					Agregar nueva tarea
				</Typography>
			</Box>
		</Box>
	);
};

export default ListFooter;
