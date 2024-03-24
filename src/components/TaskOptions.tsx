import React, { useState } from "react";

import { taskListItemVariant } from "@/enums";
import { TaskAttributes } from "@/types";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";

import { ListItemIcon, Menu, MenuItem } from "@mui/material";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import moment from "moment";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

interface props {
	anchorEl: null | HTMLElement;
	close(): void;
	tasks: TaskAttributes[] | TaskAttributes;
	variant?: taskListItemVariant;
}

const TaskOptions = ({
	anchorEl,
	close,
	tasks,
	variant = taskListItemVariant.primary,
}: props) => {
	// ****************** Menu Desplegable de opciones ******************

	const openMoreOptions = Boolean(anchorEl);

	const handleCloseMoreOptions = () => {
		close();
	};

	return (
		<>
			{/* ************************* menu desplegable de opciones ****************************** */}

			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				open={openMoreOptions}
				onClose={handleCloseMoreOptions}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem
					onClick={() => {
						close();
						// handleClickOpenConfirmDelete();
						// onChange(new Date(moment().startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<LightModeOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Agregar a Mi dia
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						// handleClickOpenConfirmDelete();
						// onChange(new Date(moment().startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<HighlightOffOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Quitar de Mi dia{" "}
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						// handleClickOpenConfirmDelete();
						// onChange(new Date(moment().startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<StarOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Marcar como importante{" "}
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						// handleClickOpenConfirmDelete();
						// onChange(new Date(moment().startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<StarOutlineOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Quitar importancia{" "}
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						// handleClickOpenConfirmDelete();
						// onChange(new Date(moment().startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<CheckCircleOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Marcar como completada{" "}
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						// handleClickOpenConfirmDelete();
						// onChange(new Date(moment().startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<RadioButtonUncheckedOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Marcar como no completada{" "}
				</MenuItem>

				<Divider />

				<MenuItem
					onClick={() => {
						close();
						// handleClickOpenConfirmDelete();
						// onChange(new Date(moment().startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<TodayOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Vencen hoy
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						// onChange(new Date(moment().add(1, "day").startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<EventOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Vencerán Mañana
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						// toggleCalendar();
					}}
				>
					<ListItemIcon>
						<CalendarMonthOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Elegir fecha
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						// toggleCalendar();
					}}
				>
					<ListItemIcon>
						<CalendarMonthOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Quitar fecha de vencimiento
				</MenuItem>

				<Divider />

				<MenuItem>
					<ListItemIcon>
						<PlaylistAddIcon fontSize="small" />
					</ListItemIcon>
					Mover la tareas a…
				</MenuItem>

				<Divider />

				<MenuItem sx={{ color: "red" }}>
					<ListItemIcon sx={{ color: "red" }}>
						<DeleteIcon fontSize="small" />
					</ListItemIcon>
					Eliminar tareas / tarea
				</MenuItem>
			</Menu>

			<Dialog
				open={false}
				onClose={() => {}}
				PaperProps={{
					component: "form",
					onSubmit: () => {
						// toggleCalendar();
					},
				}}
			>
				<DialogTitle variant="subtitle1" sx={{ fontWeight: 600, pb: 1 }}>
					Eliminar Lista
				</DialogTitle>
				<DialogContent sx={{ pb: 1 }}>
					{`"${"lista"}"`} se eliminará permanentemente.
				</DialogContent>
				<DialogActions>
					<Button
						variant="contained"
						color="error"
						onClick={
							() => {}
							// toggleCalendar()
						}
					>
						Eliminar
					</Button>
					<Button variant="outlined">Cancelar</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default TaskOptions;
