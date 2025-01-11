export interface IGetIdApplication {
	id: string;
	username: string;
	avatar: string;
	title: string;
	text: string;
	CreatedAt: string;
	UpdatedAt: string;
	comments: IComments[] | undefined;
}

export interface IComments {
	id: string;
	username: string;
	avatar: string;
	text: string;
	comment_id: string;
	CreatedAt: string | undefined;
	UpdatedAt: string | undefined;
}

export interface ICommentsUpdate {
	username: string | undefined;
	avatar: string | undefined;
	text: string | undefined;
}

export interface ICommentUpdateAPI {
	id_data: string | undefined;
	id_comment: string | undefined;
	data: ICommentsUpdate;
}

export interface IDeleteComment {
	id_data: string | undefined;
	id_comment: string | undefined;
}
