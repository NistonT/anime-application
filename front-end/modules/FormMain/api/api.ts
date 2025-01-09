import axios from "axios";
import { IFormDataCreatedApplication } from "../type/type";
export const createdApplicationPost = async (
	data: IFormDataCreatedApplication
) => {
	try {
		const response = await axios.post(
			`http://localhost:5000/api/application`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
