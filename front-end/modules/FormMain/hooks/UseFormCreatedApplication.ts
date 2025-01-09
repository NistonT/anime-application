import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createdApplicationPost } from "../api/api";
import { IFormDataCreatedApplication } from "../type/type";

export const UseFormCreatedApplication = () => {
	const [avatarForm, setAvatarForm] = useState<string>("");
	const [usernameForm, setUsernameForm] = useState<string>("");
	const [titleForm, setTitleForm] = useState<string>("");
	const [textForm, setTextForm] = useState<string>("");

	const { register, handleSubmit, formState } =
		useForm<IFormDataCreatedApplication>({
			mode: "onChange",
		});

	const onSubmit: SubmitHandler<IFormDataCreatedApplication> = data => {
		createdApplicationPost(data);
		setAvatarForm("");
		setUsernameForm("");
		setTitleForm("");
		setTextForm("");
	};

	return {
		avatarForm,
		setAvatarForm,
		usernameForm,
		setUsernameForm,
		titleForm,
		setTitleForm,
		textForm,
		setTextForm,
		register,
		handleSubmit,
		formState,
		onSubmit,
	};
};
