import * as React from 'react';

import './Tag.scss';

export type TagProps = {
	label?: string;
};

export const Tag = (props: TagProps) => {
	const {label} = props;
	if (!label) {
		return null;
	}

	const base: string = 'tag';

	return <span className={base} dangerouslySetInnerHTML={{__html: label}} />;
};
