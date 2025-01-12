import icon from "@/public/icon/icon.jpg";
import Image from "next/image";

export const Footer = () => {
	return (
		<>
			<footer className='bg-transparent from-pink-500 to-purple-500 text-white body-font py-8'>
				<div className='container px-5 mx-auto flex items-center sm:flex-row flex-col justify-between'>
					<a className='flex title-font font-medium items-center justify-center text-white  hover:text-yellow-300 transition-colors duration-300'>
						<Image
							src={icon}
							alt='icon'
							className='drop-shadow-md w-14 h-14 rounded-full block'
						/>
						<span className='text-2xl font-bold tracking-wide   relative z-10 transition-colors duration-300'>
							<span className='font-normal italic'>A</span>
							Anime
						</span>
					</a>
					<p className='text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4  drop-shadow-md'>
						© 2025 NistonT —
						<a
							href='https://github.com/NistonT'
							className='ml-1 hover:text-yellow-300 transition-colors duration-300 drop-shadow-md'
							rel='noopener noreferrer'
							target='_blank'
						>
							@niston
						</a>
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'></span>
				</div>
			</footer>
		</>
	);
};
