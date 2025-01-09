import { HeaderLinkIcon } from "./components/HeaderLinkIcon";
import { HeaderNavigation } from "./components/HeaderNavigation";
import style from "./header.module.scss";

export const Header = () => {
	return (
		<>
			<header className={style.header}>
				<div className={style.wrapper}>
					<HeaderLinkIcon />
					<HeaderNavigation />
				</div>
				<div className={style.header_bg} />
			</header>
		</>
	);
};
