import { useEffect, useState } from "react";
// import { Audio } from "./../Audio/Audio";
import { Single } from "./../Single/Single"

export function AudioList() {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch('https://andrey-andreevich.ru/data.json')
			.then(res => res.json())
			.then(data => setData(data))
	}, []);

	return <>
		<ul>
			{data.map((el, index) => { return <Single key={el + index} data={data} /> })}
		</ul>
	</>

}