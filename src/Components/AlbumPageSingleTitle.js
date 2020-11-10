import React from 'react';
//import PropTypes from 'prop-types';
import { grid } from './ComponentStyle/AlbumPageSingleTitle.module.scss';



const AlbumPageSingleTitle = (props) => {
	const { nb, title, artist, time } = props;
	return (
		<div className={ grid }>
		 <span> { nb } </span>
		 <span> { title } </span>
		 <span> { artist } </span>
		 <span> { time } </span>
		</div>
	);
}

export default AlbumPageSingleTitle;