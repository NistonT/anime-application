import style from "./../main.module.scss";

export const MainTitle = () => {
	return (
		<>
			<div className={style.general_title}>
				<h1 className={style.title}>
					<span>
						A<span className='inline-block'>n</span>i
						<span className='inline-block'>m</span>e
					</span>
				</h1>
				<p className={style.text}>
					Share your
					<span className={style.span}>ANIME!!!</span>
					requests.
				</p>
			</div>
		</>
	);
};
