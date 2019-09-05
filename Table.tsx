import * as React from 'react';

import './Table.scss';

// export type TableProps = {};

export const Table = (/*props: TableProps*/) => {
	const base: string = 'table';

	const rows = [0, 1, 2, 3, 4];

	//if(!title){return null;}

	const isCheckable = false;

	return (
		<table className={base}>
			<caption>[table caption]</caption>
			<thead>
				<tr>
					{isCheckable && <th className={`${base}__cb`}>CB</th>}
					<th>cell</th>
					<th>cell</th>
					<th>cell</th>
				</tr>
			</thead>
			<tbody>
				{rows.map(row => (
					<tr key={`r${row}`}>
						{isCheckable && <td className={`${base}__cb`}>checkbox</td>}
						<td>cell</td>
						<td>cell</td>
						<td>cell</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
