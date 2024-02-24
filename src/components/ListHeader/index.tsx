"use client";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

import TitleListHeader from "./TitleListHeader";
import ButtonMoreOptionsListHeader from "./ButtonMoreOptionsListHeader";
import { useAppSelector } from "@/redux/store";

const ListHeader = () => {
	// const { handleAsidePanelToggle } = useGlobalContext();
	// const { listSelected } = useListAndGroupContext();
	// const {taskEditing} = useTaskContext()
	const UI_Settings = useAppSelector((e) => e.UI_Settings);

	// **************************** render ****************************

	// if (!listSelected) return <></>;

	return (
		<>
			<Box
				sx={{
					position: "fixed",
					right: 0,
					left: 0,

					top: 0,

					ml: { xs: 0, sm: `${UI_Settings.leftPanelWitdh}px` },
					mr: {
						xs: 0,
						sm: UI_Settings.rightPanelOpen
							? `${UI_Settings.rightPanelWitdh}px`
							: "",
					},

					px: 3,
					pb: 1.2,
					pt: 1,
					color: "#fff",
					// backdropFilter: "blur(16px)",
					// bgcolor: "#fff8",
				}}
				// boxShadow={3}
			>
				<Box sx={{ display: { xs: "block", sm: "none" } }}>
					<IconButton edge="start" sx={{ borderRadius: 1 }} size="small">
						<MenuIcon />
					</IconButton>
				</Box>

				<Box
					sx={{ display: "flex", alignItems: "center", pt: { xs: 0, sm: 2 } }}
				>
					<TitleListHeader />

					<Box
						sx={{
							ml: "auto",
							".MuiButtonBase-root": {
								ml: 2,
								borderRadius: 1,
								p: 0.6,
							},
							".MuiSvgIcon-root": {
								fontSize: 19,
							},
						}}
					>
						<Box
							sx={{
								ml: "auto",
								".MuiButtonBase-root": {
									bgcolor: "#fff8",
								},
							}}
							component="span"
						>
							<IconButton size="small">
								<PersonAddAlt1Icon />
							</IconButton>

							<IconButton size="small">
								<EmojiObjectsIcon />
							</IconButton>
						</Box>

						<ButtonMoreOptionsListHeader />
					</Box>
				</Box>

				<Typography component="div" sx={{ fontSize: 13, mt: 1 }}>
					{new Date().toDateString()}
				</Typography>
			</Box>
		</>
	);
};

export default ListHeader;
