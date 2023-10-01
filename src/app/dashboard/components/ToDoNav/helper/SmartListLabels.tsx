import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const SmartListTitles= [
	{ _id: "myDay", icon: <WbSunnyOutlinedIcon />, title: "Mi día" },
	{ _id: "important", icon: <StarOutlineOutlinedIcon />, title: "Importante" },
	{ _id: "planned", icon: <ViewWeekOutlinedIcon />, title: "Planeado" },
	{ _id: "todo", icon: <AllInclusiveOutlinedIcon />, title: "Todo" },
	{ _id: "complete", icon: <CheckCircleOutlinedIcon />, title: "Completadas" },
	{ _id: "toMyUser", icon: <PersonOutlineOutlinedIcon />, title: "Asignadas a mi usuario" },
	{ _id: "emailMark", icon: <FlagOutlinedIcon />, title: "Correo electronico marcado" },
	{ _id: "task", icon: <HomeOutlinedIcon />, title: "Tareas" },
];
export default SmartListTitles;
