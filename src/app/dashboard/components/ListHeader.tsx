"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TaskPanelWidth, ToDoNavWidth } from "@/config/UISettings";
import { useGlobalContext } from "@/app/contexts/Global.context";
import { useListAndGroupContext } from "@/app/contexts/ListAndGroup.context";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { deleteList } from "../../services/ListsService";
import { getSmartListName } from "@/app/helper/List.helper";

const ListHeader = () => {
	const { handleAsidePanelToggle } = useGlobalContext();
	const { lists, setLists, listSelected } = useListAndGroupContext();

	// **************************** menu desplegable ****************************
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const openMoreButton = Boolean(anchorEl);

	const handleClickMoreButton = (event: React.MouseEvent<HTMLButtonElement>) =>
		setAnchorEl(event.currentTarget);

	const handleCloseMoreButton = () => setAnchorEl(null);

	// **************************** menu eliminar ****************************

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = async () => {
		if (!listSelected) return;

		const newLists = await deleteList(lists, listSelected);

		setLists(newLists);

		handleClose();
	};

	// **************************** render ****************************

	const smartTitle = listSelected && getSmartListName(listSelected);
	const currentList = lists.find((l) => l._id == listSelected)?.title;
	const title = smartTitle || currentList || "Titulo de Lista";

	return (
		<>
			<Box
				sx={{
					position: "fixed",
					right: 0,
					left: 0,

					top: 0,

					ml: { xs: 0, sm: `${ToDoNavWidth}px` },
					mr: { xs: 0, sm: `${TaskPanelWidth}px` },

					px: 3,
					pb: 1,
					backdropFilter: "blur(16px)",
					bgcolor: "#fff8",
				}}
				// boxShadow={3}
			>
				<Box sx={{ display: { xs: "block", sm: "none" } }}>
					<IconButton edge="start" onClick={handleAsidePanelToggle}>
						<MenuIcon />
					</IconButton>
				</Box>

				<Box sx={{ display: "flex", pt: { xs: 0, sm: 2 } }}>
					<Typography variant="h5" component="div">
						{title}
					</Typography>

					<Box sx={{ ml: "auto" }}>
						<IconButton
							onClick={handleClickMoreButton}
							sx={{ borderRadius: 0 }}
						>
							<MoreHorizOutlinedIcon />
						</IconButton>
					</Box>
				</Box>
				<Typography component="div" sx={{ fontSize: 13 }}>
					{new Date().toDateString()}
				</Typography>
			</Box>

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
						handleCloseMoreButton();
						handleClickOpen();
					}}
				>
					<ListItemIcon>
						<DeleteOutlineOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Eliminar lista
				</MenuItem>
			</Menu>

			<Dialog
				open={open}
				onClose={handleClose}
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
					<Button onClick={handleClose} autoFocus>
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

export default ListHeader;
