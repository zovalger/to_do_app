import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { SmartListsIds, SmartListsLabels } from "@/enums";

const SmartListTitles = [
	{
		_id: SmartListsIds.myDay,
		icon: <WbSunnyOutlinedIcon />,
		title: SmartListsLabels.myDay,
	},
	{
		_id: SmartListsIds.important,
		icon: <StarOutlineOutlinedIcon />,
		title: SmartListsLabels.important,
	},
	{
		_id: SmartListsIds.planned,
		icon: <ViewWeekOutlinedIcon />,
		title: SmartListsLabels.planned,
	},
	{
		_id: SmartListsIds.todo,
		icon: <AllInclusiveOutlinedIcon />,
		title: SmartListsLabels.todo,
	},
	{
		_id: SmartListsIds.complete,
		icon: <CheckCircleOutlinedIcon />,
		title: SmartListsLabels.complete,
	},
	{
		_id: SmartListsIds.toMyUser,
		icon: <PersonOutlineOutlinedIcon />,
		title: SmartListsLabels.toMyUser,
	},
	{
		_id: SmartListsIds.emailMark,
		icon: <FlagOutlinedIcon />,
		title: SmartListsLabels.emailMark,
	},
	{
		_id: SmartListsIds.task,
		icon: <HomeOutlinedIcon />,
		title: SmartListsLabels.task,
	},
];
export default SmartListTitles;
