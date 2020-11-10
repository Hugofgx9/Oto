import React from 'react';
import Genre from '@components/ItemSuggestion-DesktopHomePage.js'
import SuggestionsContainer from '@components/SuggestionsContainer-DesktopHomePage.js'
import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'

let SuggestTypes = [
	{SuggestType: 'Genres'},
	{SuggestType: 'Ambiance'},

]
const DesktopHomePage = (props) => {
	//const { color } = props;
	return (            
			<div className={styles.DesktopHomePage} >
				<div>

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