import { ApplicationMapElement } from "./components/ApplicationMapElements";

export const Application = () => {
	return (
		<>
			<section className='text-gray-400 body-font overflow-hidden'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='-my-8 divide-y-2 divide-gray-800 flex flex-col gap-5'>
						<ApplicationMapElement />
					</div>
				</div>
			</section>
		</>
	);
};
