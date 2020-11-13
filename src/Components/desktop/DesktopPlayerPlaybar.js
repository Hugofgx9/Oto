import React from 'react';

//SVG
import playbuton from '@src/assets/img/play.svg';
import pause from '@src/assets/img/pause.svg';
import suivant from '@src/assets/img/suivant.svg';
import precedent from '@src/assets/img/precedent.svg';
import boucle from '@src/assets/img/boucle.svg';
import aleatoire from '@src/assets/img/aleatoire.svg';

//styles
import styles from '@components/desktop/style/DesktopPlayerPlaybar.module.scss';

const DesktopPlayerPlaybar = () => {
	return (
        <div className={ styles.playbar}>
            <img src={boucle} alt="boucle" className={ styles.boucle}/>
            <img src={precedent} alt="precedent" className={ styles.precedent}/>
            <img src={playbuton} alt="playbuton" className={ styles.playbuton}/>
            {/* <img src={pause} alt="pause" /> */}
            <img src={suivant} alt="suivant" className={ styles.suivant}/>
            <img src={aleatoire} alt="aleatoire" className={ styles.aleatoire}/>
            <div className={ styles.slidecontainer }>
                <input type="range" min="1" max="100" className={ styles.slider }/>
            </div>
        </div>
    );
}

export default DesktopPlayerPlaybar;