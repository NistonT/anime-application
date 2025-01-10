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
