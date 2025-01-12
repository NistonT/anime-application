import { useState } from "react";
import { IComments, IGetIdApplication } from "../type/type";

export const useFilteredComment = (
	data: IGetIdApplication | null | undefined
) => {
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [searchQuery, setSearchQuery] = useState<string>("");

	const filteredComments = Array.isArray(data?.comments)
		? data.comments.filter((comment: IComments) => {
				if (comment.CreatedAt === undefined) {
					return false;
				}
				const createdAtDate = new Date(comment.CreatedAt).getTime();
				const startFilterDate = startDate ? new Date(startDate).getTime() : 0;
				const endFilterDate = endDate ? new Date(endDate).getTime() : Infinity;

				const searchFilter =
					searchQuery &&
					(comment.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
						comment.username.toLowerCase().includes(searchQuery.toLowerCase()));
				const dateFilter =
					(!startDate || createdAtDate >= startFilterDate) &&
					(!endDate || createdAtDate <= endFilterDate);
				return dateFilter && (searchFilter || !searchQuery);
		  })
		: undefined;
	return {
		filteredComments,
		startDate,
		setStartDate,
		endDate,
		setEndDate,
		searchQuery,
		setSearchQuery,
	};
};
