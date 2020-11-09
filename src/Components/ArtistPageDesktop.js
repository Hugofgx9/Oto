import React from 'react';
//import PropTypes from 'prop-types';
import { myContainer } from './ComponentStyle/MyComponent.module.scss';
import Titre from './Titre';
import Album from './Album';

const MyComponent = (props) => {
	//const { color } = props;
	return (
			<div className={ myContainer }>
				<h1>
					artisteName 
				</h1>
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
        			<Album/>
    			</div>
				<h2 className="red-paragraph">
					Top titres
				</h2>
				<div className="Titres">
					<ul>
						<li>
							<Titre/>
						</li>
						<li>
							<Titre/>
						</li>
						<li>
							<Titre/>
						</li>
						<li>
							<Titre/>
						</li>
					</ul>
        			
    			</div>
				<h2 className="red-paragraph">
					Albums
				</h2>
				<div className="Albums">
					<ul>
						<li>
							<Album/>
						</li>
						<li>
							<Album/>
						</li>
						<li>
							<Album/>
						</li>
						<li>
							<Album/>
						</li>
					</ul>
    			</div>
				
			</div>
	);
}

export default MyComponent;