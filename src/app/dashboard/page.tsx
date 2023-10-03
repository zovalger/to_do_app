"use client";
import { useState } from "react";
import Box from "@mui/material/Box";

import { TaskPanelWidth, ToDoNavWidth } from "@/config/UISettings";
import TaskPanel from "./components/TaskPanel";
import TaskItemList from "./components/TaskItemList";
import ListFooter from "./components/ListFooter";
import ListHeader from "./components/ListHeader";
import ToDoNav from "./components/ToDoNav";
import { useTaskContext } from "../contexts/Task.context";
import { useListAndGroupContext } from "../contexts/ListAndGroup.context";
import { taskByListId } from "../helper/Task.helper";

export default function DashboardPage() {
	const { listSelected } = useListAndGroupContext();
	const { tasks } = useTaskContext();

	const [open, setOpen] = useState(true);
	const [openNav, setOpenNav] = useState(false);

	const handdleOpenNav = () => {
		setOpenNav(!openNav);
	};

	const taskToSee = taskByListId(tasks, listSelected);

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
					{taskToSee.map((t) => (
						<TaskItemList key={t._id} data={t} />
					))}
				</Box>
			</Box>

			{/* *********************** nav List *********************** */}
			<ListHeader />

			{/* *********************** botton List *********************** */}
			<ListFooter />
		</>
	);
}
