import * as React from 'react';

export type TextProps = {
	content?: string;
	className?: string;
};

export const Text = (props: TextProps) => {
	const {content, className} = props;

	if (!content) {
		return null;
	}

	return <span className={className} dangerouslySetInnerHTML={{__html: content}} />;
};
