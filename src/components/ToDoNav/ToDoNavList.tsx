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
import {
	DndContext,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	closestCorners,
	DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import AddButtonAndManualOrder from "./AddButtonAndManualOrder";
import SmartListTitles from "../../hooks/useSmartList";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toggleLeftPanel } from "@/redux/Slices/UISlice";
import GroupListItem from "./GroupListItem";
import ListItem from "./ListItem";
import SmartListItem from "./SmartListItem";
import { TypeList } from "@/enums";
import { setOrderListData } from "@/redux/Slices/OrderListsSlice";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";
import useSmartList from "../../hooks/useSmartList";

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
	const { leftPanelWitdh } = useAppSelector((e) => e.UI_Settings);
	const orderList = useAppSelector((e) => e.orderList);

	const { smartLists } = useSmartList();

	const dispatch = useAppDispatch();

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const getTaskPos = (_id: string) => orderList.findIndex((l) => l._id === _id);

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (!over) return;
		if (active.id === over.id) return;

		const originalPos = getTaskPos(active.id.toString());
		const newPos = getTaskPos(over.id.toString());

		dispatch(setOrderListData(arrayMove(orderList, originalPos, newPos)));
	};

	return (
		<ToDoNavListStyled
			component="nav"
			disablePadding
			sx={{
				display: "flex",
				position: "relative",
				flexDirection: "column",
				height: "100%",
				maxWidth: leftPanelWitdh,
				width: `${leftPanelWitdh}px`,
			}}
		>
			<Box>
				<Box
					sx={{
						position: "sticky",
						top: 0,
						left: 0,
						right: 0,
						pb: 0.5,
						backgroundColor: "#fff",
						zIndex: 100,
					}}
				>
					{/* *********************** Menu icon *********************** */}

					<ListItemButton
						onClick={() => dispatch(toggleLeftPanel())}
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
				</Box>

				<Box sx={{ zIndex: 90 }}>
					{/* *********************** Inteligentes *********************** */}

					<Box>
						{smartLists.map((list) => (
							<SmartListItem key={list._id} data={list} />
						))}
					</Box>

					<Divider sx={{ my: 0.5 }} />

					{/* *********************** grupo *********************** */}

					<DndContext
						sensors={sensors}
						collisionDetection={closestCorners}
						onDragEnd={handleDragEnd}
						modifiers={[restrictToVerticalAxis]}
					>
						<SortableContext
							items={orderList.map((l) => ({ ...l, id: l._id }))}
							// children= {orderList}
							strategy={verticalListSortingStrategy}
						>
							{orderList.map((l) =>
								l.type === TypeList.group ? (
									<GroupListItem key={l._id} data={l} />
								) : (
									<ListItem key={l._id} data={l} />
								)
							)}
						</SortableContext>
					</DndContext>
				</Box>
			</Box>

			{/* *********************** anadir lista o grupo *********************** */}

			<Box
				sx={{
					bottom: 0,
					left: 0,
					position: "sticky",
					right: 0,
					mt: "auto",
					background: "#fff",
					boxShadow: 2,
				}}
			>
				<AddButtonAndManualOrder />
			</Box>
		</ToDoNavListStyled>
	);
};

export default ToDoNavList;
