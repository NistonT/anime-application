"use client";

import { UseFormCreatedApplication } from "../hooks/UseFormCreatedApplication";
import style from "./../main.module.scss";
import { AvatarFormInputAndButton } from "./AvatarFormInputAndButton";
import { ButtonForm } from "./ButtonForm";
import { TextFormTextarea } from "./TextFormTextarea";
import { TitleFormInput } from "./TitleFormInput";
import { UsernameFormInput } from "./UsernameFormInput";

export const MainFormCreatedApplicationPost = () => {
	const {
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
	} = UseFormCreatedApplication();

	return (
		<>
			<div className={style.form_wrapper}>
				<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
					<UsernameFormInput
						register={register}
						formState={formState}
						usernameForm={usernameForm}
						setUsernameForm={setUsernameForm}
					/>
					<AvatarFormInputAndButton
						register={register}
						formState={formState}
						avatarForm={avatarForm}
						setAvatarForm={setAvatarForm}
					/>
					<TitleFormInput
						register={register}
						formState={formState}
						titleForm={titleForm}
						setTitleForm={setTitleForm}
					/>
					<TextFormTextarea
						register={register}
						formState={formState}
						textForm={textForm}
						setTextForm={setTextForm}
					/>
					<ButtonForm />
				</form>
			</div>
		</>
	);
};
