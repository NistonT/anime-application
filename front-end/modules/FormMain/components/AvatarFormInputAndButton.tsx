import style from "./../main.module.scss";

type Props = {
	register: any;
	formState: any;
	avatarForm: any;
	setAvatarForm: any;
};

export const AvatarFormInputAndButton = ({
	register,
	formState,
	avatarForm,
	setAvatarForm,
}: Props) => {
	return (
		<>
			<div className='p-2 w-1/2'>
				<div className='relative group'>
					<label htmlFor='avatar' className={style.form_input_wrapper_label}>
						Avatar
					</label>
					<div className='flex items-center'>
						<input
							type='text'
							id='avatar'
							placeholder='BASE64 format'
							{...register("avatar", {
								required: "This field is required",
							})}
							value={avatarForm}
							onChange={event => setAvatarForm(event.target.value)}
							className={style.form_input}
						/>
						<button
							type='button'
							onClick={event => {
								event.preventDefault();
								setAvatarForm("");
							}}
							className={style.form_button_avatar}
						>
							Clear
						</button>
					</div>
					{formState.errors["avatar"]?.message && (
						<p className='text-pink-500 mt-1 text-sm'>This field is required</p>
					)}
				</div>
			</div>
		</>
	);
};
