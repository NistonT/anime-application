import style from "./../main.module.scss";

type Props = {
	register: any;
	formState: any;
	textForm: any;
	setTextForm: any;
};

export const TextFormTextarea = ({
	register,
	formState,
	textForm,
	setTextForm,
}: Props) => {
	return (
		<>
			<div className='p-2 w-full'>
				<div className='relative group'>
					<label htmlFor='text' className={style.form_input_wrapper_label}>
						Text
					</label>
					<textarea
						id='text'
						{...register("text", {
							required: "This field is required",
						})}
						onChange={event => setTextForm(event.target.value)}
						value={textForm}
						className={style.form_text_input}
					></textarea>
					{formState.errors["text"]?.message && (
						<p className='text-pink-500 mt-1 text-sm'>This field is required</p>
					)}
				</div>
			</div>
		</>
	);
};
