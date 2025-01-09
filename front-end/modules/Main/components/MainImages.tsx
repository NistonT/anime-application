import Image from "next/image";
import { images } from "../constants/constants";

export const MainImages = () => {
	return (
		<>
			<div className='flex flex-wrap md:-m-2 -m-1'>
				{images.map((row, index) => (
					<div key={index} className='flex flex-wrap w-1/2'>
						{row.map((image, i) => (
							<div className={`md:p-2 p-1 ${image.style}`}>
								<Image
									alt='gallery'
									className='w-full object-cover h-full object-center block rounded-3xl'
									src={image.img}
								/>
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
};
