"use client";
import { useEffect, useState } from "react";
import {
	InputBase,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	TextField,
	Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import TaskItemList from "../TaskItemList";
import { Frequencys, taskListItemVariant } from "@/enums";
import TasksGroupingTab from "../TasksGroupingTab";
import { closeRightPanel } from "@/redux/Slices/UISlice";
import tasks from "@/test_data/TaskTestData";

const SuggestionsPanelContent = () => {
	const { rightPanelWitdh } = useAppSelector((e) => e.UI_Settings);

	const dispatch = useAppDispatch();
	const theme = useTheme();

	const handleClose = () => {
		dispatch(closeRightPanel());
	};

	return (
		<>
			<Box
				sx={{
					width: `${rightPanelWitdh}px`,

					[theme.breakpoints.down("sm")]: {
						width: `96vw`,
					},

					mt: 1,
					mb: 5,
					position: "relative",
				}}
			>
				<Box
					sx={{
						position: "sticky",
						top: 0,
						bgcolor: "#fff",
						zIndex: 1,
						overflowX: "hidden",
						py: 1,
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							pr: 1,
							ml: 3,
						}}
					>
						<Typography sx={{ fontSize: 18, py: 0, fontWeight: "600" }}>
							Sugerencias
						</Typography>
						<IconButton onClick={handleClose} sx={{ mr: 0.9 }}>
							<CloseOutlinedIcon sx={{ fontSize: 18 }} />
						</IconButton>
					</Box>
				</Box>

				<TasksGroupingTab
					variant={taskListItemVariant.suggestions}
					tasks={tasks}
				/>

				{/* ))} */}
			</Box>
		</>
	);
};

export default SuggestionsPanelContent;
