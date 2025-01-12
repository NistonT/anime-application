import Link from "next/link";
import style from "./../application.module.scss";
import { DeleteButtonApplication } from "./DeleteButtonApplication";
import { UpdateButtonApplication } from "./UpdateButtonApplication";

type Props = {
	id: string;
	title: string;
	comments: string[];
	text: string;
};

export const TitleTextLink = ({ id, title, text, comments }: Props) => {
	return (
		<>
			<div className={style.title_text}>
				<h2 className={`${style.title} title-font`}>
					{title}
					<span className='text-sm text-gray-200 font-normal pl-2'>
						{comments.length} {comments.length <= 1 ? "Comment" : "Comments"}
					</span>
				</h2>

				<p className={style.text}>{text}</p>
				<div className='flex justify-end mt-4'>
					<Link href={`/applications/${id}`} className={style.link}>
						Перейти к посту
					</Link>
				</div>
				<div className='flex gap-2'>
					<DeleteButtonApplication id={id} />
					<UpdateButtonApplication id_application={id} />
				</div>
			</div>
		</>
	);
};
