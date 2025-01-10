import { IComments } from "../type/type";

import imageUser from "@/public/icon/icon.jpg";
import Image from "next/image";

type Props = {
	comments: IComments | IComments[] | undefined;
};

export const Comments = ({ comments }: Props) => {
	return (
		<>
			{Array.isArray(comments) &&
				comments.map(comment => (
					<div
						key={comment.id}
						className='py-4 p-4 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap rounded-3xl bg-gradient-to-br from-pink-400 to-purple-600 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out container'
					>
						<div className='flex-shrink-0 flex flex-col items-center px-6'>
							<div className='relative rounded-full overflow-hidden border-2 border-white shadow-md'>
								<Image
									className='rounded-full'
									src={imageUser}
									alt={`Avatar of ${comment?.username}`}
									width={120}
									height={120}
									objectFit='cover'
									layout='fixed'
									placeholder='blur'
									blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
								/>
							</div>
							<h2 className='mt-2 text-center text-fuchsia-900 text-lg font-semibold max-w-[100px] truncate overflow-hidden'>
								{comment?.username}
							</h2>
							<p className='text-center text-gray-300 text-sm'>
								{comment?.CreatedAt
									? new Date(comment.CreatedAt).toLocaleDateString("en-US", {
											year: "numeric",
											month: "short",
											day: "numeric",
									  })
									: "N/A"}
							</p>
						</div>
						<div className='md:flex-grow p-4'>
							<p className='leading-relaxed bg-white text-black p-4 rounded-lg shadow-md text-sm max-w-6xl truncate overflow-hidden'>
								{comment?.text}
							</p>
						</div>
					</div>
				))}
		</>
	);
};
