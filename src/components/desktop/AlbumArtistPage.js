import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import styles from '@components/desktop/style/AlbumArtistPage.module.scss';

const AlbumArtistPage = (props) => {
	const { id, name, year, img} = props;
	return (
			<div className  ={ clsx(styles.AlbumArtistPage, styles.greyLight)}>


				<Link to={`/album/${id}`}>
					<img  src={img} alt=""/>				
				</Link>
				<span className = {styles.albumName}> {name} </span>				
				<span className = {styles.corpsdate}> {year} </span>
				
			</div>
	);
}

export default AlbumArtistPage;