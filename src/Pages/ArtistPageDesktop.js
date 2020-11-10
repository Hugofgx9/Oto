import React from 'react';
//import PropTypes from 'prop-types';
import TitreArtistPage from '../Components/TitreArtistPage.js';
import AlbumArtistPage from '../Components/AlbumArtistPage.js';
import styles from '@pages/PagesStyle/ArtistPageDesktop.module.scss';

console.log(styles)

const ArtistPageDesktop = (props) => {
	//const { color } = props;
	return (
			<div className = { styles.ArtistPage}>
				<h2 className = {styles.bigTitle}>
					artisteName 
				</h2>
				<div className="Bio">
        			<p>
						Biographie de l'artiste
					</p>
    			</div>
				<h2 className="red-paragraph">
					photoArtiste
				</h2>
				<h2 className="red-paragraph">
					Dernière sortie
				</h2>
				<div className="Albums">
        			<AlbumArtistPage/>
    			</div>
				<h2 className="red-paragraph">
					Top titres
				</h2>
				<div className="Titres">
					<ul>
						<li>
							<TitreArtistPage/>
						</li>
						<li>
							<TitreArtistPage/>
						</li>
						<li>
							<TitreArtistPage/>
						</li>
						<li>
							<TitreArtistPage/>
						</li>
					</ul>
        			
    			</div>
				<h2 className="red-paragraph">
					Albums
				</h2>
				<div className="Albums">
					<ul>
						<li>
							<AlbumArtistPage/>
						</li>
						<li>
							<AlbumArtistPage/>
						</li>
						<li>
							<AlbumArtistPage/>
						</li>
						<li>
							<AlbumArtistPage/>
						</li>
					</ul>
    			</div>
				
			</div>
	);
}

export default ArtistPageDesktop;