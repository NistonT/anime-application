import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateApplication } from "../api/api";
import { IApplicationUpdate, IApplicationUpdateApi } from "../type/type";

type Props = {
	id_application: string;
};

export const UpdateButtonApplication = ({ id_application }: Props) => {
	const [isModal, setIsModal] = useState<boolean>(false);

	const { register, reset, handleSubmit } = useForm<IApplicationUpdate>();

	const { mutate: handlerMutation } = useMutation({
		mutationFn: ({ id_application, data }: IApplicationUpdateApi) =>
			updateApplication({ id_application, data }),
		onSuccess: () => console.log("ok"),
		onError: error => console.log(error),
	});

	const handlerIsModal = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setIsModal(!isModal);
	};

	const onSubmit: SubmitHandler<IApplicationUpdate> = async data => {
		handlerMutation({ id_application, data });
		reset();
		location.reload();
	};

	return (
		<>
			<button
				onClick={handlerIsModal}
				type='button'
				className='px-4 py-2 font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'
			>
				Update
			</button>

			{isModal && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm'>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='relative bg-gradient-to-br from-pink-200 to-pink-500 rounded-3xl p-8 shadow-2xl w-full max-w-md border-2 border-pink-300'
						style={{ backgroundColor: "#fff", border: "2px solid #FFB6C1" }}
					>
						<h2 className='text-2xl font-bold mb-4 text-gray-800 text-center'>
							Edit Application
						</h2>
						<h2 className='text-xl font-semibold mb-4 text-gray-800'>
							Username
						</h2>
						<input
							{...register("username", { required: true })}
							type='text'
							placeholder='username'
							className="w-full p-3 rounded-xl mb-4 bg-pink-50 border-2 border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300 text-gray-800 font-['Permanent_Marker'] placeholder:font-['Permanent_Marker'] hover:border-pink-500"
						/>
						<h2 className='text-xl font-semibold mb-4 text-gray-800'>Avatar</h2>
						<input
							{...register("avatar", { required: true })}
							type='text'
							placeholder='avatar'
							className="w-full p-3 rounded-xl mb-4 bg-pink-50 border-2 border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300 text-gray-800 font-['Permanent_Marker'] placeholder:font-['Permanent_Marker'] hover:border-pink-500"
						/>
						<h2 className='text-xl font-semibold mb-4 text-gray-800'>Title</h2>

						<input
							{...register("title", { required: true })}
							type='text'
							placeholder='title'
							className="w-full p-3 rounded-xl mb-4 bg-pink-50  border-2 border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300 text-gray-800 font-['Permanent_Marker'] placeholder:font-['Permanent_Marker'] hover:border-pink-500"
						/>
						<h2 className='text-xl font-semibold mb-4 text-gray-800'>Text</h2>
						<input
							{...register("text", { required: true })}
							type='text'
							placeholder='text'
							className="w-full p-3 rounded-xl mb-4 bg-pink-50 border-2 border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300 text-gray-800 font-['Permanent_Marker'] placeholder:font-['Permanent_Marker'] hover:border-pink-500"
						/>
						<div className='flex justify-end gap-2'>
							<button
								type='submit'
								className='px-6 py-3 bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 font-semibold'
							>
								Save
							</button>
							<button
								onClick={handlerIsModal}
								className='px-6 py-3 bg-gray-300 text-gray-800 rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 font-semibold'
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};
