import {Icon} from 'components/icon';
import {getModifiers} from 'components/libs';
import {Priority, Size} from 'components/types';
import React from 'react';
import {Text} from './';
import './Link.scss';

import * as Types from 'components/types';

export type Anchor = {
	href?: Types.Url | null;
	children?: Types.Children;
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
	isActive?: boolean;
	onClick?: (ev: MouseEvent) => void;
};

export type ButtonProps = {
	size?: Size;
	isWide?: boolean;
	priority?: Priority;
};

export type LinkX = Interaction & Anchor;

export type LinkItem = LinkX & ButtonProps;
export class Link extends React.PureComponent<LinkItem> {
	get atts(): object {
		const {base = 'btn', isWide, isActive, href, priority, classes = null, size, onClick, target} = this.props;

		const internal = href ? /^\/(?!\/)/.test(href) : true;

		return {
			className:
				getModifiers(base, {
					wide: isWide,
					priority,
					size: size ? `size-${size}` : undefined,
					active: isActive,
				}) + (classes ? ` ${classes}` : ''),
			'aria-current': isActive ? 'page' : undefined,
			href,
			target,
			onClick,
			// TODO: denote an external link
			role: internal ? undefined : 'external',
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
				{icon && <Icon icon={IconPrefix} />}

				<Text content={label} className={`text ${base}__text`} />
				{iconSuffix && <Icon icon={IconSuffix} />}
			</>
		);
	}

	render(): React.ReactNode {
		return <a {...this.atts}>{this.renderInner()}</a>;
	}
}
