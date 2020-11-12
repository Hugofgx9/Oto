import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
//STYLE
import styles from './ComponentStyle/DesktopLMNav.module.scss';

const DesktopLMNav = () => {
	return (
			<div className={ styles.gridLMNav}>
                <h1 className={ clsx(styles.title, styles.HomeButon)}>
					<Link to="/">HOME</Link>
				</h1>
				<ul className={ styles.BibliothequeNav}>
					<li className={ styles.title3 }>
						Bibliothèque
						<ul className={ clsx(styles.title2, styles.separation) }>
							<li>favoris</li>
							<li>
								<Link to="/album">albums</Link>
							</li>
							<li>
								<Link to="/artist">artistes</Link>
							</li>
							<div className={ styles.rectangle }></div>
						</ul>
					</li>
				</ul>
				<ul className={ styles.PlaylistNav}>
					<li className={styles.title3}>
						Playlists
						<ul className={ clsx(styles.title2, styles.separation)}>
							<li>Rap US 2020</li>
							<div className={ styles.rectangle }></div>
						</ul>
					</li>
				</ul>
				<div className={styles.CCOnly}>
					<button className={styles.CCButon}><span className={styles.title2}></span>CC ONLY</button>
				</div>
			</div>
	);
}

export default DesktopLMNav;