"use client";
import { useEffect, useState } from "react";
import { getAllDataApplication } from "../api/api";
import { IApplications } from "../type/type";
import style from "./../application.module.scss";
import { ImageUsername } from "./ImageUsername";
import { TitleTextLink } from "./TitleTextLink";

export const ApplicationMapElement = () => {
	const [applications, setApplications] = useState<IApplications[]>([]);

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
			{applications.map((application: IApplications) => (
				<div className={style.application_element}>
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
