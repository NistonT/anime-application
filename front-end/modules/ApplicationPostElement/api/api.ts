import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { IComments, IGetIdApplication } from "../type/type";

export const getIdApplication = async (
	param: Params
): Promise<IGetIdApplication | null> => {
	try {
		const response = await fetch(
			`http://localhost:5000/api/application/${param.id}`,
			{ cache: "no-store" }
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const postAddComment = async (
	param: Params,
	data: IComments
): Promise<IComments | null> => {
	try {
		return await axios.post(
			`http://localhost:5000/api/comment/${param.id}`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	} catch (error) {
		console.log(error);
		return null;
	}
};
