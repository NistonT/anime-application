import { IComments } from "../type/type";

import imageUser from "@/public/icon/icon.jpg";
import Image from "next/image";
import style from "./../post.module.scss";
import { DeleteCommentForm } from "./DeleteCommentForm";
import { UpdateCommentForm } from "./UpdateCommentForm";

type Props = {
	comments: IComments | IComments[] | undefined;
	id_data: string | undefined;
};

export const Comments = ({ comments, id_data }: Props) => {
	return (
		<>
			{Array.isArray(comments) &&
				comments.map(comment => (
					<div key={comment.id} className={style.comments}>
						<div className={style.wrapper}>
							<div className={style.image}>
								<Image
									className='rounded-full'
									src={imageUser}
									alt={`Avatar of ${comment?.username}`}
									width={120}
									height={120}
									objectFit='cover'
									layout='fixed'
									placeholder='blur'
									blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
								/>
							</div>
							<h2 className={style.username}>{comment?.username}</h2>
							<p className={style.date}>
								{comment?.CreatedAt
									? new Date(comment.CreatedAt).toLocaleDateString("en-US", {
											year: "numeric",
											month: "short",
											day: "numeric",
									  })
									: "N/A"}
							</p>
						</div>
						<div className={style.wrapper_text}>
							<p className={style.text}>{comment?.text}</p>
						</div>

						<div className={style.wrapper_button}>
							<DeleteCommentForm id_data={id_data} id_comment={comment.id} />
							<UpdateCommentForm id_data={id_data} id_comment={comment.id} />
						</div>
					</div>
				))}
		</>
	);
};
