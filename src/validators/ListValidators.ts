import * as Yup from "yup";

const ListValidator = Yup.object({
	title: Yup.string().trim().min(1, "Minimo una letra"),
});
export default ListValidator;
