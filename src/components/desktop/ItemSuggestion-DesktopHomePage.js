import React from 'react';
import { Link } from 'react-router-dom';

const ItemSuggestion = (props) => {
	const { image, title, id} = props;
	return (
			<Link to={`/playlist/${id}`}>
				<div>
				
					<img src={image} alt="" ></img>
				</div>
				<span>
					{title}
				</span>
			</Link>
	);
}

export default ItemSuggestion;