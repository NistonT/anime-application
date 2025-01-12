import { motion } from "framer-motion";

export const Transition = () => {
	const petalVariants = {
		initial: {
			x: 0,
			y: 0,
			opacity: 0,
			scale: 0.5,
			rotate: 0,
		},
		animate: (i: number) => ({
			x: [0, Math.random() * 400 - 200],
			y: [0, Math.random() * 400 - 200],
			opacity: [0, 1],
			scale: [0.5, 1],
			rotate: [0, Math.random() * 360],
			transition: {
				delay: i * 0.05,
				duration: 0.8,
				ease: "easeOut",
			},
		}),
		exit: (i: number) => ({
			x: [Math.random() * 200 - 100, -150],
			y: [Math.random() * 200 - 100, -150],
			opacity: 0,
			scale: 0,
			rotate: -Math.random() * 360,
			transition: {
				delay: i * 0.03,
				duration: 0.8,
				ease: "easeIn",
			},
		}),
	};

	const textVariants = {
		initial: {
			opacity: 0,
			scale: 0.5,
		},
		animate: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.8,
				duration: 0.6,
			},
		},
		exit: {
			opacity: 0,
			scale: 0,
			transition: {
				duration: 0.4,
				ease: "easeIn",
			},
		},
	};

	const petals = Array.from({ length: 20 }, (_, i) => i);

	return (
		<div className='fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200'>
			{petals.map(i => (
				<motion.div
					key={i}
					className='absolute w-8 h-8 transform '
					variants={petalVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					custom={i}
				>
					<div className='relative w-full h-full'>
						<div
							className='absolute inset-0  rounded-full'
							style={{
								clipPath:
									"polygon(50% 0%, 90% 30%, 100% 80%, 75% 100%, 25% 100%, 0% 80%, 10% 30%)",
								backgroundColor: `hsl(${Math.random() * 30 + 330}, 100%, 80%)`,
							}}
						/>
						<div
							className='absolute inset-0  rounded-full transform rotate-45'
							style={{
								clipPath:
									"polygon(50% 0%, 90% 30%, 100% 80%, 75% 100%, 25% 100%, 0% 80%, 10% 30%)",
								backgroundColor: `hsl(${Math.random() * 30 + 330}, 100%, 70%)`,
							}}
						/>
					</div>
				</motion.div>
			))}
			<motion.h1
				className='text-7xl font-bold text-pink-800 drop-shadow-lg tracking-wide   relative z-10 transition-colors duration-300'
				variants={textVariants}
				initial='initial'
				animate='animate'
				exit='exit'
			>
				<motion.span
					className='font-normal italic'
					variants={textVariants}
					initial='initial'
					animate='animate'
					exit='exit'
				>
					A
				</motion.span>
				Anime
			</motion.h1>
		</div>
	);
};
