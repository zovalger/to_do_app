import React, { useState } from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button, Typography } from "@mui/material";

import DateListSelector from "./DateListSelector";
import moment from "moment";
import { DueDateTitleHelper } from "@/app/helper/TitlesDates.helper";

const DueDateButton = () => {
	// ****************** Menu Desplegable de opciones ******************

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
	const title = DueDateTitleHelper(date);

	return (
		<>
			<Button variant="text" aria-label="directions" onClick={handleClickOpen}>
				<CalendarMonthIcon />
				<Typography>{title}</Typography>
			</Button>

			<DateListSelector
				value={null}
				anchorEl={anchorEl}
				close={onClose}
				onChange={() => {}}
				deleteButton={true}
			/>
		</>
	);
};

export default DueDateButton;
