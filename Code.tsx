import * as React from 'react';

import './Code.scss';

// https://www.npmjs.com/package/react-syntax-highlighter

export const Code = (/*props: CodeProps*/) => {
	const base = 'code';

	const code = `.component {
        background-color: var(--color-bg);
        padding: var(--space-md);
        height: auto;
        width: 600px;
}`;

	return (
		<pre className={`${base}`}>
			<code dangerouslySetInnerHTML={{__html: code}} />
		</pre>
	);
};
