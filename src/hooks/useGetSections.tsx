import React, { useEffect, useState } from "react";
import { ClassOfSection, SectionOfClass } from "../types";
import { useAppSelector } from "@/redux/store";
import axios from "axios";
import API_SERVER_Endpoints from "@/config/API_SERVER_Endpoints";

const useGetSections = (): [boolean, boolean, SectionOfClass[]] => {
	const { token } = useAppSelector((state) => state.user);

	const [data, setData] = useState<SectionOfClass[]>([]);
	const [loanding, setLoanding] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (data.length) return;

		getList();
	}, []);

	const getList = async () => {
		try {
			const res = await axios.get(API_SERVER_Endpoints.admin.sections.getList, {
				headers: {
					"x-access-token": token,
				},
			});
			setData(res.data);
			setLoanding(false);
		} catch (error) {
			setError(true);
		}
	};

	return [error, loanding, data];
};

export default useGetSections;
