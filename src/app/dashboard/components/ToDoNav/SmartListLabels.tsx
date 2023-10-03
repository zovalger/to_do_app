import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { SmartListsLabels } from "@/enums";

const SmartListTitles = [
	{
		_id: "myDay",
		icon: <WbSunnyOutlinedIcon />,
		title: SmartListsLabels.myDay,
	},
	{
		_id: "important",
		icon: <StarOutlineOutlinedIcon />,
		title: SmartListsLabels.important,
	},
	{
		_id: "planned",
		icon: <ViewWeekOutlinedIcon />,
		title: SmartListsLabels.planned,
	},
	{
		_id: "todo",
		icon: <AllInclusiveOutlinedIcon />,
		title: SmartListsLabels.todo,
	},
	{
		_id: "complete",
		icon: <CheckCircleOutlinedIcon />,
		title: SmartListsLabels.complete,
	},
	{
		_id: "toMyUser",
		icon: <PersonOutlineOutlinedIcon />,
		title: SmartListsLabels.toMyUser,
	},
	{
		_id: "emailMark",
		icon: <FlagOutlinedIcon />,
		title: SmartListsLabels.task,
	},
	{ _id: "task", icon: <HomeOutlinedIcon />, title: "Tareas" },
];
export default SmartListTitles;
