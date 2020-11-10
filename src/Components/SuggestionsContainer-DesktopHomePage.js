import React from 'react';
import Suggestion from './ItemSuggestion-DesktopHomePage'

import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'

let ItemSuggest = [
	{ItemTitle: 'Rock'},
	{ItemTitle: 'Classique'},
	{ItemTitle: 'Electro'},
	{ItemTitle: 'Variété'},
]
const DesktopHomePage = (props) => {
	const { SuggestType } = props;
	return (
			<div className={styles.SuggestContainer} >
				<span className={styles.TitleContainer} > {SuggestType} </span>
				<ul className={styles.SuggestList}>
					{ItemSuggest.map((Items) =>{
						return (
							<li>
								<Suggestion
									ItemTitle={Items.ItemTitle}
								></Suggestion>
							</li>
						)
					})}
				</ul>
				
			</div>
	);
}

export default DesktopHomePage;