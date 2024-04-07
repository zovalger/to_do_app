"use client";
import { useState } from "react";
import Box from "@mui/material/Box";

import { taskByListId } from "../helper/Task.helper";
import ToDoNav from "@/components/ToDoNav";
import ListHeader from "@/components/ListHeader";
import ListFooter from "@/components/ListFooter";
import TaskEditingPanel from "@/components/TaskEditingPanel";
import Image from "next/image";
import aaaa from "@/assets/background-2.jpg";
import { useAppSelector } from "@/redux/store";
import TaskItemList from "@/components/TaskItemList";
import { Frequencys } from "@/enums";
import SuggestionsPanel from "@/components/SuggestionsPanel";
import TasksGroupingTab from "@/components/TasksGroupingTab";

export default function DashboardPage() {
	// const taskToSee = taskByListId(tasks, listSelected);
	const UI_Settings = useAppSelector((e) => e.UI_Settings);
	const tasksToView = useAppSelector((e) => e.tasksToView);

	return (
		<>
			<ToDoNav />

			<TaskEditingPanel />

			<SuggestionsPanel />

			{/* *********************** fondo de pantalla*********************** */}
			<Box
				sx={{
					position: "fixed",
					top: 0,
					left: { xs: 0, sm: `${UI_Settings.leftPanelWitdh}px` },
					right: 0,
					bottom: 0,
				}}
			>
				<Image
					src={aaaa}
					alt="background"
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</Box>

			{/* *********************** contenedor de tareas *********************** */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					height: "98vh",
					position: "absolute",
					top: 0,
					left: { xs: 0, sm: `${UI_Settings.leftPanelWitdh}px` },
					right: 0,
					bottom: 0,
				}}
			>
				<Box
					sx={{
						// ml: { xs: 0, sm: `${UI_Settings.leftPanelWitdh}px` },
						mr: {
							xs: 0,
							md: UI_Settings.rightPanelOpen
								? `${UI_Settings.rightPanelWitdh}px`
								: "",
						},

						px: 3,
						pt: 14,
						pb: 13,
						// position: "relative",
						flexGrow: 1,
						maxHeight: "99vh",

						overflowY: "auto",
					}}
				>
					{tasksToView.map((l, i) => (
						<TasksGroupingTab
							key={l.listId}
							data={l}
							showTap={tasksToView.length != 1}
						/>
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
