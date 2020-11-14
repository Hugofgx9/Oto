import React, { useEffect, useState, useContext } from 'react';
import ItemSuggestion from './ItemSuggestion-DesktopHomePage'
import { SpotifyContext } from '@components/SpotifyProvider';
import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'

const SuggestionContainer = (props) => {
	const { category } = props;

	const { spotifyApi } = useContext(SpotifyContext);
	const [playlists, setPlaylists] = useState();

	useEffect(() => {
		const getPlaylistOfCategorie = async (categoryID, limit) => {
			const result = await spotifyApi.getCategoryPlaylists(categoryID, { country: 'FR', locale: 'fr_FR', limit: limit });
			return result.playlists.items;
		}
		const getSpotifyData = async () => {
			const playlists = await getPlaylistOfCategorie( category.id , 4);
			setPlaylists(playlists);
		}
		getSpotifyData();
	}, [spotifyApi, category])


	return (
			<div className={styles.SuggestContainer} >

				<span className={styles.TitleContainer} > {category.name} </span>

				{playlists &&				
					<ul className={styles.SuggestList}>
						{playlists.map((playlist) =>{
							return (
								<li key={playlist.id} >
									<ItemSuggestion id={playlist.id} title={playlist.name} image={playlist.images[0].url} />
								</li>
							)
						})}
					</ul>
				}
			</div>
	);
}

export default SuggestionContainer;