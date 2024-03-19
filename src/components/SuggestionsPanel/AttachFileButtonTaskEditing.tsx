"use client";
import React, { ReactElement, useRef, useState } from "react";
import moment, { Moment } from "moment";

import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import {
	Box,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
} from "@mui/material";
import DateListSelector from "../ListFooter/DateListSelector";
import Image from "next/image";
import aaaa from "@/assets/background-2.jpg";

interface props {}

const AttachFileButtonTaskEditing = ({}: props) => {
	// ****************** Menu Desplegable de opciones ******************

	const inputFile = useRef<null | HTMLInputElement>(null);

	const date = null;

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	// todo: agregar accesibilidad para el movil (mantener pulsado)
	const handleClickOpen = (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		event.preventDefault();
		event.stopPropagation();
		// setAnchorEl(event.currentTarget);

		inputFile.current?.click();
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
	const title = "Adjuntar archivo";

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
						{/* // todo: diferenciar entre imagen y archivo */}
						{/* <FileDownloadOutlinedIcon /> */}
						<Box
							sx={{
								ml: 1.5,
								display: "flex",
								// alignItems: "center",
								justifyContent: "center",
								borderRadius: 1,
								overflow: "hidden",
							}}
						>
							<Image src={aaaa} alt="prueba" width={24} height={24} />
						</Box>
					</ListItemIcon>

					<ListItemText
						color="primary"
						primary={"2024-03-18_10.38.21.png"}
						secondary={"1,3MB • Imagen"}
					/>
				</ListItemButton>

				<Tooltip title="Eliminar archivo">
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
			</Box>

			<input type="file" hidden ref={inputFile} />

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
						<AttachFileIcon />
					</ListItemIcon>

					<ListItemText color="primary" primary={title} />
				</ListItemButton>
			</Box>
		</>
	);
};

export default AttachFileButtonTaskEditing;
