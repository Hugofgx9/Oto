import React from 'react';
import Genre from '@components/ItemSuggestion-DesktopHomePage.js'
import SuggestionsContainer from '@components/SuggestionsContainer-DesktopHomePage.js'
import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'
import DesktopLeftMenu from '@components/DesktopLM.js'

let SuggestTypes = [
	{SuggestType: 'Genres'},
	{SuggestType: 'Ambiance'},

]
const DesktopHomePage = (props) => {
	//const { color } = props;
	return (            
			<div className={styles.DesktopHomePage} >
				<div>
				<DesktopLeftMenu/> 
				</div>
				<ul>
					{SuggestTypes.map((Type) => {
						return(
							<li>
								<SuggestionsContainer
									SuggestType={Type.SuggestType}
								></SuggestionsContainer>
							</li>
						)
					})}
                	<SuggestionsContainer></SuggestionsContainer>
					<SuggestionsContainer></SuggestionsContainer>
					<SuggestionsContainer></SuggestionsContainer>
				</ul>

			</div>
	);
}

export default DesktopHomePage;