import React from 'react'
import logo from '../assets/Biscuit-logo.svg'
import {NavLink} from 'react-router-dom'

function Hero() {
	return (
		<>
			<section className="bg-amber-500 py-5">
				<div
					className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
				>
					<div className="flex text-center">
						<h1
							className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
						>
							What is a
						</h1>
						<NavLink
							to='/'>
							<img
								className="h-20 w-auto ml-2"
								src={logo}
								alt='Biscuit'
							/>
						</NavLink>
						<h1
							className="flex text-4xl font-extrabold text-white sm:text-5xl md:text-6xl ml-2"
						>
							?
						</h1>
					</div>
				</div>
			</section>

		</>
	)
}

export default Hero