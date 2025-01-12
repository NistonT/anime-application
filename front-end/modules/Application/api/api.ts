import axios from "axios";
import { IApplicationUpdateApi } from "../type/type";

export const getAllDataApplication = async () => {
	try {
		const response = await axios.get("http://localhost:5000/api/application");
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteApplication = async (id: string) => {
	try {
		return await axios.delete(`http://localhost:5000/api/application/${id}`);
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const updateApplication = async ({
	id_application,
	data,
}: IApplicationUpdateApi) => {
	try {
		return await axios.put(
			`http://localhost:5000/api/application/${id_application}`,
			data
		);
	} catch (error) {
		console.log(error);
		return null;
	}
};
