import { ConfigUserStorageName } from "@/config/OfflineDataSettings";
import { DefaultConfigUser } from "@/defaultValues";
import { ConfigUser } from "@/types";

export const getConfigUserLocalStorage = (): ConfigUser => {
	const data = localStorage.getItem(ConfigUserStorageName);

	if (!data) return DefaultConfigUser;

	return JSON.parse(data);
};

export const saveConfigUserLocalStorage = (config: ConfigUser) => {
	const data = JSON.stringify(config);

	localStorage.setItem(ConfigUserStorageName, data);
};
