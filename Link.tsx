import * as React from 'react';

import './Link.scss';

import {Text} from './';

import {getModifiers} from 'components/libs';

export type Anchor = {
	href: string;
	children?: React.ReactNode;
	hreflang?: string;
	download?: boolean;
	target?: string;
	title?: string;
	className?: string;
};

export type Analytics = {};

export type Interaction = {
	label?: string;
	classes?: string;
	icon?: React.ReactNode;
	iconSuffix?: React.ReactNode;
	base?: string;
	onClick?: (ev: MouseEvent) => void;
};

import {Size, Priority} from 'components/types';

export type ButtonProps = {
	size?: Size;
	isWide?: boolean;
	priority?: Priority;
};

export type LinkX = Interaction & Anchor;

export type LinkItem = LinkX & ButtonProps;

export class Link extends React.PureComponent<LinkItem> {
	get atts(): object {
		const {
			base = 'btn',
			isWide,
			href,
			priority = 'default',
			classes = null,
			size = 'default',
			onClick,
		} = this.props;

		return {
			className:
				getModifiers(base, {
					wide: isWide,
					priority,
					size: `size-${size}`,
				}) + (classes ? ` ${classes}` : ''),
			href,
			onClick,
		};
	}

	renderInner(): React.ReactNode {
		const {base = 'btn', label = '[link]', icon, iconSuffix, children} = this.props;

		if (children) {
			return children;
		}

		const IconPrefix = (icon as React.ReactType) || null;
		const IconSuffix = (iconSuffix as React.ReactType) || null;

		return (
			<>
				{icon && <IconPrefix className="icon" />}
				<Text content={label} className={`text ${base}__text`} />
				{iconSuffix && <IconSuffix className="icon" />}
			</>
		);
	}

	render(): React.ReactNode {
		return <a {...this.atts}>{this.renderInner()}</a>;
	}
}
