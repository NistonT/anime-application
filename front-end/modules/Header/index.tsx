"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Transition } from "../Transition";
import { HeaderLinkIcon } from "./components/HeaderLinkIcon";
import { HeaderNavigation } from "./components/HeaderNavigation";
import style from "./header.module.scss";

export const Header = () => {
	const [isRouting, setIsRouting] = useState<boolean>(false);
	const [isActive, setIsActive] = useState("Home");
	const [prevPath, setPrevPath] = useState("/");

	const path = usePathname();

	useEffect(() => {
		if (prevPath !== path) {
			setIsRouting(true);
		}
	}, [path, prevPath]);

	useEffect(() => {
		if (isRouting) {
			setPrevPath(path);
			const timeout = setTimeout(() => {
				setIsRouting(false);
			}, 1200);

			return () => clearTimeout(timeout);
		}
	}, [isRouting]);
	return (
		<>
			<header className={style.header}>
				{isRouting && <Transition />}
				<AnimatePresence mode='wait'>
					<div className={style.wrapper}>
						<HeaderLinkIcon />
						<HeaderNavigation />
					</div>
					<div className={style.header_bg} />
				</AnimatePresence>
			</header>
		</>
	);
};
