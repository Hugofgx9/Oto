import React, { useContext, useState, useEffect } from 'react';
import { SpotifyContext } from '@components/SpotifyProvider';
//import Genre from '@components/desktop/ItemSuggestion-DesktopHomePage.js'
import SuggestionsContainer from '@components/desktop/SuggestionsContainer-DesktopHomePage.js'
import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'


const DesktopHomePage = () => {
	
	//const [albums, setAlbums] = useState();

	const [categories, setCategories] = useState();
	
	const { spotifyApi } = useContext(SpotifyContext);
	
	useEffect(() => {
		const getRecommandations = async () => {
			const results = await spotifyApi.getCategories({country: 'FR', locale: 'fr_FR'});
			console.log(results.categories.items)
			return results.categories.items;
		};
		const getSpotifyData = async () => {
			const recommandations = await getRecommandations();
			setCategories(recommandations);
		};
		getSpotifyData();
	}, [spotifyApi])



	return ( 
		
		<div className={styles.DesktopHomePage} >
			{categories &&
				<ul>

							<li>
								<SuggestionsContainer SuggestType={categories.slice(0,4)} />
							</li>
							<li>
								<SuggestionsContainer SuggestType={categories.slice(4,8)} />
							</li>
							<li>
								<SuggestionsContainer SuggestType={categories.slice(8,12)} />
							</li>
							<li>
								<SuggestionsContainer SuggestType={categories.slice(12,16)} />
							</li>
                	
				</ul>

			}
		</div>
	);
}

export default DesktopHomePage;