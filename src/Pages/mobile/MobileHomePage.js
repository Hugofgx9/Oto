import React from 'react';
import clsx from 'clsx';
//import { Link } from 'react-router-dom';
import styles from '@pages/PagesStyle/MobileHomePage.module.scss';

let categories = [
	{title: 'Genre'},
	{title: 'Ambiance'},
	{title: 'Classement'}
]

let genreEl = [
	{title: 'Techno'},
	{title: 'Ambiance'},
	{title: 'Pop'},
	{title: 'Chant'}
]

const MobileHomePage = () => {
	return (
		<div className={ clsx(styles.greyLight, styles.homePage)}>

			{	categories.map(( cat, index) => {
					return (
						<div>
							<h2 className={ clsx(styles.title2)}>{cat.title}</h2>
							<ul>

							{ genreEl.map(( genre, index) => {
									return (
										<li key={index}> 
											<img src="" alt=""/>
											<h4 className={ clsx(styles.grey3)}>
												{genre.title} 							
											</h4>
										</li>
									)
								})
							}
							
							</ul>
						</div>
					)
				})
			}

		</div>
	);
}

export default MobileHomePage; 

