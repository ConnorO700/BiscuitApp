import React from 'react'
import spinner from '../assets/Spinner.svg';

function Spinner() {
	return (
		<>
			<p className="flex justify-center">
				<img src={spinner} alt="Loading..." />
			</p>
		</>
	)
}

export default Spinner