import React from 'react';


const ItemSuggestion = (props) => {
	const { ImageSrc, ItemTitle } = props;
	return (
			<div>
				<div>
				
					<img src={ImageSrc} alt="" ></img>
				</div>
				<span>
					{ItemTitle}
				</span>
			</div>
	);
}

export default ItemSuggestion;