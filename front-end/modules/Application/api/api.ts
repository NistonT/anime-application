import axios from "axios";

export const getAllDataApplication = async () => {
	try {
		const response = await axios.get("http://localhost:5000/api/application");
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
