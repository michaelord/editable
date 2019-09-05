import * as React from 'react';

export type ImgProps = {
	src?: string;
	width?: number;
	height?: number;
	alt?: string;
};

export const Img = (props: ImgProps) => {
	const {src, width, height} = props;

	if (!src) {
		return null;
	}

	return <img src={src} width={width} height={height} />;
};
