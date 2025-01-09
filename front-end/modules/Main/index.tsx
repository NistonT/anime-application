import { MainImages } from "./components/MainImages";
import { MainTitle } from "./components/MainTitle";
import style from "./main.module.scss";

export const Main = () => {
	return (
		<>
			<section className={style.main}>
				<div className={style.wrapper}>
					<MainTitle />
					<MainImages />
				</div>
			</section>
		</>
	);
};
