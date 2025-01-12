export interface IApplications {
	id: string;
	username: string;
	avatar: string;
	title: string;
	text: string;
	comments: string[];
	CreatedAt: string;
	UpdatedAt: string;
}

export interface IApplicationUpdate {
	username: string;
	avatar: string;
	title: string;
	text: string;
}

export interface IApplicationUpdateApi {
	id_application: string;
	data: IApplicationUpdate;
}
