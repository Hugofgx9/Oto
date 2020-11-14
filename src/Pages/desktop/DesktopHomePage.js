import React, { useContext, useState, useEffect } from 'react';
import { SpotifyContext } from '@components/SpotifyProvider';
//import Genre from '@components/desktop/ItemSuggestion-DesktopHomePage.js'
import SuggestionsContainer from '@components/desktop/SuggestionsContainer-DesktopHomePage.js'
import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'

const DesktopHomePage = () => {
	
	const [categories, setCategories] = useState();
	const { spotifyApi } = useContext(SpotifyContext);
	
	useEffect(() => {
		const getCategories = async (limit) => {
			const results = await spotifyApi.getCategories({country: 'FR', locale: 'fr_FR', limit: limit});
			return results.categories.items;
		};
		const getSpotifyData = async () => {
			const categoriesResult = await getCategories(20);
			setCategories(categoriesResult);
		};
		getSpotifyData();
	}, [spotifyApi])

	return ( 
				<div className={styles.DesktopHomePage} >
			{categories &&
				<ul>
						{categories.map((category) => {
							return (
								<li>
									<SuggestionsContainer category={category} />
								</li>
							)
						})}            	
				</ul>
			}
		</div>
	);
}

export default DesktopHomePage;