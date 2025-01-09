import style from "./../main.module.scss";

export const ButtonForm = () => {
	return (
		<>
			<div className='p-2 w-full'>
				<input type='submit' className={style.form_button} value='Send' />
			</div>
		</>
	);
};
