import * as React from 'react';

import './Video.scss';

export type VideoProps = {
	src?: string;
};

export const Video = (props: VideoProps) => {
	const {src} = props;

	if (!src) {
		return null;
	}

	return <video autoPlay loop muted src={src} />;
};
