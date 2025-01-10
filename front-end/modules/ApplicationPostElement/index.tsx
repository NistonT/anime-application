"use client";

import imageUser from "@/public/icon/icon.jpg";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getIdApplication } from "./api/api";
import { Comments } from "./components/Comments";
import { IGetIdApplication } from "./type/type";

export const ApplicationPostElement = () => {
	const param = useParams();

	const [application, setApplication] = useState<IGetIdApplication | null>(
		null
	);
	const [isLoading, setIdLoading] = useState<boolean>(true);

	useEffect(() => {
		async function getDataId(id: Params) {
			try {
				const data = await getIdApplication(id);
				setApplication(data);
				setIdLoading(false);
				return data;
			} catch (error) {
				console.log(error);
				return null;
			}
		}
		getDataId(param);
	}, []);

	return (
		<>
			{isLoading ? (
				<div>
					<Link href='/applications'>Вернуться</Link> Loading...
				</div>
			) : (
				<>
					<Link href='/applications'>Вернуться</Link>
					<div className='bg-gray-800 text-white rounded-xl shadow-lg mx-auto my-8 overflow-hidden w-full container'>
						<div className='relative'>
							<div className='relative h-40 bg-gradient-to-b from-purple-500 to-pink-400 flex justify-center items-center'>
								<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-pink-200 shadow-md z-10'>
									<Image
										className='rounded-full'
										src={imageUser}
										alt={`Avatar of ${application?.username}`}
										width={120}
										height={120}
										objectFit='cover'
										layout='fixed'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
									/>
								</div>
							</div>
							<div className='p-4 flex justify-center items-center'>
								<h2 className='text-xl font-bold text-pink-300 ml-4'>
									{application?.username}
								</h2>
							</div>
						</div>
						<div className='p-6 w-full'>
							<h1 className='text-2xl font-extrabold tracking-tight mb-4 text-pink-200 text-center'>
								{application?.title}
							</h1>
							<div className='text-gray-200 text-xl bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md prose w-full whitespace-normal break-words'>
								{application?.text}
							</div>
						</div>
					</div>
					<div className='shadow-lg mx-auto my-8 overflow-hidden w-full container'>
						<Comments comments={application?.comments} />
					</div>
				</>
			)}
		</>
	);
};
