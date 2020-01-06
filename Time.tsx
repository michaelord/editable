import React, {useEffect, useState} from 'react';

import * as Types from 'components/types';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import './Time.scss';

dayjs.extend(relativeTime);

export type TimeProps = {
	date?: Types.Text;
	useTimeAgo?: Types.TrueFalse;
};

export const Time = (props: TimeProps) => {
	const {date, useTimeAgo = true} = props;

	if (!date) {
		return null;
	}

	const time = dayjs(date).format('MMMM D YYYY');
	const [value, setValue] = useState(time);

	if (useTimeAgo) {
		useEffect(() => {
			setValue(dayjs(date).fromNow());
		}, []);
	}

	return <time dateTime={date} title={time} dangerouslySetInnerHTML={{__html: value}} />;
};
