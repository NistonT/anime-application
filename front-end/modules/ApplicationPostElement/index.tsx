"use client";

import imageUser from "@/public/icon/icon.jpg";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getIdApplication } from "./api/api";
import { Comments } from "./components/Comments";
import { FilteredComments } from "./components/FilteredComments";
import { FormComments } from "./components/FormComments";
import { useFilteredComment } from "./hook/hooks";
import style from "./post.module.scss";

export const ApplicationPostElement = () => {
	const param = useParams();

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["application", param.id],
		queryFn: async () => getIdApplication(param),
	});
	// Array.isArray(comments) && comments
	const {
		filteredComments,
		startDate,
		setStartDate,
		endDate,
		setEndDate,
		searchQuery,
		setSearchQuery,
	} = useFilteredComment(data);

	return (
		<>
			{isLoading ? (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-500 backdrop-blur-sm w-screen h-screen'>
					<div className='flex flex-col items-center justify-center  text-white p-8'>
						<Link href='/applications' className='btn btn-active btn-ghost'>
							<span className='relative text-xl'>Return</span>
						</Link>
						<span
							className='loading loading-infinity loading-lg'
							style={{ width: "200px", height: "200px" }}
						></span>
					</div>
				</div>
			) : (
				<>
					<div className={style.application_post}>
						<div className={style.wrapper}>
							<div className={style.icon}>
								<div className={style.image}>
									<Image
										className='rounded-full'
										src={imageUser}
										alt={`Avatar of ${data?.username}`}
										width={120}
										height={120}
										objectFit='cover'
										layout='fixed'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
									/>
								</div>
							</div>
							<div className={style.app_username}>
								<h2 className={style.username}>{data?.username}</h2>
							</div>
						</div>
						<div className={style.title_text}>
							<h1 className={style.title}>{data?.title}</h1>
							<div className={`${style.text} prose`}>{data?.text}</div>
						</div>
					</div>
					<div className={style.form_comments}>
						<FormComments id={param} />
						<FilteredComments
							startDate={startDate}
							setStartDate={setStartDate}
							endDate={endDate}
							setEndDate={setEndDate}
							searchQuery={searchQuery}
							setSearchQuery={setSearchQuery}
						/>
						<Comments comments={filteredComments} id_data={data?.id} />
					</div>
				</>
			)}
		</>
	);
};
