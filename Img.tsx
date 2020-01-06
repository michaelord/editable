import React, {memo} from 'react';

import * as Types from 'components/types';

import {Balls} from 'components/loader';

import './Img.scss';

export const Img = memo((props: Types.Image) => {
	const base: string = 'img';
	const {src, width, height, alt = '', color, loading} = props;

	if (!src) {
		return null;
	}

	if (typeof src === 'string') {
		if (src.indexOf('<svg') > -1) {
			return <div dangerouslySetInnerHTML={{__html: src}} />;
		}

		const style: any = color
			? {
					backgroundColor: color,
			  }
			: undefined;

		// TODO: loader

		if (loading === 'lazy') {
			return (
				<span className={`${base} ${base}--loading`} style={style}>
					<span className={`${base}__loader`}>
						<Balls />
					</span>
				</span>
			);
		}

		return <img className={base} src={src} width={width} height={height} alt={alt} style={style} />;
	}

	return src;
});
