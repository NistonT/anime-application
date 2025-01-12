import { useMutation } from "@tanstack/react-query";
import { DeleteComment } from "../api/api";
import { IDeleteComment } from "../type/type";

import style from "./../post.module.scss";

type Props = {
	id_data: string | undefined;
	id_comment: string | undefined;
};

export const DeleteCommentForm = ({ id_data, id_comment }: Props) => {
	const deleteCommentMutation = useMutation({
		mutationFn: ({ id_data, id_comment }: IDeleteComment) =>
			DeleteComment({ id_data, id_comment }),
		onSuccess: () => {
			console.log("Комментарий удален");
		},
		onError: error => {
			console.log(error);
		},
	});

	const handlerSubmitDelete = () => {
		deleteCommentMutation.mutate({ id_data, id_comment });
		location.reload();
	};

	return (
		<div>
			<button
				onClick={handlerSubmitDelete}
				type='button'
				className={style.delete}
			>
				DELETE
			</button>
		</div>
	);
};
