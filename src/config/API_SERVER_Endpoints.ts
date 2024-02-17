import { SERVER_URL } from ".";

const API_SERVER_Endpoints = {
	student: {
		register: `${SERVER_URL}/registerStudent`,
	},
	admin: {
		sections: {
			create: `${SERVER_URL}/sections`,
			update: `${SERVER_URL}/sections`,
			getList: `${SERVER_URL}/sections`,
		},
		classes: {
			getList: (_id: string) => `${SERVER_URL}/section/${_id}/classes`,
			create: `${SERVER_URL}/classes`,
			update: `${SERVER_URL}/classes`,
		},
	},
};

export default API_SERVER_Endpoints;


