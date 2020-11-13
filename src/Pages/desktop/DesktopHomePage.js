import React from 'react';
//import Genre from '@components/desktop/ItemSuggestion-DesktopHomePage.js'
import SuggestionsContainer from '@components/desktop/SuggestionsContainer-DesktopHomePage.js'
import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'

let SuggestTypes = [
	{SuggestType: 'Genre'},
	{SuggestType: 'Ambiance'},
	{SuggestType: 'Classement'},

]
const DesktopHomePage = (props) => {
	return (            
			<div className={styles.DesktopHomePage} >
				<ul>
					{SuggestTypes.map((Type, index) => {
						return(
							<li key={index}>
								<SuggestionsContainer SuggestType={Type.SuggestType} />
							</li>
						)
					})}
                	
				</ul>

			</div>
	);
}

export default DesktopHomePage;