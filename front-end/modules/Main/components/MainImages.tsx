"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { images } from "../constants/constants";

export const MainImages = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			easing: "ease",
		});
	}, []);

	return (
		<>
			<div className='flex flex-wrap md:-m-2 -m-1'>
				{images.map((row, index) => (
					<div key={index} className='flex flex-wrap w-1/2' data-aos='fade-up'>
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
