"use client";

import imageUser from "@/public/icon/icon.jpg";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { getIdApplication } from "./api/api";
import { Comments } from "./components/Comments";
import { FormComments } from "./components/FormComments";
import style from "./post.module.scss";

export const ApplicationPostElement = () => {
	const param = useParams();

	// const [application, setApplication] = useState<IGetIdApplication | null>(
	// 	null
	// );
	// const [isLoadingState, setIdLoadingState] = useState<boolean>(true);

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["application", param.id],
		queryFn: async () => getIdApplication(param),
	});

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<>
			{isLoading ? (
				<div className={style.loading}>
					<Link href='/applications'>Вернуться</Link> Loading...
				</div>
			) : (
				<>
					<Link href='/applications'>Вернуться</Link>

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
						<Comments comments={data?.comments} />
					</div>
				</>
			)}
		</>
	);
};
