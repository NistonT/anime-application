import style from "./../main.module.scss";

type Props = {
	register: any;
	formState: any;
	usernameForm: any;
	setUsernameForm: any;
};

export const UsernameFormInput = ({
	register,
	formState,
	usernameForm,
	setUsernameForm,
}: Props) => {
	return (
		<>
			<div className='p-2 w-1/2'>
				<div className='relative group'>
					<label htmlFor='username' className={style.form_input_wrapper_label}>
						Username
					</label>
					<input
						type='text'
						id='username'
						{...register("username", {
							required: true,
						})}
						onChange={event => setUsernameForm(event.target.value)}
						value={usernameForm}
						className={style.form_input}
					/>
					{formState.errors["username"]?.message && (
						<p className='text-pink-500 mt-1 text-sm'>This field is required</p>
					)}
				</div>
			</div>
		</>
	);
};
