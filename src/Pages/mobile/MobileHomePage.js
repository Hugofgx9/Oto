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
	{title: 'Techno', img: ''},
	{title: 'Ambiance', img: ''},
	{title: 'Pop', img: ''},
	{title: 'Chant', img: ''},
	{title: 'Techno', img: ''},
	{title: 'Ambiance', img: ''},
	{title: 'Pop', img: ''},
	{title: 'Chant', img: ''}
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

