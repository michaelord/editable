import React, {memo} from 'react';
import './Video.scss';

import * as Types from 'components/types';

export type VideoProps = {
	src?: string;
};

export const Video = memo((props: VideoProps) => {
	const {src} = props;

	if (!src) {
		return null;
	}

	return <video autoPlay loop muted src={src} />;
});
