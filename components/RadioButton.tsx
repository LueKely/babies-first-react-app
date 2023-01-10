import React, { useState } from 'react';

export default function RadioButton() {
	const [selectedValue, setSelectedValue] = useState('option1');

	function handleChange(event: any) {
		setSelectedValue(event.target.value);
	}

	return (
		<>
			{selectedValue}
			<form>
				<label>
					<input
						type="radio"
						value="option1"
						checked={selectedValue === 'option1'}
						onChange={handleChange}
					/>
					Option 1
				</label>
				<br />
				<label>
					<input
						type="radio"
						value="option2"
						checked={selectedValue === 'option2'}
						onChange={handleChange}
					/>
					Option 2
				</label>
				<br />
				<label>
					<input
						type="radio"
						value="option3"
						checked={selectedValue === 'option3'}
						onChange={handleChange}
					/>
					Option 3
				</label>
			</form>
		</>
	);
}
