import style from "./../main.module.scss";

export const MainFirstText = () => {
	return (
		<>
			<div className={style.first_text}>
				<h1 className={style.title}>
					<span className='italic'>Leave</span> a
					<span className='ml-1'> request</span>
				</h1>
				<p className={style.text}>
					<span className='relative inline-block'>Share your</span>
					<span className='relative inline-block ml-1 font-semibold'>
						opinion
					</span>
				</p>
			</div>
		</>
	);
};
