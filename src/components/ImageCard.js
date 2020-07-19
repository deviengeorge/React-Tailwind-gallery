import React, { useState } from 'react';

import copy from 'copy-to-clipboard';

const ImageCard = ({ image }) => {
	const [buttonText, setButtonText] = useState(
		'Copy Link To Clipboard'
	);
	const [active, setActive] = useState('bg-blue-500');
	const tags = image.tags.split(',');

	const copyToClipboard = () => {
		copy(image.largeImageURL);
		setButtonText('Copied To Clipboard');
		setActive('bg-blue-600');
		setTimeout(() => {
			setButtonText('Copy Link To Clipboard');
			setActive('bg-blue-500');
		}, 3000);
	};

	return (
		<div className='max-w-sm rounded-lg overflow-hidden shadow-xl relative bg-white sm:mx-auto md:mx-0'>
			<img
				src={image.webformatURL}
				alt=''
				className='w-full h-56 object-cover'
			/>
			<div className='pb-2 pt-4 px-6'>
				<div className='font-bold text-purple-500 text-xl mb-2'>
					Photo by <a href={image.pageURL}>{image.user}</a>
				</div>
				<ul>
					<li>
						<strong>Views: </strong>
						{image.views}
					</li>
					<li>
						<strong>Downloads: </strong>
						{image.downloads}
					</li>
					<li>
						<strong>Likes: </strong>
						{image.likes}
					</li>
				</ul>
			</div>
			<div className='flex justify-center px-6 mb-16'>
				{tags.map((tag) => (
					<span
						key={tag}
						className='block bg-gray-200 hover:bg-gray-300 cursor-default rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2 whitespace-no-wrap'
					>
						#{tag}
					</span>
				))}
			</div>
			<button
				className={
					active +
					' w-full hover:bg-blue-600 py-4 text-white absolute bottom-0 outline-none focus:outline-none'
				}
				onClick={copyToClipboard}
			>
				{buttonText}
			</button>
		</div>
	);
};

export default ImageCard;
