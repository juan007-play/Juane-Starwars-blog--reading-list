
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			favorites: [],
			starships: []
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch('https://www.swapi.tech/api/people/')
				.then((response) => response.json())
				.then((data)=> setStore({charaters: data.results}))
				
				
			},
			getInitialCharacters: () => {
				fetch('https://www.swapi.tech/api/people')
				.then((response) => response.json())
				.then(response => {setStore({ characters: response.results });})
				
			},
			getCharactersById: (id, setCharacter) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then((response) => response.json())
				.then(response => {setCharacter(response.result);})
				
			},
			getInitialPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets`)
				.then((response) => response.json())
				.then(response => {setStore({ planets: response.results });})
				
			},
			getPlanetsById: (id, setPlanet) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
				.then((response) => response.json())
				.then(response => {setPlanet(response.result);})
				
			},

			getInitialStarships: () => {
				fetch(`https://www.swapi.tech/api/starships`)
				.then((response) => response.json())
				.then(response => {setStore({ starships: response.results });})
				
			},

			getStarShipsById: (id, setStarShips) => {
				fetch(`https://www.swapi.tech/api/starships/${id}`)
				.then((response) => response.json())
				.then(response => {setStarShips(response.result);})
				
			},

			addFavorites: (newFavorite) => {
				const store = getStore();
				const actions = getActions()
				const isFavorite = store.favorites.indexOf(newFavorite)
				console.log(isFavorite)
				if(isFavorite == -1){

					const favorite = store.favorites.concat(newFavorite);
					setStore({ favorites: favorite });
				}else{
					actions.removeFavorites(isFavorite)
				}
				
			},


			removeFavorites: (index) => {
				const store = getStore();
				const favorite = store.favorites.filter((c, i) => {
					return index !== i
				});
				setStore({ favorites: favorite });
			},

			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
