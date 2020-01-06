import {Text} from 'components/editable';
import {getModifiers} from 'components/libs';
import React, {memo} from 'react';
import './Definition.scss';

import {Icon} from 'components/icon';

import * as Types from 'components/types';

type DefinitionItem = {
	icon?: Types.Icon;
	title: Types.Text;
	content: Types.RichText | Array<Types.RichText>;
};

type Layout = 'default' | 'columns' | 'stacked' | 'side-by-side' | 'spaced';

export type DefinitionProps = {
	data?: Array<DefinitionItem>;
	layout?: Layout;
};

export const Definition = memo((props: DefinitionProps) => {
	const {data, layout = 'default'} = props;

	if (!data) {
		return null;
	}

	const base: string = 'definition';

	const hasIcons: boolean =
		data.filter(item => {
			return item.icon;
		}).length > 0;

	const atts = {
		className: getModifiers(base, {
			layout,
			icons: hasIcons,
		}),
	};

	const content = data.map((item, index) => {
		const content: Array<string> = Array.isArray(item.content) ? item.content : [item.content];

		const {title, icon} = item;

		const titleIcon =
			icon || hasIcons ? <span className={`${base}__icon`}>{icon && <Icon icon={icon} />}</span> : null;

		return (
			<div key={`c-${index}`} className={content.length === 1 ? `${base}__cell` : undefined}>
				{content.length > 1 ? (
					<>
						<div className={`${base}__cell`}>
							<dt>
								{titleIcon}
								<Text content={title} />
							</dt>
							<dd dangerouslySetInnerHTML={{__html: item.content[0]}} />
						</div>
						{content.map((content, index) =>
							index === 0 ? null : <dd key={`d-${index}`} dangerouslySetInnerHTML={{__html: content}} />
						)}
					</>
				) : (
					<>
						<dt>
							{titleIcon}
							<Text content={title} />
						</dt>
						<dd dangerouslySetInnerHTML={{__html: content[0]}} />
					</>
				)}
			</div>
		);
	});

	return <dl {...atts}>{content}</dl>;
});
