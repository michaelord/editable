import React from 'react';

import * as Types from 'components/types';

export type ContentProps = {
	content?: Types.RichText;
};

export const Content = (props: ContentProps) => {
	const {content} = props;

	if (!content) {
		return null;
	}

	return <div dangerouslySetInnerHTML={{__html: content}} />;
};
