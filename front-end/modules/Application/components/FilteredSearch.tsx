"use client";
import style from "./../application.module.scss";

type Props = {
	startDate: string;
	setStartDate: (value: string) => void;
	endDate: string;
	setEndDate: (value: string) => void;
	searchQuery: string;
	setSearchQuery: (value: string) => void;
};

export const FilteredSearch = ({
	startDate,
	setStartDate,
	endDate,
	setEndDate,
	searchQuery,
	setSearchQuery,
}: Props) => {
	return (
		<>
			<div className={style.filtered}>
				<div className={style.wrapper_filter}>
					<input
						type='date'
						className={style.date_filter}
						placeholder='Start date'
						value={startDate}
						onChange={event => setStartDate(event.target.value)}
					/>
					<input
						type='date'
						className={style.date_filter}
						placeholder='End date'
						value={endDate}
						onChange={event => setEndDate(event.target.value)}
					/>
				</div>
				<input
					type='text'
					className={style.search_filter}
					placeholder='Search...'
					value={searchQuery}
					onChange={event => setSearchQuery(event.target.value)}
				/>
			</div>
		</>
	);
};
