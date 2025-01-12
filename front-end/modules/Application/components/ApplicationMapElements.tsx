"use client";
import { useEffect, useState } from "react";
import { getAllDataApplication } from "../api/api";
import { useFilteredSearch } from "../hook/hook";
import { IApplications } from "../type/type";
import style from "./../application.module.scss";
import { FilteredSearch } from "./FilteredSearch";
import { ImageUsername } from "./ImageUsername";
import { TitleTextLink } from "./TitleTextLink";

export const ApplicationMapElement = () => {
	const [applications, setApplications] = useState<IApplications[]>([]);
	const {
		startDate,
		setStartDate,
		endDate,
		setEndDate,
		searchQuery,
		setSearchQuery,
		filteredApplications,
	} = useFilteredSearch(applications);

	useEffect(() => {
		const getData = async (): Promise<IApplications[] | null> => {
			try {
				const data = await getAllDataApplication();
				setApplications(data);
				return data;
			} catch (error) {
				console.log(error);
				return null;
			}
		};
		getData();
	}, []);

	return (
		<>
			<FilteredSearch
				startDate={startDate}
				setStartDate={setStartDate}
				endDate={endDate}
				setEndDate={setEndDate}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			{filteredApplications.map((application: IApplications) => (
				<div className={style.application_element} data-aos='fade-up'>
					<ImageUsername
						username={application.username}
						createdAt={application.CreatedAt}
					/>
					<TitleTextLink
						id={application.id}
						title={application.title}
						text={application.text}
						comments={application.comments}
					/>
				</div>
			))}
		</>
	);
};
