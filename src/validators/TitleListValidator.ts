import * as Yup from "yup";

const TitleListValidator = Yup.object({
	title: Yup.string().trim().min(1, "Minimo una letra"),
});
export default TitleListValidator;
