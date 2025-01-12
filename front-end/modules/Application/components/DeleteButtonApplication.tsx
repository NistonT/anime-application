import { deleteApplication } from "../api/api";

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
				className='px-4 py-2 font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'
			>
				Delete
			</button>
		</>
	);
};
