"use client";
import React, { ReactElement, useRef, useState } from "react";
import moment, { Moment } from "moment";

import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import {
	Box,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
} from "@mui/material";
import DateListSelector from "../ListFooter/DateListSelector";

interface props {}

const DueDateButtonTaskEditing = ({}: props) => {
	// ***************// ****************** Menu Desplegable de opciones ******************

	const date = null;

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	// todo: agregar accesibilidad para el movil (mantener pulsado)
	const handleClickOpen = (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		event.preventDefault();
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const onClose = () => {
		setAnchorEl(null);
	};
	// ****************** Cambio de nombre ******************

	const handleSubmit = async () => {
		// const newGroup = await updateListGroup(_id, { ...data, title: inputValue });
		// const newGroupsList = listGroups.map((g) => (g._id === _id ? newGroup : g));
		// setListGroups(newGroupsList);
		// setListGroupsLocalStorage(newGroupsList);
		// handleResetRename();
	};

	/* ************************* Agregar/quitar listas ****************************** */

	const [openListContened, setOpenListContened] = React.useState(false);

	const handleCloseListContened = () => {
		setOpenListContened(false);
	};

	// ****************** Eliminacion ******************

	const handleDeleteGroup = async () => {
		// todo: eliminar grupo
		// const newGroupsList = await deleteListGroup(listGroups, _id);
		// setListGroups(newGroupsList);
	};

	const onClick = () => {
		// setListSelected(_id);
		// handleAsidePanelToggle()
	};

	// todo: anadir comparaciones para hoy, manana
	const title = date
		? moment(date).isSame(moment(), "day")
			? "Hoy"
			: moment(date).isSame(moment().add(1, "day"))
			? "Mañana"
			: moment(date).format("dd, D MMMM")
		: "Fecha de vencimiento";

	return (
		<>
			<Box
				sx={{
					display: "flex",
				}}
			>
				<ListItemButton
					sx={{ flexGrow: 1 }}
					onClick={handleClickOpen}
					selected={!!date}
				>
					<ListItemIcon>
						<CalendarMonthIcon />
					</ListItemIcon>

					<ListItemText color="primary" primary={title} />
				</ListItemButton>

				{date && (
					<Tooltip title="Eliminar Fecha">
						<IconButton
							// onClick={handleDelete}
							sx={{
								borderRadius: 0,
								flexShrink: 0,
								width: 48,
								// my: 1,
							}}
							color="inherit"
						>
							<CloseIcon />
						</IconButton>
					</Tooltip>
				)}
			</Box>

			<DateListSelector
				value={null}
				anchorEl={anchorEl}
				close={onClose}
				onChange={() => {}}
			/>
		</>
	);
};

export default DueDateButtonTaskEditing;
