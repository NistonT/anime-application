import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { IGetIdApplication } from "../type/type";

export const getIdApplication = async (
	param: Params
): Promise<IGetIdApplication | null> => {
	try {
		const response = await axios.get(
			`http://localhost:5000/api/application/${param.id}`
		);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
