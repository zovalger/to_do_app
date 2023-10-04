import React from "react";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";

import { useGlobalContext } from "@/app/contexts/Global.context";
import { useListAndGroupContext } from "@/app/contexts/ListAndGroup.context";
import { deleteList } from "../../../services/ListsService";
import { getNameList, getSmartListName } from "@/app/helper/List.helper";

const ButtonMoreOptionsListHeader = () => {
	const { lists, setLists, listSelected } = useListAndGroupContext();



	// **************************** menu desplegable ****************************
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const openMoreButton = Boolean(anchorEl);

	const handleClickMoreButton = (event: React.MouseEvent<HTMLButtonElement>) =>
		setAnchorEl(event.currentTarget);

	const handleCloseMoreButton = () => setAnchorEl(null);

	// **************************** menu eliminar ****************************

	const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

	const handleClickOpenConfirmDelete = () => {
		setOpenConfirmDelete(true);
	};

	const handleCloseConfirmDelete = () => {
		setOpenConfirmDelete(false);
	};

	const handleDelete = async () => {
		if (!listSelected) return;

		const newLists = await deleteList(lists, listSelected);

		setLists(newLists);

		handleCloseConfirmDelete();
	};

  	// **************************** render ****************************

	if (!listSelected) return;

	const title = getNameList(lists, listSelected);
	return (
		<>
			<IconButton onClick={handleClickMoreButton} sx={{ borderRadius: 0 }}>
				<MoreHorizOutlinedIcon />
			</IconButton>

			<Menu
				id="More-option-list"
				anchorEl={anchorEl}
				open={openMoreButton}
				onClose={handleCloseMoreButton}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem
					onClick={() => {
						// handleCloseMoreButton();
						// handleClickOpenConfirmDelete();
					}}
				>
					<ListItemIcon>
						<DriveFileRenameOutlineOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Cambiar nombre
				</MenuItem>

				<MenuItem
					onClick={() => {
						handleCloseMoreButton();
						handleClickOpenConfirmDelete();
					}}
				>
					<ListItemIcon>
						<DeleteOutlineOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Eliminar lista
				</MenuItem>
			</Menu>

			<Dialog
				open={openConfirmDelete}
				onClose={handleCloseConfirmDelete}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				{/* <DialogTitle id="alert-dialog-title" >
					Seguro que quiere eliminar {title}
				</DialogTitle> */}
				<DialogContent>
					{/* <DialogContentText id="alert-dialog-description">
					Seguro que quiere eliminar {title}
					</DialogContentText> */}
					{`Seguro que quiere eliminar "${title}"`}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseConfirmDelete} autoFocus>
						Cancelar
					</Button>
					<Button onClick={handleDelete} color="error">
						Eliminar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default ButtonMoreOptionsListHeader;
