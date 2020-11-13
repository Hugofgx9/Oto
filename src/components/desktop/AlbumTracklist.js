import React from 'react';
import clsx from 'clsx';
//import PropTypes from 'prop-types';
import styles from '@components/desktop/style/AlbumTracklist.module.scss';

const AlbumTracklist = (props) => {
	const { nb, title, artist, duration, gridClass } = props;
	return (
		<div className={ clsx(styles.trackElement, gridClass) }>
			<span> { nb } </span>
			<span className={ clsx(styles.trackTitle) }> { title } </span>
			<span className={ clsx(styles.trackArtist) }> { artist } </span>
			<span className={ clsx(styles.trackDuration)} > { duration } </span>
		</div>
	);
}

export default AlbumTracklist;