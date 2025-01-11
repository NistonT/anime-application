import imageUser from "@/public/icon/icon.jpg";
import Image from "next/image";
import style from "./../application.module.scss";

type Props = {
	username: string;
	createdAt: string;
};

export const ImageUsername = ({ username, createdAt }: Props) => {
	return (
		<>
			<div className={style.image_username}>
				<div className={style.image}>
					<Image
						className='rounded-full'
						src={imageUser}
						alt={`Avatar of ${username}`}
						width={120}
						height={120}
						objectFit='cover'
						layout='fixed'
						placeholder='blur'
						blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
					/>
				</div>
				<h2 className={style.username}>{username}</h2>
				<p className={style.date}>
					{new Date(createdAt).toLocaleDateString("en-US", {
						year: "numeric",
						month: "short",
						day: "numeric",
					})}
				</p>
			</div>
		</>
	);
};
