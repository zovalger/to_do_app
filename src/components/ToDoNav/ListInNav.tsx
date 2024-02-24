import React, { useState } from "react";
import { FormatListBulletedOutlined } from "@mui/icons-material";
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
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Box,
	IconButton,
	Menu,
	MenuItem,
	TextField,
} from "@mui/material";

import { ListAttributes } from "@/types";

interface props {
	data: ListAttributes;

	icon?: JSX.Element;
	inGroup?: boolean;
}

const ListInNav = ({ data, icon, inGroup = false }: props) => {
	const { _id, title } = data;

	// ****************** Menu Desplegable ******************

	// ****************** Menu Desplegable de opciones ******************

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMoreOptions = Boolean(anchorEl);

	// todo: agregar accesibilidad para el movil (mantener pulsado)
	const handleRightClick = (
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

	const handleClickOpen = () => {
		setOpenListContened(true);
		handleCloseMoreOptions();
	};

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

	return (
		<>
			<ListItemButton
				onClick={onClick}
				onContextMenu={handleRightClick}
				selected={
					false
					// _id === listSelected
				}
			>
				<ListItemIcon sx={inGroup ? { ml: 4.5 } : {}}>
					{icon || <FormatListBulletedOutlined />}
				</ListItemIcon>

				<ListItemText primary={title} />
			</ListItemButton>

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
		</>
	);
};

export default ListInNav;
