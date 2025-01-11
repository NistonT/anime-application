"use client";

import { QueryClient, useMutation } from "@tanstack/react-query";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { postAddComment } from "../api/api";
import { IComments } from "../type/type";
import style from "./../post.module.scss";

type Props = {
	id: Params;
};

export const FormComments = ({ id }: Props) => {
	const { register, handleSubmit, reset } = useForm<IComments>();
	const queryClient = new QueryClient();
	const router = useRouter();

	const { mutate: addCommentMutation, isLoading } = useMutation({
		mutationFn: (data: IComments) => postAddComment(id, data),
		onMutate: async (newComment: IComments) => {
			await queryClient.cancelQueries({ queryKey: ["postComments", id] });
			const previousComments = queryClient.getQueryData(["postComments", id]);
			const newCommentWithId = { ...newComment, id: uuidv4() };
			queryClient.setQueryData(
				["postComments", id],
				(old: IComments[] | undefined) => {
					return old ? [...old, newCommentWithId] : [newCommentWithId];
				}
			);
			return { previousComments };
		},
		onError(error, variables, context) {
			queryClient.setQueryData(["postComments", id], context?.previousComments);
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["postComments", id] });
			reset();
			location.reload();
		},
	});

	const onSubmit: SubmitHandler<IComments> = useCallback(
		async (data: IComments) => {
			await addCommentMutation(data);
		},
		[addCommentMutation]
	);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<div className={style.wrapper}>
				<div className={style.avatar}>
					<input
						{...register("avatar", { required: true })}
						placeholder='Avatar(Base64)'
						type='text'
						className={`${style.avatar_input}  group-hover:bg-pink-50`}
					/>
				</div>
				<h2 className={style.username}>
					<input
						{...register("username", { required: true })}
						placeholder='Username'
						type='text'
						className={`${style.username_input} group-hover:bg-pink-50`}
					/>
				</h2>
				<p className={style.date}>
					{new Date().toLocaleDateString("en-US", {
						year: "numeric",
						month: "short",
						day: "numeric",
					})}
				</p>
			</div>
			<div className={style.wrapper_text}>
				<textarea
					{...register("text", { required: true })}
					className={style.text}
					placeholder='Write your comment here...'
					rows={3}
				/>
				<div className={style.button_wrapper}>
					<button type='submit' className={style.button}>
						Send
					</button>
				</div>
			</div>
		</form>
	);
};
