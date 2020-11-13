import React from 'react';
//import clsx from 'clsx';

import styles from '@pages/PagesStyle/MobilePlayerPage.module.scss';
//import MobileButton from '@components/mobile/MobileButton.js';

import playbuton from '@src/assets/img/play.svg';
//import pause from '@src/assets/img/pause.svg';
import suivant from '@src/assets/img/suivant.svg';
import precedent from '@src/assets/img/precedent.svg';
import boucle from '@src/assets/img/boucle.svg';
import aleatoire from '@src/assets/img/aleatoire.svg';


const MobilePlayerPage = (props) => {
    //const { trackImg, likeIc, repeatIc, shuffleIc } = props
    return(
        <div className={styles.playerPage}>
            <div className={styles.upPart}>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </div>
            <div className={styles.midPart}>
                <div>
                    
                </div>
                <div className={styles.trackInfo} >
                    <div className={styles.title}> trackTitle </div>
                    <div className={styles.artist}> trackArtist </div>
                    <img alt=""></img>
                </div>
                <div>
                    
                </div>
            </div>
            <div className={styles.downPart}>
                <div className={styles.controler}>
                    <div className={styles.btnControlers}>
                        <button className={styles.Btn}>
                            <img src={precedent} alt="playbuton"></img>
                        </button>
                        <button className={styles.Btn}>
                            <img src={aleatoire} alt="playbuton"></img>
                        </button>
                        <button className={styles.Btn}>
                            <img src={boucle} alt="playbuton"></img>
                        </button>
                    </div>
                    
                    <div></div>
                </div>
                <div className={styles.player}>
                    <div className={styles.buttons}>
                        <button className={styles.playBtn}>
                            <img src={precedent} alt="playbuton"></img>
                        </button>
                        <button className={styles.playBtn}>
                            <img src={playbuton} alt="playbuton"></img>
                        </button>
                        <button className={styles.playBtn}>
                            <img src={suivant} alt="playbuton"></img>
                        </button>
                    </div>
                    <div className={ styles.slidecontainer }>
                        <input type="range" min="1" max="100" className={ styles.slider }/>
                     </div>
                    
                    

                </div>

                <div>
                    
                </div>

            </div>

        </div>
    )
}

export default MobilePlayerPage; 