import React from 'react';

export default function Map() {
	const cart = ['Apple', 'Banana', 'Capple', 'Danana'];
	const Kotol = <div>mogga</div>;
	return (
		<div>
			{cart.map((e) => {
				return (
					<div key={e}>
						{e}
						{Kotol}
					</div>
				);
			})}
		</div>
	);
}
