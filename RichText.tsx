import * as React from 'react';

export type RichTextProps = {
	content?: string;
	className?: string;
};

export const RichText = (props: RichTextProps) => {
	const {content, className = undefined} = props;

	if (!content) {
		return null;
	}

	return <div className={className} dangerouslySetInnerHTML={{__html: content}} />;
};
