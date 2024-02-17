"use client";
import { useState } from "react";
import Box from "@mui/material/Box";

import { TaskPanelWidth, ToDoNavWidth } from "@/config/UISettings";
import { taskByListId } from "../helper/Task.helper";
import ToDoNav from "@/components/ToDoNav";
import ListHeader from "@/components/ListHeader";
import ListFooter from "@/components/ListFooter";
import TaskPanel from "@/components/TaskPanel";
import Image from "next/image";
import aaaa from "@/assets/background-1.jpg";

export default function DashboardPage() {
	// const taskToSee = taskByListId(tasks, listSelected);
	const taskEditing = true;

	return (
		<>
			<ToDoNav />

			<TaskPanel />

			{/* *********************** contenedor de tareas *********************** */}

			<Box sx={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
				<Image
					src={aaaa}
					alt="background"
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</Box>
			
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					height: "98vh",
					position: "absolute",
				}}
			>
				<Box
					sx={{
						ml: { xs: 0, sm: `${ToDoNavWidth}px` },
						mr: { xs: 0, sm: taskEditing ? `${TaskPanelWidth}px` : "" },
						px: 2,
						pt: 14,
						pb: 13,
						// position: "relative",
						flexGrow: 1,
						maxHeight: "99vh",

						overflowY: "auto",
					}}
				>
					bbbbb
					{/* {taskToSee.map((t) => (
						<TaskItemList key={t._id} data={t} />
					))} */}
				</Box>
			</Box>

			{/* *********************** nav List *********************** */}
			<ListHeader />

			{/* *********************** botton List *********************** */}
			<ListFooter />
		</>
	);
}
