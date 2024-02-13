export function Audio({ src }) {
	console.log(src, 'src');
	let path = `./../../../assets/audio/${src}`

	return <>
		<p>{src}</p>
		<audio controls src={path}></audio>
	</>
}