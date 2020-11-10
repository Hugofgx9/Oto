import React from 'react';
import Suggestion from './ItemSuggestion-DesktopHomePage'

import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'

const DesktopHomePage = (props) => {
	//const { color } = props;
	return (
			<div className={styles.SuggestContainer} >
				<span className={styles.TitleContainer} > Suggestions </span>
				<div className={styles.SuggestList}>
					<Suggestion></Suggestion>
					<Suggestion></Suggestion>
					<Suggestion></Suggestion>
					<Suggestion></Suggestion>
				</div>
				
			</div>
	);
}

export default DesktopHomePage;