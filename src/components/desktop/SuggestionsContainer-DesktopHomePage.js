import React from 'react';
import ItemSuggestion from './ItemSuggestion-DesktopHomePage'

import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'

const SuggestionContainer = (props) => {
	const { SuggestType } = props;
	return (
			<div className={styles.SuggestContainer} >

				<span className={styles.TitleContainer} > Genre </span>

				<ul className={styles.SuggestList}>
					{SuggestType.map((item, index) =>{
						return (
							<li key={item.id} >
								<ItemSuggestion title={item.name} image={item.icons[0].url} />
							</li>
						)
					})}
				</ul>
				
			</div>
	);
}

export default SuggestionContainer;