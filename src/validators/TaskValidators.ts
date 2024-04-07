import { TaskAttributes } from "@/types";
import * as Yup from "yup";

const TaskValidator = Yup.object<TaskAttributes>({
	// _id: 
	title: Yup.string().required().trim().min(1, "Minimo una letra"),

	// steps: 
	// note: 
	// remindMe: 
	// dueDate: 
	// repeat: 
	// myDay: 
	// completionDate: 
	// important: 
	// listId: 
	// files: 
	// assignedUser: 
	// myDayOrder: 
	// order: 
	// createAt: 
	// updateAt: 
});

export default TaskValidator;
