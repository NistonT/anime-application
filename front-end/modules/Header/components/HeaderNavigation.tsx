import Link from "next/link";
import { navLinks } from "../constants/constants";
import style from "./../header.module.scss";

export const HeaderNavigation = () => {
	return (
		<>
			<div className={style.header_flex}></div>
			<nav className={style.header_nav}>
				{navLinks.map(link => (
					<Link href={link.href} className={`${style.header_link} group`}>
						<span className={`${style.link} group-hover:text-white`}>
							{link.name}
						</span>
						<span className={`${style.active_link} group-hover:opacity-50`}>
							{link.name}
						</span>
					</Link>
				))}
			</nav>
		</>
	);
};
