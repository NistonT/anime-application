"use client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateComment } from "../api/api";
import { ICommentsUpdate, ICommentUpdateAPI } from "../type/type";
import style from "./../post.module.scss";

type Props = {
	id_data: string | undefined;
	id_comment: string | undefined;
};

export const UpdateCommentForm = ({ id_data, id_comment }: Props) => {
	const [isModal, setIsModal] = useState<boolean>(false);
	const { register, reset, handleSubmit } = useForm<ICommentsUpdate>();

	const handlerSubmitIsModal = (event: React.MouseEvent<HTMLButtonElement>) => {
		setIsModal(!isModal);
	};

	const { mutate: handlerMutateUpdateQuery } = useMutation({
		mutationFn: ({ id_data, id_comment, data }: ICommentUpdateAPI) =>
			UpdateComment({ id_data, id_comment, data }),
		onSuccess: () => setIsModal(false),
	});

	const onSubmit: SubmitHandler<ICommentsUpdate> = data => {
		handlerMutateUpdateQuery({ id_data, id_comment, data });
		reset();
		location.reload();
	};

	return (
		<>
			<div>
				<button
					type='button'
					className={style.update}
					onClick={handlerSubmitIsModal}
				>
					UPDATE
				</button>
			</div>

			{isModal && (
				<div className={style.modal_wrapper}>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={`relative bg-gradient-to-br from-pink-200 to-pink-500 rounded-3xl p-8 shadow-2xl w-full max-w-md border-2 border-pink-300`}
						style={{ backgroundColor: "#fff", border: "2px solid #FFB6C1" }}
					>
						<h2 className={style.title}>Edit Comment</h2>
						<h2 className={style.name}>Username</h2>
						<input
							{...register("username", { required: true })}
							type='text'
							placeholder='Username'
							className={style.input}
						/>
						<h2 className={style.name}>Avatar</h2>
						<input
							{...register("avatar", { required: true })}
							type='text'
							placeholder='Avatar'
							className={style.input}
						/>
						<h2 className={style.name}>Text</h2>
						<input
							{...register("text", { required: true })}
							type='text'
							placeholder='Text'
							className={style.input}
						/>
						<div className={style.button_s_c}>
							<button className={style.save}>Save</button>
							<button onClick={handlerSubmitIsModal} className={style.cancel}>
								Cancel
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};
