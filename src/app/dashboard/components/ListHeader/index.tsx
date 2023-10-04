"use client";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

import { TaskPanelWidth, ToDoNavWidth } from "@/config/UISettings";
import { useGlobalContext } from "@/app/contexts/Global.context";
import { useListAndGroupContext } from "@/app/contexts/ListAndGroup.context";
import TitleListHeader from "./TitleListHeader";
import ButtonMoreOptionsListHeader from "./ButtonMoreOptionsListHeader";

const ListHeader = () => {
	const { handleAsidePanelToggle } = useGlobalContext();
	const { listSelected } = useListAndGroupContext();

	// **************************** render ****************************

	if (!listSelected) return;

	return (
		<>
			<Box
				sx={{
					position: "fixed",
					right: 0,
					left: 0,

					top: 0,

					ml: { xs: 0, sm: `${ToDoNavWidth}px` },
					mr: { xs: 0, sm: `${TaskPanelWidth}px` },

					px: 3,
					pb: 1,
					backdropFilter: "blur(16px)",
					bgcolor: "#fff8",
				}}
				// boxShadow={3}
			>
				<Box sx={{ display: { xs: "block", sm: "none" } }}>
					<IconButton edge="start" onClick={handleAsidePanelToggle}>
						<MenuIcon />
					</IconButton>
				</Box>

				<Box sx={{ display: "flex", pt: { xs: 0, sm: 2 } }}>
					<TitleListHeader />

					<Box sx={{ ml: "auto" }}>
						<ButtonMoreOptionsListHeader />
					</Box>
				</Box>
				<Typography component="div" sx={{ fontSize: 13 }}>
					{new Date().toDateString()}
				</Typography>
			</Box>
		</>
	);
};

export default ListHeader;
