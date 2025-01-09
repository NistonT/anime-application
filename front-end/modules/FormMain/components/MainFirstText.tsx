import style from "./../main.module.scss";

export const MainFirstText = () => {
	return (
		<>
			<div className={style.first_text}>
				<h1 className={style.title}>
					<span className='italic'>О</span>ставить
					<span className='ml-1'> заявку</span>
				</h1>
				<p className={style.text}>
					<span className='relative inline-block'>Поделитесь своим</span>
					<span className='relative inline-block ml-1 font-semibold'>
						мнением
					</span>
				</p>
			</div>
		</>
	);
};
