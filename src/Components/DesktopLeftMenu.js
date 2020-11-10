import React from 'react';
import { Link } from 'react-router-dom';
//STYLE';
import styles from './ComponentStyle/DesktopLeftMenu.module.scss';

const DesktopLeftMenu = (props) => {
	return (
			<div className={ styles.styleDesktopLM }>
				<h1 className={styles.title}><Link to="/">HOME</Link></h1>
				<ul className={styles.title3}>
					<li>Bibliothèque
						<ul className={styles.title2}>
							<li>favoris</li>
							<li>
								<Link to="/album">album</Link>
							</li>
							<li>
								<Link to="/artist">artistes</Link>
							</li>
						</ul>
					</li>Playlists
						<ul className={styles.title2}>
							<li>Rap US 2020</li>
						</ul>
				</ul>
			</div>
	);
}

export default DesktopLeftMenu;