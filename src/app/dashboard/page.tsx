"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { ToDoNavWidth } from "@/config/UISettings";
import ToDoNav from "./components/ToDoNav";
import TaskPanel from "./components/TaskPanel";
import TaskItemList from "./components/TaskItemList";
import ListFooter from "./components/ListFooter";
import ListHeader from "./components/ListHeader";

export default function DashboardPage() {
	const theme = useTheme();

	const [open, setOpen] = useState(true);
	const [openNav, setOpenNav] = useState(false);

	const handdleOpenNav = () => {
		setOpenNav(!openNav);
	};

	return (
		<>
			<ToDoNav />

			<TaskPanel />

			{/* *********************** contenedor de tareas *********************** */}

			<Box
				sx={{
					ml: { xs: 0, sm: `${ToDoNavWidth}px` },
					mr: { xs: 0, sm: `${ToDoNavWidth}px` },
					px: 2,
					pt: 14,
					pb: 13,
					// position: "relative",
					// height: "100vh",
				}}
			>
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
				<TaskItemList />
			</Box>

			{/* *********************** nav List *********************** */}
			<ListHeader />

			{/* *********************** botton List *********************** */}
			<ListFooter />
		</>
	);
}
