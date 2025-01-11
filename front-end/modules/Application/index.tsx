import style from "./application.module.scss";
import { ApplicationMapElement } from "./components/ApplicationMapElements";

export const Application = () => {
	return (
		<>
			<section className={`${style.application} body-font`}>
				<div className={style.wrapper}>
					<div className={style.application_map}>
						<ApplicationMapElement />
					</div>
				</div>
			</section>
		</>
	);
};
