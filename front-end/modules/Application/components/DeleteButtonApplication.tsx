import { deleteApplication } from "../api/api";
import style from "./../application.module.scss";

type Props = {
	id: string;
};

export const DeleteButtonApplication = ({ id }: Props) => {
	const handlerApplicationDelete = () => {
		deleteApplication(id);
		location.reload();
	};

	return (
		<>
			<button
				onClick={handlerApplicationDelete}
				type='button'
				className={style.delete}
			>
				Delete
			</button>
		</>
	);
};
