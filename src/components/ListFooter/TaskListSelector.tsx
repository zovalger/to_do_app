"use client";
import React from "react";
import { Menu, MenuItem } from "@mui/material";

interface props {
	anchorEl: HTMLElement | null;
	onChange(value: string): void;
	close(): void;
	value: string;
}

const TaskListSelector = ({ value, anchorEl, onChange, close }: props) => {
	const openMoreButton = Boolean(anchorEl);

	return (
		<>
			<Menu
				id="More-option-list"
				anchorEl={anchorEl}
				open={openMoreButton}
				onClose={close}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				{/* // todo: hacer que el boton cambiar nombre funcione */}

				<MenuItem
					onClick={() => {
						close();
						// handleClickOpenConfirmDelete();
						// onChange(new Date(moment().startOf("day").format()));
					}}
				>
					{/* <ListItemIcon>
						<TodayOutlinedIcon fontSize="small" />
					</ListItemIcon> */}
					Tareas
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						// onChange(new Date(moment().add(1, "day").startOf("day").format()));
					}}
				>
					{/* <ListItemIcon>
						<EventOutlinedIcon fontSize="small" />
					</ListItemIcon> */}
					Lista 1
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						// onChange(
						// 	new Date(moment().add(1, "week").startOf("isoWeek").format())
						// );
					}}
				>
					{/* <ListItemIcon>
						<FastForwardOutlinedIcon fontSize="small" />
					</ListItemIcon> */}
					Lista 2
				</MenuItem>
			</Menu>
		</>
	);
};

export default TaskListSelector;
