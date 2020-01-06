import {getModifiers} from 'components/libs';
import React, {memo} from 'react';
import './List.scss';

import * as Types from 'components/types';

export type ListProps = {
	children: Types.Children;
	isUnstyled?: boolean;
	className?: string;
};

export const List = memo((props: ListProps) => {
	const base: string = 'list';

	const {children, isUnstyled = false, className} = props;

	if (!children || React.Children.count(children) === 0) {
		return null;
	}

	const atts: object = {
		className:
			getModifiers(base, {
				unstyled: isUnstyled,
			}) + `${className ? ` ${className}` : ''}`,
	};

	return (
		<ul {...atts}>
			{React.Children.map(children, (item, index) => {
				return typeof item === 'string' ? (
					<li key={index} dangerouslySetInnerHTML={{__html: item}} />
				) : (
					<li key={index}>{item}</li>
				);
			})}
		</ul>
	);
});
