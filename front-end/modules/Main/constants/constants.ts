import { IImages } from "../type/type";

import image_1 from "@/public/image/image_1.png";
import image_2 from "@/public/image/image_2.jpg";
import image_3 from "@/public/image/image_3.jpg";
import image_4 from "@/public/image/image_4.jpg";
import image_5 from "@/public/image/image_5.jpg";
import image_6 from "@/public/image/image_6.jpg";

export const images: IImages[][] = [
	[
		{ img: image_1, style: "w-1/2" },
		{ img: image_2, style: "w-1/2" },
		{ img: image_3, style: "w-full" },
	],
	[
		{ img: image_4, style: "w-full" },
		{ img: image_5, style: "w-1/2" },
		{ img: image_6, style: "w-1/2" },
	],
];
