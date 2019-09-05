import * as React from 'react';

import './List.scss';

import {getModifiers} from 'components/libs';

export type ListProps = {
	children: React.ReactNode;
	isUnstyled?: boolean;
};

export const List = (props: ListProps) => {
	const base: string = 'list';

	const {children, isUnstyled = false} = props;

	if (!children || React.Children.count(children) === 0) {
		return null;
	}

	const atts: object = {
		className: getModifiers(base, {
			unstyled: isUnstyled,
		}),
	};

	return (
		<ul {...atts}>
			{React.Children.map(children, (item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
};
