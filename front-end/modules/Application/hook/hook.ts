import { useState } from "react";
import { IApplications } from "../type/type";

export const useFilteredSearch = (applications: IApplications[]) => {
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [searchQuery, setSearchQuery] = useState<string>("");

	const filteredApplications = applications.filter(application => {
		const createdAtDate = new Date(application.CreatedAt).getTime();
		const startDateFilter = startDate ? new Date(startDate).getTime() : 0;
		const endDateFilter = endDate ? new Date(endDate).getTime() : Infinity;

		const searchFilter =
			searchQuery &&
			(application.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				application.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
				application.username.toLowerCase().includes(searchQuery.toLowerCase()));

		const dateFilter =
			(!startDate || createdAtDate >= startDateFilter) &&
			(!endDate || createdAtDate <= endDateFilter);
		return dateFilter && (!searchQuery || searchFilter);
	});

	return {
		startDate,
		setStartDate,
		endDate,
		setEndDate,
		searchQuery,
		setSearchQuery,
		filteredApplications,
	};
};
