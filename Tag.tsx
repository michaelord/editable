import React, {memo} from 'react';
import './Tag.scss';

import * as Types from 'components/types';

export type TagProps = {
	label?: string;
};

export const Tag = memo((props: TagProps) => {
	const {label} = props;
	if (!label) {
		return null;
	}

	const base: string = 'tag';

	return <span className={base} dangerouslySetInnerHTML={{__html: label}} />;
});
