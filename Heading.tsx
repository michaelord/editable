import * as React from 'react';

import {Link} from 'components/editable';

import {HeadingSize} from 'components/types';

export type HeadingProps = {
	title?: string;
	href?: string;
	size?: HeadingSize;
};

export const Heading = (props: HeadingProps) => {
	const {title, href, size = 3} = props;

	if (!title) {
		return null;
	}

	const Size: any = `h${size}`;

	if (href) {
		return (
			<Size>
				<Link href={href} label={title} base="link" />
			</Size>
		);
	}

	return <Size dangerouslySetInnerHTML={{__html: title}} />;
};
