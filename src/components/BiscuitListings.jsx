import React from 'react'
import BiscuitListing from './BiscuitListing'
import { useState, useEffect } from 'react';

function BiscuitListings({ data = [], type }) {
	const [filterData, setFilterData] = useState([]);
	useEffect(() => {
		async function DataFilter() {
			switch (type) {
				case 'cookie':
					setFilterData(data.filter(b => b.type === 'cookie'))
					break;
				case 'cracker':
					setFilterData(data.filter(b => b.type === 'cracker'))
					break;
				default:
					if (data.length == 0){
						break;
					}
					setFilterData(data);
					break;
			}
		}
		DataFilter();
	}, [type]);

	return (
		<>
			<section className="bg-amber-50 px-4 py-10">
				<div className="container-xl lg:container m-auto">
					<h2 className="text-3xl font-bold text-amber-500 mb-6 text-center">
						Browse {{ 'cookie': 'Cookies', 'cracker': 'Crackers', 'biscuit': 'Biscuits' }[type]}
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{
							
							filterData
								.map((biscuitDetails) => (
									<BiscuitListing key={biscuitDetails.id} biscuit={biscuitDetails} />
								))
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default BiscuitListings