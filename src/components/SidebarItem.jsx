import React from 'react'
import { NavLink } from 'react-router-dom';

function SidebarItem({ name, link }) {
	return (
		<div>
			<NavLink
				to={link}
				className='h-20 bg-amber-100 hover:bg-amber-600 px-2 text-2xl font-bold hover:text-white'
			>{name}
			</NavLink>
		</div>
	)
}

export default SidebarItem