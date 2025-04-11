import React from 'react'
import SidebarItem from './SidebarItem'

'Browse All Biscuits'
function Sidebar() {
	return (
		<>
			<div className='flex bg-amber-100 w-full justify-center'>
				<SidebarItem link="/biscuits" name='Browse All Biscuits' />
				<SidebarItem link="/cookies" name='Browse Cookies' />
				<SidebarItem link="/crackers" name='Browse Crackers' />
				<SidebarItem link="/polls" name='Polls & Graphs' />
				<SidebarItem link="/documents" name='Documents' />
				<SidebarItem link="/about" name='About' />
			</div>

		</>
	)
}

export default Sidebar