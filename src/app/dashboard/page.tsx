"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { TaskPanelWidth, ToDoNavWidth } from "@/config/UISettings";
import ToDoNavList from "./components/ToDoNav/ToDoNavList";
import TaskPanel from "./components/TaskPanel";
import TaskItemList from "./components/TaskItemList";
import ListFooter from "./components/ListFooter";
import ListHeader from "./components/ListHeader";
import ToDoNav from "./components/ToDoNav";

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

			<Box sx={{ display: "flex", flexDirection: "column", height: "98vh" }}>
				<Box
					sx={{
						ml: { xs: 0, sm: `${ToDoNavWidth}px` },
						mr: { xs: 0, sm: `${TaskPanelWidth}px` },
						px: 2,
						pt: 14,
						pb: 13,
						// position: "relative",
						flexGrow: 1,
						maxHeight: "99vh",

						overflowY: "auto",
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
			</Box>

			{/* *********************** nav List *********************** */}
			<ListHeader />

			{/* *********************** botton List *********************** */}
			<ListFooter />
		</>
	);
}
