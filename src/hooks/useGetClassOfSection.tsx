import React, { useEffect, useState } from "react";
import { ClassOfSection } from "../types";
import { useAppSelector } from "@/redux/store";
import API_SERVER_Endpoints from "@/config/API_SERVER_Endpoints";
import axios from "axios";

const useGetClassOfSection = (): [boolean, boolean, ClassOfSection[]] => {
	const { token } = useAppSelector((state) => state.user);
	const { section_id: sectionId, classes } = useAppSelector(
		(state) => state.classForSection
	);

	const [data, setData] = useState<ClassOfSection[]>([]);
	const [loanding, setLoanding] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (data.length) return;

		getList();
	}, []);

	const getList = async () => {
		try {
			const res = await axios.get(
				API_SERVER_Endpoints.admin.classes.getList(sectionId),
				{
					headers: {
						"x-access-token": token,
					},
				}
			);
			setData(res.data);
			setLoanding(false);
		} catch (error) {
			setError(true);
		}
	};

	return [error, loanding, data];
};

export default useGetClassOfSection;
