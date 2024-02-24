import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import InputBase from "@mui/material/InputBase";
import { useTheme } from "@mui/material/styles";

import AddButton from "./AddButton";
import ListInNav from "./ListInNav";
import SmartListTitles from "./SmartListLabels";
import GroupListInNav from "./GroupListInNav";
import { useAppSelector } from "@/redux/store";
// import { useAppSelector } from "@/redux/store";

const ToDoNavListStyled = styled(List)<{ component?: React.ElementType }>({
	"& .MuiListItemButton-root": {
		paddingLeft: 16,
		paddingRight: 16,
		position: "relative",
		"& .MuiTypography-root": {
			fontSize: 13,
		},
	},
	"& .MuiListItemButton-root.Mui-selected": {
		"&:after": {
			position: "absolute",
			left: 6,
			top: "auto",
			botton: "auto",
			width: 2,
			height: "60%",
			background: "#0af",
			content: '""',
		},
	},
	"& .MuiListItemIcon-root": {
		minWidth: 0,
		marginRight: 16,
	},
	"& .MuiListItemText-root": {
		whiteSpace: "nowrap",
		overflow: "hidden",
	},

	"& .MuiSvgIcon-root": {
		fontSize: 20,
	},
});

const ToDoNavList = () => {
	const theme = useTheme();
	const UI_Settings = useAppSelector((e) => e.UI_Settings);

	// const { handleAsidePanelToggle } = useGlobalContext();

	// const { lists, listGroups } = useListAndGroupContext();

	// const { groupAndLists, restLists } = formateGroups(listGroups, lists);

	return (
		<ToDoNavListStyled
			component="nav"
			disablePadding
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				maxWidth: UI_Settings.leftPanelWitdh,
			}}
		>
			<Box>
				{/* *********************** Menu icon *********************** */}

				<ListItemButton
					// onClick={handleAsidePanelToggle}
					sx={{
						[theme.breakpoints.up("sm")]: { display: "none" },
					}}
				>
					<ListItemIcon sx={{ fontSize: 20 }}>
						<MenuIcon />
					</ListItemIcon>
				</ListItemButton>
				{/* *********************** account *********************** */}

				<ListItemButton component="a" href="#customized-list">
					<Avatar
						sx={{
							mr: 1,
						}}
						src="https://res.cloudinary.com/dpqw06ajr/image/upload/v1686740484/images/frxomwefeytbcsbbaaqs.jpg"
					/>

					<ListItemText
						primary={"German Castro"}
						secondary={"germancastrov30@gmail.com"}
					/>
				</ListItemButton>

				{/* *********************** buscador *********************** */}
				<Paper
					component="form"
					sx={{
						mx: 2,
						mb: 2,
						p: "2px 4px",
						display: "flex",
						alignItems: "center",

						height: 32,
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1, fontSize: 13 }}
						placeholder="Buscar"
						inputProps={{ "aria-label": "search " }}
						// value={"hola"}
					/>
					<IconButton sx={{ p: "5px" }} aria-label="Clear">
						<ClearIcon />
					</IconButton>
					<IconButton type="button" sx={{ p: "5px" }} aria-label="search">
						<SearchIcon />
					</IconButton>
				</Paper>

				{/* *********************** Inteligentes *********************** */}

				<Box>
					{SmartListTitles.map((list) => (
						<ListInNav
							key={list._id}
							data={{ ...list, userId: "", guests: [] }}
							icon={list.icon}
						/>
					))}
				</Box>

				<Divider sx={{ my: 0.5 }} />

				{/* *********************** grupo *********************** */}

				<GroupListInNav
					key={22222}
					data={{
						_id: "",
						title: "grupo 1",
						lists: [],
						userId: "",
					}}
					lists={[]}
				/>

				<GroupListInNav
					key={1111}
					data={{
						_id: "",
						title: "grupo 2",
						lists: [],
						userId: "",
					}}
					lists={[
						{
							_id: "",
							title: "Lista 11111111111111111111111111111",
							userId: "",
							guests: [],
						},
					]}
				/>

				<ListInNav
					key={33333}
					data={{
						_id: "",
						title: "Lista 22222222222222",
						userId: "",
						guests: [],
					}}
				/>
			</Box>

			{/* *********************** anadir lista o grupo *********************** */}

			<AddButton />
		</ToDoNavListStyled>
	);
};

export default ToDoNavList;
