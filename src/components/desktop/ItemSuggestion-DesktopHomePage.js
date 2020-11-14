import React from 'react';


const ItemSuggestion = (props) => {
	const { image, title } = props;
	return (
			<div>
				<div>
				
					<img src={image} alt="" ></img>
				</div>
				<span>
					{title}
				</span>
			</div>
	);
}

export default ItemSuggestion;