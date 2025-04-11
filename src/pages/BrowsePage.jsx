import React from 'react'
import BiscuitListings from "../components/BiscuitListings"
import ViewAll from '../components/ViewAll'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Spinner from '../components/Spinner'

const endpoints = import.meta.env;
const baseurl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
	? endpoints.APP_API_URL                                             //run locally in solution url
	: `${window.location.protocol}//${window.location.host}` + '/api'   //hosted on IIS url

	
function BrowsePage({ type }) {
	const navigate = useNavigate();
	const [BiscuitsList, setBiscuits] = useState([]);
	const [showSpinner, setShowSpinner] = useState(true)

	useEffect(() => {
		const fetchBiscuits = async () => {
			try {
				console.log("endpoint:" + baseurl + endpoints.APP_API_IMPORT_ALL);
				await axios.get(`${baseurl + endpoints.APP_API_IMPORT_ALL}`)
					.then((response) => {
						console.log(response.data);
						setBiscuits(response.data);
					})
			}
			catch (error) {
				if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
					console.log('Error fetching biscuit data:', error);
				}
				navigate('/internal-server-error')
			}
			finally {
				setShowSpinner(false);
			}
		}
		fetchBiscuits();
	}, []);

	function render(type) {
		switch (type) {
			case 'biscuit':
				return (<>
					<BiscuitListings data={BiscuitsList} type={type} />
					<ViewAll type={type} />
				</>)
			case 'cookie':
				return (<>
					<BiscuitListings data={BiscuitsList} type={type} />
					<ViewAll type={type} />
				</>)
			case 'cracker':
				return (<>
					<BiscuitListings data={BiscuitsList} type={type} />
					<ViewAll type={type} />
				</>)
		}
	}

	return (
		<>
			{
				showSpinner
					? <Spinner />
					: render(type)
			}
		</>
	)
}

export default BrowsePage