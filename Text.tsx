import React from 'react';

import * as Types from 'components/types';

export type TextProps = {
	content?: string;
	className?: Types.Text;
};

export const Text = (props: TextProps) => {
	const {content, className} = props;

	if (!content) {
		return null;
	}

	return <span className={className} dangerouslySetInnerHTML={{__html: content}} />;
};
