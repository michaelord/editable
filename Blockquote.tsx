import * as React from 'react';

import './Blockquote.scss';
import {RichText} from './';

import {Author} from 'components/people';

export type BlockquoteProps = {
	children?: React.ReactNode;
	content?: string;
	author?: string;
	position?: string;
};

export const Blockquote = (props: BlockquoteProps) => {
	const base: string = 'blockquote';

	const {content, children, author, position} = props;

	if (!content && !children) {
		return null;
	}

	return (
		<blockquote className={base}>
			<RichText content={content} />
			{children}
			{author && (
				<footer>
					<Author name={author} position={position} />
				</footer>
			)}
		</blockquote>
	);
};
