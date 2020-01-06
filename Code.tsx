import React, {memo} from 'react';
import './Code.scss';

import * as Types from 'components/types';

export type CodeProps = {
	code: string;
	hasCopy?: Types.TrueFalse;
};

export const Code = memo((props: CodeProps) => {
	const base = 'code';

	const {code, hasCopy} = props;

	return (
		<div className={`${base}`}>
			<pre>
				<code>{code}</code>
			</pre>
			{hasCopy && <button>(copy)</button>}
		</div>
	);
});
