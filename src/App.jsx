
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import BrowsePage from './pages/BrowsePage'
import NotFoundPage from './pages/NotFound';
function App() {
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path='/' element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path='/biscuits' element={<BrowsePage type='biscuit'/>}/>
			<Route path='/cookies' element={<BrowsePage type='cookie'/>}/>
			<Route path='/crackers' element={<BrowsePage type='cracker'/>}/>
			<Route path='*' element={<NotFoundPage />}/>
		</Route>
	));
	return (
		<>
		<RouterProvider router={router} />
		</>
	)
}

export default App