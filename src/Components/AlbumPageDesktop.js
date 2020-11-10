import React from 'react';
//import PropTypes from 'prop-types';
import { albumPage } from './ComponentStyle/DesktopAlbumPage.module.scss';
import AlbumPageSingleTitle from './AlbumPageSingleTitle';

let albumTrackList = [
{title: 'Premier', artist: 'Hupsylon'},
{title: 'Deuxieme', artist: 'Hupsylon'},
{title: 'Troisieme', artist: 'Hupsylon'},
{title: 'Quatrieme', artist: 'Hupsylon'},
{title: 'Cinquieme', artist: 'Hupsylon'},
{title: 'Sixieme', artist: 'Hupsylon'},
{title: 'Septieme', artist: 'Hupsylon'},
];

const AlbumPageDesktop = (props) => {
	//const { color } = props;
	return (
			<div className={ albumPage }>
				<img src=""/>
				<ul>
				{albumTrackList.map((track, index) => {
					return (
						<AlbumPageSingleTitle 
							key={index} 
							nb={index} 
							title={track.title} 
							artist={track.artist} 
						/>
					)
				})}
					
				</ul>
			</div>
	);
}

export default AlbumPageDesktop;