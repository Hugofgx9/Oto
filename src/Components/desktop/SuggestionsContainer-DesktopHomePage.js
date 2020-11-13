import React from 'react';
import Suggestion from './ItemSuggestion-DesktopHomePage'

import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'

let GenreSuggest = [
	{ItemTitle: 'Rock'},
	{ItemTitle: 'Classique'},
	{ItemTitle: 'Electro'},
	{ItemTitle: 'Variété'},
]

let AmbianceSuggest = [
	{ItemTitle: 'Relax'},
	{ItemTitle: 'Motivation'},
	{ItemTitle: 'Party'},
	{ItemTitle: 'Work'},
]

let TopSuggest = [
	{ItemTitle: 'TopFr'},
	{ItemTitle: 'Motivation'},
	{ItemTitle: 'Party'},
	{ItemTitle: 'Work'},
]

let GlobalSuggest = {
	Genre: GenreSuggest,
	Ambiance: AmbianceSuggest,
	Classement: TopSuggest,
}


const DesktopHomePage = (props) => {
	const { SuggestType } = props;
	return (
			<div className={styles.SuggestContainer} >

				<span className={styles.TitleContainer} > {SuggestType} </span>

				<ul className={styles.SuggestList}>
					{GlobalSuggest[SuggestType].map((Items, index) =>{
						return (
							<li key={index} >
								<Suggestion ItemTitle={Items.ItemTitle} />
							</li>
						)
					})}
				</ul>
				
			</div>
	);
}

export default DesktopHomePage;