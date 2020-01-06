import {Link} from 'components/editable';

import React, {memo} from 'react';

import * as Types from 'components/types';

export type HeadingProps = {
	title?: Types.Text;
	href?: Types.Url;
	priority?: Types.Heading;
	size?: Types.Heading;
	className?: Types.ClassName;
};

export const Heading = memo((props: HeadingProps) => {
	const {title, href, priority = 3, className, size} = props;

	if (!title) {
		return null;
	}

	const Size: any = `h${priority}`;

	if (href) {
		return (
			<Size className={`heading${className ? ` ${className}` : ''}`}>
				<Link href={href} label={title} base="heading-link" />
			</Size>
		);
	}

	return (
		<Size className={`heading${className ? ` ${className}` : ''}`}>
			<span dangerouslySetInnerHTML={{__html: title}}></span>
		</Size>
	);
});
