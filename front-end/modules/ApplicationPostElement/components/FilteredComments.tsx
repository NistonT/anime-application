type Props = {
	startDate: string;
	setStartDate: (value: string) => void;
	endDate: string;
	setEndDate: (value: string) => void;
	searchQuery: string;
	setSearchQuery: (value: string) => void;
};

export const FilteredComments = ({
	startDate,
	setStartDate,
	endDate,
	setEndDate,
	searchQuery,
	setSearchQuery,
}: Props) => {
	return (
		<>
			<div className='flex mb-4 justify-between text-black'>
				<div className='flex gap-2'>
					<input
						type='date'
						className="p-2 rounded-xl border-2 border-pink-400 bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300  drop-shadow-md font-['Permanent_Marker'"
						placeholder='Start date'
						value={startDate}
						onChange={event => setStartDate(event.target.value)}
					/>
					<input
						type='date'
						className="p-2 rounded-xl border-2 border-pink-400 bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300 drop-shadow-md font-['Permanent_Marker']"
						placeholder='End date'
						value={endDate}
						onChange={event => setStartDate(event.target.value)}
					/>
				</div>
				<input
					type='text'
					className="p-2 rounded-xl border-2 border-pink-400 bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300 drop-shadow-md font-['Permanent_Marker']"
					placeholder='Search...'
					value={searchQuery}
					onChange={event => setSearchQuery(event.target.value)}
				/>
			</div>
		</>
	);
};
