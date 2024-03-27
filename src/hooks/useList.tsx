import { listDefaultValues } from "@/defaultValues";
import { addOrUpdateListToIndex } from "@/redux/Slices/ListsIndexedSlice";
import { addListToOrder } from "@/redux/Slices/OrderListsSlice";
import { useAppDispatch} from "@/redux/store";

const useList = () => {
	// useAppSelector(e=>e.listsIndexed)
	const dispatch = useAppDispatch();

	const createList = () => {
		const newList = { ...listDefaultValues() };

		dispatch(addOrUpdateListToIndex({ _id: newList._id, data: newList }));

		dispatch(addListToOrder(newList));
	};

	const createGroup = () => {
		const newGroup = { ...listDefaultValues(true) };

		dispatch(addOrUpdateListToIndex({ _id: newGroup._id, data: newGroup }));
		dispatch(addListToOrder(newGroup));
	};

	const updateList = () => {};

	return {
		createList,
		createGroup,
		updateList,
	};
};

export default useList;
