import React, {memo} from 'react';
import './Divider.scss';

import * as Utils from 'components/libs';

import * as Types from 'components/types';

export type DividerProps = {
	label?: Types.Text;
	align?: 'center' | 'left';
};

export const Divider = memo((props: DividerProps) => {
	const {label, align = 'center'} = props;
	if (!label) {
		return <hr />;
	}

	const base: string = 'divider';

	const atts = {
		className: Utils.getModifiers(base, {align}),
	};

	return (
		<div {...atts}>
			<span dangerouslySetInnerHTML={{__html: label}} />
		</div>
	);
});
