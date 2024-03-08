import React, { useState } from "react";

import AlarmIcon from "@mui/icons-material/Alarm";
import { Box, Button, Typography } from "@mui/material";

import moment from "moment";
import DateAndTimeListSelector from "./DateAndTimeListSelector";

const RememberDateButton = () => {
	// ****************** Menu Desplegable de opciones ******************

	const date = new Date();

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
	const Subtitle = date
		? moment(date).isSame(moment(), "day")
			? "Hoy"
			: moment(date).isSame(moment().add(1, "day"))
			? "Mañana"
			: moment(date).format("dd, D MMMM")
		: "Recordatorio";

	return (
		<>
			<Button variant="text" aria-label="directions" onClick={handleClickOpen}>
				<AlarmIcon />
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<Typography>Avísame a las {moment(date).format("h:mm a")}</Typography>
					<Typography variant="subtitle1" sx={{ fontSize: "2px" }}>
						{Subtitle}
					</Typography>
				</Box>
			</Button>

			<DateAndTimeListSelector
				value={date}
				anchorEl={anchorEl}
				close={onClose}
				onChange={() => {}}
			/>
		</>
	);
};

export default RememberDateButton;
