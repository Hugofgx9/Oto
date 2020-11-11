import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
//STYLE';
import styles from './ComponentStyle/DesktopLeftMenu.module.scss';
import DesktopInfoPlayer from '@components/DesktopInfoPlayer.js'

const DesktopLeftMenu = (props) => {
	return (
			<div className={ styles.styleDesktopLM }>
				<h1 className={ clsx(styles.title, styles.HomeButon)}><Link to="/">HOME</Link></h1>
				<ul className={ clsx(styles.title3, styles.gridchild) }>
					<li className={ styles.BibliothequeMenu}>Bibliothèque
						<ul className={ clsx(styles.title2, styles.BibliothequeSeparation) }>
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
					<li className={styles.PlaylistMenu}>Playlists
						<ul className={ clsx(styles.title2, styles.PlaylistSeparation)}>
							<li>Rap US 2020</li>
							<div className={ styles.rectangle }></div>
						</ul>
					</li>
				</ul>
				<div className={styles.CCOnly}>
					CC ONLY Futur Buton
				</div>
				<div className={styles.InfoPlayer}>
					<DesktopInfoPlayer/>
				</div>
				
			</div>
	);
}

export default DesktopLeftMenu;