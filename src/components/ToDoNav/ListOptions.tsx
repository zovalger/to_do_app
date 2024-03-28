import React, { useState } from "react";
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

import { ListItemIcon, Menu, MenuItem } from "@mui/material";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { OrderList } from "@/types";
import { useAppSelector } from "@/redux/store";
import useList from "@/hooks/useList";

interface props {
	anchorEl: HTMLElement | null;
	close(): void;
	data: OrderList;

	// functions
	changeName(): void;
	shareList(): void;
	// moveTo():void
	extractFromGroup(): void;
	printList(): void;
	sendForEmail(): void;
	pin(): void;
	duplicate(): void;
}

const ListOptions = ({
	data,
	anchorEl,
	close,
	changeName,
	shareList,
	extractFromGroup,
	printList,
	sendForEmail,
	pin,
	duplicate,
}: props) => {
	const { deleteList } = useList();
	const listsIndexed = useAppSelector((e) => e.listsIndexed);
	const { _id, title } = listsIndexed[`${data._id}`];

	const openMoreButton = Boolean(anchorEl);

	const [dialogDelete, setDialogDelete] = useState(false);
	const openDialogDelete = () => {
		setDialogDelete(true);
	};
	const closeDialogDelete = () => {
		setDialogDelete(true);
	};

	const deleteThisList = () => {
		closeDialogDelete();
		close();
		deleteList(_id);
	};
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
				<MenuItem onClick={changeName}>
					<ListItemIcon>
						<DriveFileRenameOutlineIcon fontSize="small" />
					</ListItemIcon>
					Cambiar el nombre de la lista
				</MenuItem>

				<MenuItem onClick={shareList}>
					<ListItemIcon>
						<AccountCircleIcon fontSize="small" />
					</ListItemIcon>
					Compartir la lista
				</MenuItem>

				<MenuItem
					// onClick={}
					disabled
				>
					<ListItemIcon>
						<PlaylistAddIcon fontSize="small" />
					</ListItemIcon>
					Mover la lista a…
				</MenuItem>

				<MenuItem onClick={extractFromGroup}>
					<ListItemIcon>
						<PlaylistRemoveIcon fontSize="small" />
					</ListItemIcon>
					Quitar del grupo
				</MenuItem>
				<MenuItem onClick={printList}>
					<ListItemIcon>
						<PrintIcon fontSize="small" />
					</ListItemIcon>
					Imprimir esta lista
				</MenuItem>
				<MenuItem onClick={sendForEmail}>
					<ListItemIcon>
						<EmailIcon fontSize="small" />
					</ListItemIcon>
					Enviar lista por correo electrónico
				</MenuItem>
				<MenuItem onClick={pin}>
					<ListItemIcon>
						<PushPinIcon fontSize="small" />
					</ListItemIcon>
					Anclar a inicio
				</MenuItem>
				<MenuItem onClick={duplicate}>
					<ListItemIcon>
						<LibraryAddIcon fontSize="small" />
					</ListItemIcon>
					Duplicar lista
				</MenuItem>

				<Divider />

				<MenuItem onClick={openDialogDelete} sx={{ color: "red" }}>
					<ListItemIcon sx={{ color: "red" }}>
						<DeleteIcon fontSize="small" />
					</ListItemIcon>
					Eliminar lista
				</MenuItem>
			</Menu>

			<Dialog
				open={dialogDelete}
				onClose={closeDialogDelete}
				PaperProps={{
					component: "form",
					onSubmit: deleteThisList,
				}}
			>
				<DialogTitle variant="subtitle1" sx={{ fontWeight: 600, pb: 1 }}>
					Eliminar Lista
				</DialogTitle>
				<DialogContent sx={{ pb: 1 }}>
					{`"${title}"`} se eliminará permanentemente.
				</DialogContent>
				<DialogActions>
					<Button variant="contained" color="error" onClick={deleteThisList}>
						Eliminar
					</Button>

					<Button variant="outlined" onClick={closeDialogDelete}>
						Cancelar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default ListOptions;
