import React, { useState } from 'react';

export default function FormOfPerson() {
	const [inputValue, setinputValue] = useState('Hello');

	return (
		<>
			{inputValue}
			<textarea
				onChange={(e) => setinputValue(e.target.value)}
			></textarea> {' '}
			<p>
				Radio buttons:
				<label>
					<input type="radio" name="myRadio" value="option1" />
					Option 1
				</label>
				<label>
					<input type="radio" name="myRadio" value="option2" />
					Option 2
				</label>
				<label>
					<input type="radio" name="myRadio" value="option3" />
					Option 3
				</label>
			</p>
		</>
	);
}
