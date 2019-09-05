import * as React from 'react';

import './Figure.scss';

import {Img, ImgProps} from './';

export type FigureProps = {
	image?: ImgProps;
	caption?: string;
	className?: string;
};

export const Figure = (props: FigureProps) => {
	const base = 'figure';

	const {image, caption, className = ''} = props;

	return (
		<figure className={`${base} ${className}`}>
			<Img {...image} />
			{caption && <figcaption dangerouslySetInnerHTML={{__html: caption}} />}
		</figure>
	);
};
