import { useState } from 'react';
import { useEffect } from 'react';
export default function Wtf() {
	const [lue, setLue] = useState(0);

	// counter is here
	function incrementState() {
		setLue((prev) => prev + 1);
	}
	function decrementState() {
		setLue((prev) => prev - 1);
	}
	useEffect(() => {
		alert(lue);
	}, [lue]);

	return (
		<>
			{lue}
			<button onClick={incrementState}>Increment</button>
			<button onClick={decrementState}>decrement</button>
		</>
	);
}
