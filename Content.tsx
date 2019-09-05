import * as React from 'react';

export type ContentProps = {
	content?: string;
};

export const Content = (props: ContentProps) => {
	const {content} = props;

	if (!content) {
		return null;
	}

	return <div dangerouslySetInnerHTML={{__html: content}} />;
};
