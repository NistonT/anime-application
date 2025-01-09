import icon from "@/public/icon/icon.jpg";
import Image from "next/image";
import Link from "next/link";
import style from "./../header.module.scss";

export const HeaderLinkIcon = () => {
	return (
		<>
			<Link href='/' className={`${style.icon_link} group`}>
				<div className={style.icon_wrapper}>
					<Image src={icon} alt='icon' className={style.icon_image} />
					<div
						className={`absolute inset-0 bg-gradient-to-br from-[#33d780] to-blue-500 opacity-0  group-hover:opacity-50  transition-all duration-300  blur-lg`}
					/>
				</div>
				<span
					className={`${style.icon_text} group-hover:text-white from-red-500 to-purple-500`}
				>
					<span className={style.icon_span}>A</span>Anime
				</span>
			</Link>
		</>
	);
};
