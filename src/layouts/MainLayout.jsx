import React from 'react'
import { Outlet } from 'react-router-dom'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'

function MainLayout() {
	return (
		<>
			<Hero />
			<Sidebar />
			<Outlet />
		</>
	)
}

export default MainLayout