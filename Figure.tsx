import React, {memo} from 'react';
import {Img} from 'components/media';
import {getModifiers} from 'components/libs';
import './Figure.scss';

import * as Types from 'components/types';
import * as Util from 'components/libs';

export type FigureProps = {
	image: Types.Image;
	caption?: Types.RichText;
	className?: Types.Text;
	crop?: 'auto' | Types.Ratio;
	style?: 'default' | 'inset' | 'boxed';
	credit?: Types.Text;
	wide?: Types.TrueFalse;
};

export const Figure = memo((props: FigureProps) => {
	const base = 'figure';

	const {image, caption, className = '', crop, style = 'default', credit, wide = false} = props;

	let inlineStyle: any;

	if (crop) {
		// auto
		if (crop === 'auto' && image.width && image.height) {
			// console.log('ratio[auto]', (image.height / image.width) * 100  );

			inlineStyle = {
				'--padding': `${(image.height / image.width) * 100}%`,
			} as React.CSSProperties;
		} else if (typeof crop === 'number') {
			// TODO: this
			// console.log('ratio[number]', crop)
		} else if (typeof crop === 'string' && crop) {
			// test for string ratio
			const matches = crop.match(/([\d]+):([\d]+)/);

			if (matches) {
				const [m, w, h] = matches;

				// console.log('ratio[match]', crop, (Number(h) / Number(w)) * 100  );

				inlineStyle = {
					'--padding': `${(Number(h) / Number(w)) * 100}%`,
				} as React.CSSProperties;
			} else {
				// TODO: this
				// console.log('ratio[string]', crop);
			}
		}
	}

	const atts: any = {
		className:
			getModifiers(base, {
				style,
				wide: Boolean(wide),
				crop: crop !== undefined && crop !== '',
			}) + `${className ? ` ${className}` : ''}`,
		style: inlineStyle,
	};

	if ((crop || style === 'inset') && image && image.color) {
		atts['data-theme'] = Util.getAltColour(image.color);
	}

	let figcaption =
		(caption ? `<span class="${base}__caption">${caption}</span>` : '') +
		(credit ? ` <span class="${base}__credit">${credit}</span>` : '');

	return (
		<figure {...atts}>
			<div className={`${base}__inner`}>
				<Img {...image} />
			</div>
			{figcaption && (
				<figcaption>
					<span className={`${base}__cap`} dangerouslySetInnerHTML={{__html: figcaption}} />
				</figcaption>
			)}
		</figure>
	);
});
