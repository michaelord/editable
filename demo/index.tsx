import {Definition} from 'components/editable';
import IconLocation from 'components/icon/location.inline.svg';
import IconTel from 'components/icon/phone.inline.svg';
import IconEmail from 'components/icon/send.inline.svg';
import {Placeholder} from 'components/libs';
import {AuthorData} from 'components/people/demo';
import {PlaygroudCode, Playground} from 'components/styleguide';
import * as Types from 'components/types';
import React from 'react';
import {Blockquote, Figure, Time} from '../';
import {BlockquoteProps} from '../Blockquote';
import {CodeProps} from '../Code';
import {ContentProps} from '../Content';
import {DefinitionProps} from '../Definition';
import {DividerProps} from '../Divider';
import {FigureProps} from '../Figure';
import {HeadingProps} from '../Heading';
import {ListProps} from '../List';
import {MediaProps} from '../Media';
import {RichTextProps} from '../RichText';
import {TagProps} from '../Tag';
import {TextProps} from '../Text';
import {TimeProps} from '../Time';
import {VideoProps} from '../Video';

export const BlockquoteData: BlockquoteProps = {
	quote: Placeholder.p(),

	author: AuthorData,
	style: 'bordered',
	link: {
		href: '#',
		label: 'Example Link',
	},
};

export const BlockquoteDemo = () => (
	<Playground
		fields={[
			{
				name: 'style',
				label: 'Style',
				value: 'bordered',
				type: 'radio',
				layout: 'boxed',
				options: [
					{
						label: 'None',
						value: '',
					},
					{
						label: 'Bordered',
						value: 'bordered',
					},
					{
						label: 'Quote',
						value: 'quote',
					},
				],
			},
			{
				name: 'pull',
				label: 'Pull',
				value: false,
				type: 'radio',
				layout: 'boxed',
				options: [
					{
						label: 'None',
						value: '',
					},
					{
						label: 'Left',
						value: 'left',
					},
					{
						label: 'Right',
						value: 'right',
					},
				],
			},
			{
				name: 'hasAuthor',
				label: 'Has Author',
				value: true,
				type: 'switch',
			},
			{
				name: 'hasLink',
				label: 'Has Link',
				value: true,
				type: 'switch',
			},
		]}
	>
		{values => {
			const {hasAuthor, hasLink, ...rest} = values;
			return (
				<>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit nihil perferendis
						impedit voluptas deleniti consequatur facere, rerum necessitatibus. Beatae, excepturi aspernatur
						aperiam atque itaque fugit placeat magni quos adipisci?
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit nihil perferendis
						impedit voluptas deleniti consequatur facere, rerum necessitatibus. Beatae, excepturi aspernatur
						aperiam atque itaque fugit placeat magni quos adipisci?
					</p>
					<Blockquote
						{...{
							...BlockquoteData,
							...(!hasLink ? {link: undefined} : {}),
							...(!hasAuthor ? {author: undefined, position: undefined} : {}),
							...rest,
						}}
					/>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit nihil perferendis
						impedit voluptas deleniti consequatur facere, rerum necessitatibus. Beatae, excepturi aspernatur
						aperiam atque itaque fugit placeat magni quos adipisci?
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit nihil perferendis
						impedit voluptas deleniti consequatur facere, rerum necessitatibus. Beatae, excepturi aspernatur
						aperiam atque itaque fugit placeat magni quos adipisci?
					</p>
				</>
			);
		}}
	</Playground>
);

export const CodeData: CodeProps = {};

export const CodeDemo = () => <div></div>;

export const ContentData: ContentProps = {};

export const ContentDemo = () => <div></div>;

export const DefinitionData: DefinitionProps = {};

export const DefinitionDemo = () => (
	<Playground
		fields={[
			{
				name: 'hasIcon',
				label: 'Has Icon',
				value: true,
				type: 'switch',
			},
			{
				name: 'layout',
				label: 'Layout',
				type: 'radio',
				value: 'default',
				layout: 'boxed',
				options: [
					{
						label: 'Default',
						value: 'default',
					},
					{
						label: 'Stacked',
						value: 'stacked',
					},
					{
						label: 'Spaced',
						value: 'spaced',
					},
					{
						label: 'Side by Side',
						value: 'side-by-side',
					},
					{
						label: 'Columns',
						value: 'columns',
					},
				],
			},
		]}
	>
		{values => {
			const {hasIcon, ...rest} = values;
			return (
				<Definition
					layout="spaced"
					data={[
						{
							icon: hasIcon ? IconLocation : undefined,
							title: 'Address',
							content: 'Room 67<br />14 Tottenham Court Road<br />London<br />England<br />W1T 1JY',
						},
						{icon: hasIcon ? IconEmail : undefined, title: 'Email', content: 'mail@example.com'},
						{icon: hasIcon ? IconTel : undefined, title: 'Phone', content: '+44 07875 000 000'},
					]}
					{...rest}
				/>
			);
		}}
	</Playground>
);

export const DividerData: DividerProps = {};

export const DividerDemo = () => <div></div>;

export const FigureData: FigureProps = {
	caption: 'Image caption',
	credit: 'Image by <a href="#">author</a>',
	image: {
		src:
			'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
	},
};

export const FigureDemo = () => (
	<Playground
		fields={[
			{
				name: 'wide',
				label: 'Wide',
				value: false,
				type: 'switch',
				help: 'Setting this to wide will allow the image to spill out of its container',
			},
			{
				name: 'caption',
				label: 'Caption',
				type: 'text',
				value: FigureData.caption,
				placeholder: 'Text Input',
			},
			{
				name: 'credit',
				label: 'Credit',
				type: 'text',
				value: FigureData.credit,
				placeholder: 'Text Input',
			},
			{
				name: 'crop',
				label: 'Crop',
				type: 'radio',
				layout: 'boxed',
				options: [
					{
						label: 'No crop',
						value: '',
					},
					{
						label: 'Auto',
						value: 'auto',
					},
					{
						label: '16:9',
						value: '16:9',
					},
					{
						label: '4:3',
						value: '4:3',
					},
				],
			},
			{
				name: 'style',
				label: 'Style',
				type: 'radio',
				value: 'default',
				layout: 'boxed',
				help: 'Style the placement of the caption and credit',
				options: [
					{
						label: 'Default',
						value: 'default',
					},
					{
						label: 'Inset',
						value: 'inset',
					},
					{
						label: 'Boxed',
						value: 'boxed',
					},
				],
			},
		]}
	>
		{values => (
			<>
				<Figure {...{...FigureData, ...values}} />
				<PlaygroudCode name="Figure" config={{...{...FigureData, ...values}}} />
			</>
		)}
	</Playground>
);

export const HeadingData: HeadingProps = {};

export const HeadingDemo = () => <div></div>;

export const ImgData: Types.Image = {};

export const ImgDemo = () => <div></div>;

// TODO
export const LinkData = {};

export const LinkDemo = () => <div></div>;

export const ListData: ListProps = {};

export const ListDemo = () => <div></div>;

export const MediaData: MediaProps = {};

export const MediaDemo = () => <div></div>;

export const RichTextData: RichTextProps = {};

export const RichTextDemo = () => <div></div>;

export const TagData: TagProps = {};

export const TagDemo = () => <div></div>;

export const TextData: TextProps = {};

export const TextDemo = () => <div></div>;

export const TimeData: TimeProps = {};

export const TimeDemo = () => (
	<Playground
		fields={[
			{
				name: 'date',
				label: 'Date',
				value: '2019-12-12',
				type: 'date',
			},
		]}
	>
		{values => {
			return (
				<>
					<p>
						Page updated{' '}
						<b>
							<Time {...values} />
						</b>
					</p>
					<PlaygroudCode name="Time" config={values} />
				</>
			);
		}}
	</Playground>
);

export const VideoData: VideoProps = {};

export const VideoDemo = () => <div></div>;
