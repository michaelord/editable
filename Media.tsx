import * as React from 'react';

import {Video, Img} from './';

export type MediaProps = {
	src?: string;
	width?: number;
	height?: number;
	alt?: string;
	type?: string;
};

export const Media = (props: MediaProps) => {
	const {src, type = 'image'} = props;

	if (!src) {
		return null;
	}

	const isImage = type === 'image';

	if (isImage) {
		return <Img src={src} />;
	}

	return <Video src={src} />;
};
