import React from 'react';
import Genre from '../Components/ItemSuggestion-DesktopHomePage.js'
import SuggestionsContainer from '../Components/SuggestionsContainer-DesktopHomePage.js'
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
                	
				</ul>

			</div>
	);
}

export default DesktopHomePage;