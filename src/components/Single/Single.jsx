import { Audio } from "../Audio/Audio";

export function Single({ data }) {


	return <li>
		{data != null && data.map((el, index) => {
			console.log(el[index].poster);
			return <img src={`./../../../assets/audio/${el[index].poster}`} alt={el[index].poster} key={el + index} />
		})}
		< ul >
			{
				data != null && data.map((el, index) => {
					if (Array.isArray(el[index].name)) {
						return el[index].name.map((name, nameIndex) => (
							<>
								<li key={`${name}-${nameIndex}`} >
									<Audio src={name} />
								</li>
							</>
						));
					} else {
						console.error("el.enigma.name is not an array");
						return null;
					}
				})}
		</ul>
	</li >
}