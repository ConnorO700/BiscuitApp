import React from 'react'
import { VictoryPie } from 'victory';
function PieChart() {
	return (
		<>
			<VictoryPie
				innerRadius={50}
				data={[
					{ x: "Cats", y: 30 },
					{ x: "Dogs", y: 35 },
					{ x: "Birds", y: 25 },
					{ x: "Rabbits", y: 10 },
				]}
			/>

		</>
	)
}

export default PieChart