"use client";
import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PrintIcon from "@mui/icons-material/Print";
import EmailIcon from "@mui/icons-material/Email";
import PushPinIcon from "@mui/icons-material/PushPin";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";

import IconButton from "@mui/material/IconButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


const ButtonMoreOptionsListHeader = () => {
	// ****************** Menu Desplegable de opciones ******************

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMoreOptions = Boolean(anchorEl);

	// todo: agregar accesibilidad para el movil (mantener pulsado)
	const handleClickOpen = (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		event.preventDefault();
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMoreOptions = () => {
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

	const title = "22222"; // getNameList(lists, listSelected);

	return (
		<>
			<IconButton onClick={handleClickOpen} size="small">
				<MoreHorizOutlinedIcon />
			</IconButton>

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
				<MenuItem>
					<ListItemIcon>
						<DriveFileRenameOutlineIcon fontSize="small" />
					</ListItemIcon>
					Cambiar el nombre de la lista
				</MenuItem>

				<MenuItem>
					<ListItemIcon>
						<AccountCircleIcon fontSize="small" />
					</ListItemIcon>
					Compartir la lista
				</MenuItem>

				<MenuItem>
					<ListItemIcon>
						<PlaylistAddIcon fontSize="small" />
					</ListItemIcon>
					Mover la lista a…
				</MenuItem>

				<MenuItem>
					<ListItemIcon>
						<PlaylistRemoveIcon fontSize="small" />
					</ListItemIcon>
					Quitar del grupo
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<PrintIcon fontSize="small" />
					</ListItemIcon>
					Imprimir esta lista
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<EmailIcon fontSize="small" />
					</ListItemIcon>
					Enviar lista por correo electrónico
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<PushPinIcon fontSize="small" />
					</ListItemIcon>
					Anclar a inicio
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<LibraryAddIcon fontSize="small" />
					</ListItemIcon>
					Duplicar lista
				</MenuItem>

				<Divider />

				<MenuItem sx={{ color: "red" }}>
					<ListItemIcon sx={{ color: "red" }}>
						<DeleteIcon fontSize="small" />
					</ListItemIcon>
					Eliminar lista
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

export default ButtonMoreOptionsListHeader;
