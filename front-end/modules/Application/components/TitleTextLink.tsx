import Link from "next/link";
import style from "./../application.module.scss";

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
			</div>
		</>
	);
};
