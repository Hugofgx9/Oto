import React from 'react';
import clsx from 'clsx';
//import { Link } from 'react-router-dom';
import styles from '@pages/PagesStyle/MobileHomePage.module.scss';
import MobileThinLine from '@components/mobile/MobileThinLine.js';


let categories = [
	{title: 'Genre'},
	{title: 'Ambiance'},
	{title: 'Classement'}
]

let genreEl = [
	{title: 'Techno', img: 'https://images.unsplash.com/photo-1496208612508-eb52fba7d94e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
	{title: 'Ambiance', img: 'https://images.unsplash.com/photo-1554114835-7586b5ca72be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
	{title: 'Pop', img: 'https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
	{title: 'Chant', img: 'https://images.unsplash.com/photo-1556296569-44d434fb28d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
	{title: 'Techno', img: 'https://images.unsplash.com/photo-1496208612508-eb52fba7d94e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
	{title: 'Ambiance', img: 'https://images.unsplash.com/photo-1554114835-7586b5ca72be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
	{title: 'Pop', img: 'https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
	{title: 'Chant', img: 'https://images.unsplash.com/photo-1556296569-44d434fb28d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'}
]

const MobileHomePage = () => {
	return (
		<div className={ clsx(styles.greyLight, styles.homePage)}>
			<div>

				{	categories.map(( cat, index) => {
						return (
							<div className={ styles.section} key={index} >
								<h2 className={ clsx(styles.title2)}>{cat.title}</h2>
								<MobileThinLine className={ styles.thinLine} />
								<div className={ styles.scrollWrap}>
									<ul>

									{ genreEl.map(( genre, index) => {
											return (
												<li key={index}> 
													<img src={genre.img} alt=""/>
													<h4 className={ clsx(styles.grey3)}>
														{genre.title} 							
													</h4>
												</li>
											)
										})
									}
									
									</ul>
								</div>
							</div>
						)
					})
				}

			</div>
		</div>
	);
}

export default MobileHomePage; 

