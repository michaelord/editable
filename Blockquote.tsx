import {getModifiers} from 'components/libs';
import {Img} from 'components/media';
import {Author, AuthorProps} from 'components/people';
import * as Types from 'components/types';
import React, {memo} from 'react';
import {Link, RichText} from './';
import './Blockquote.scss';

export type BlockquoteBaseProps = {
	quote?: Types.RichText;
	link?: Types.Link;
	author?: AuthorProps;
	style?: 'none' | 'bordered' | 'quote';
	logo?: Types.Image;
};

export type BlockquoteProps = BlockquoteBaseProps & {
	pull?: 'left' | 'right';
};

export const Blockquote = memo((props: BlockquoteProps) => {
	const base: string = 'blockquote';

	const {quote, author, pull, link, style = 'bordered', logo} = props;

	if (!quote) {
		return null;
	}

	const atts: object = {
		className:
			getModifiers(base, {
				style,
				pull: pull ? `pull-${pull}` : undefined,
				//bordered,
			}) + (author ? ` has-author` : ''),
	};

	return (
		<blockquote {...atts}>
			<RichText content={quote} className={`${base}__content`} />
			{(author || link || logo) && (
				<footer className={`${base}__footer`}>
					{author && <Author {...author} />}
					{logo && <Img {...logo} />}
					{link && <Link {...link} base="link" />}
				</footer>
			)}
		</blockquote>
	);
});
