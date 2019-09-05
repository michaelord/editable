import * as React from 'react';

import './Definition.scss';

import {getModifiers} from 'components/libs';

type DefinitionItem = {
	title: string;
	content: string;
};

type Layout = 'default' | 'tabular';

export type DefinitionProps = {
	data?: Array<DefinitionItem>;
	layout?: Layout;
};

export const Definition = (props: DefinitionProps) => {
	const {data, layout = 'default'} = props;

	if (!data) {
		return null;
	}

	const base: string = 'definition';

	const atts = {
		className: getModifiers(base, {
			layout,
		}),
	};

	const content = data.map((item, index) => {
		return (
			<div key={`c-${index}`}>
				<dt dangerouslySetInnerHTML={{__html: item.title}} />
				<dd dangerouslySetInnerHTML={{__html: item.content}} />
			</div>
		);
	});

	return <dl {...atts}>{content}</dl>;
};
