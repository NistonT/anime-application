import style from "./../main.module.scss";

type Props = {
	register: any;
	formState: any;
	titleForm: any;
	setTitleForm: any;
};

export const TitleFormInput = ({
	register,
	formState,
	titleForm,
	setTitleForm,
}: Props) => {
	return (
		<>
			<div className='p-2 w-full'>
				<div className='relative group'>
					<label htmlFor='title' className={style.form_input_wrapper_label}>
						Title
					</label>
					<input
						type='text'
						id='title'
						{...register("title", {
							required: "This field is required",
						})}
						onChange={event => setTitleForm(event.target.value)}
						value={titleForm}
						className={style.form_input}
					/>
					{formState.errors["title"]?.message && (
						<p className='text-pink-500 mt-1 text-sm'>This field is required</p>
					)}
				</div>
			</div>
		</>
	);
};
