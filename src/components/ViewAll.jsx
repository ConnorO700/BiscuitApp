import React from 'react'
import {Link} from 'react-router-dom'

function ViewAll({type}) {
	return (
		<>
			<section className="m-auto max-w-lg my-10 px-6">
				<Link
					href="/all"
					className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
				>View All {{ 'cookie': 'Cookies', 'cracker': 'Crackers', 'biscuit': 'Biscuits' }[type]}
				</Link>
			</section>

			<script src="js/main.js"></script>
		</>
	)
}

export default ViewAll