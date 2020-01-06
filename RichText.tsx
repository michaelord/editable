import React, {memo} from 'react';

import * as Types from 'components/types';

import './RichText.scss';

export type RichTextProps = {
	content?: string;
	className?: Types.ClassName;
};

export const RichText = memo((props: RichTextProps) => {
	const {content, className = undefined} = props;

	if (!content) {
		return null;
	}

	return <div className={className} dangerouslySetInnerHTML={{__html: content}} />;
});
