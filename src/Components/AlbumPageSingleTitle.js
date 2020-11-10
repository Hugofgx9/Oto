import React from 'react';
//import PropTypes from 'prop-types';
import styles from './ComponentStyle/AlbumPageSingleTitle.module.scss';

const AlbumPageSingleTitle = (props) => {
	const { nb, title, artist, time, style } = props;
	return (
		<div className={ styles.grid } style={ style }>
		 <span> { nb } </span>
		 <span className={ styles.trackTitle }> { title } </span>
		 <span> { artist } </span>
		 <span> { time } </span>
		</div>
	);
}

export default AlbumPageSingleTitle;