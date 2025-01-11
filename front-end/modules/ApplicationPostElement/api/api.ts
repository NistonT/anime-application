import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import {
	ICommentUpdateAPI,
	IComments,
	ICommentsUpdate,
	IDeleteComment,
	IGetIdApplication,
} from "../type/type";

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

export const DeleteComment = async ({
	id_data,
	id_comment,
}: IDeleteComment): Promise<null> => {
	try {
		return await axios.delete(
			`http://localhost:5000/api/comment/${id_data}/${id_comment}`
		);
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const UpdateComment = async ({
	id_data,
	id_comment,
	data,
}: ICommentUpdateAPI): Promise<ICommentsUpdate | null> => {
	try {
		return await axios.put(
			`http://localhost:5000/api/comment/${id_data}/${id_comment}`,
			data
		);
	} catch (error) {
		console.log(error);
		return null;
	}
};
