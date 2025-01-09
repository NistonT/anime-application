import { MainFirstText } from "./components/MainFirstText";
import { MainFormCreatedApplicationPost } from "./components/MainFormCreatedApplicationPost";
import style from "./main.module.scss";
// username String
// avatar   String
// title    String
// text     String
// pink fiol format

export const FormMain = () => {
	return (
		<>
			<section className={style.main}>
				<div className={style.wrapper}>
					<MainFirstText />
					<MainFormCreatedApplicationPost />
				</div>
			</section>
		</>
	);
};
