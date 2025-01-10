"use client";
import imageUser from "@/public/icon/icon.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllDataApplication } from "../api/api";
import { IApplications } from "../type/type";

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
				<div className='py-4 p-4 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap rounded-3xl bg-gradient-to-br from-pink-400 to-purple-600 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
					<div className='flex-shrink-0 flex flex-col items-center px-6'>
						<div className='relative rounded-full overflow-hidden border-2 border-white shadow-md'>
							<Image
								className='rounded-full'
								src={imageUser}
								alt={`Avatar of ${application.username}`}
								width={120}
								height={120}
								objectFit='cover'
								layout='fixed'
								placeholder='blur'
								blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
							/>
						</div>
						<h2 className='mt-2 text-center text-fuchsia-900 text-lg font-semibold max-w-[100px] truncate overflow-hidden'>
							{application.username}
						</h2>
						<p className='text-center text-gray-300 text-sm'>
							{new Date(application.CreatedAt).toLocaleDateString("en-US", {
								year: "numeric",
								month: "short",
								day: "numeric",
							})}
						</p>
					</div>
					<div className='md:flex-grow p-4'>
						<h2 className='text-2xl font-bold text-white title-font mb-2 border-b border-purple-200 pb-2 flex items-center justify-between '>
							{application.title}
							<span className='text-sm text-gray-200 font-normal pl-2'>
								{application.comments.length}{" "}
								{application.comments.length <= 1 ? "Comment" : "Comments"}
							</span>
						</h2>

						<p className='leading-relaxed bg-white text-black p-4 rounded-lg shadow-md text-sm max-w-6xl truncate overflow-hidden'>
							{application.text}
						</p>
						<div className='flex justify-end mt-4'>
							<Link
								href={`/applications/${application.id}`}
								className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-fuchsia-500 hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 transition-colors duration-300'
							>
								Перейти к посту
							</Link>
						</div>
					</div>
				</div>
			))}
		</>
	);
};
