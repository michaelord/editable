import React, {memo} from 'react';
import {Img, Video} from 'components/media';

import * as Types from 'components/types';

export type MediaProps = {
	src?: string;
	width?: number;
	height?: number;
	alt?: string;
	type?: 'image' | 'video';
};

export const Media = memo((props: MediaProps) => {
	const {src, type = 'image'} = props;

	if (!src) {
		return null;
	}

	const isImage = type === 'image';

	if (isImage) {
		return <Img src={src} />;
	}

	return <Video src={src} />;
});
