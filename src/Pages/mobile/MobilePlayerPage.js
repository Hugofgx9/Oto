import React from 'react';
import clsx from 'clsx';

import styles from '@pages/PagesStyle/MobilePlayerPage.module.scss';
import MobileButton from '@components/mobile/MobileButton.js';



const MobilePlayerPage = (props) => {
    const { trackImg, likeIc, repeatIc, shuffleIc } = props
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
                    <img></img>
                </div>
                <div>
                    
                </div>
            </div>
            <div className={styles.downPart}>
                <div className={styles.controler}>
                    <div className={styles.btnControlers}>
                        <button className={styles.Btn}>
                            like
                        </button>
                        <button className={styles.Btn}>
                            shuffle
                        </button>
                        <button className={styles.Btn}>
                            repeat
                        </button>
                    </div>
                    
                    <div></div>
                </div>
                <div className={styles.player}>
                    <div className={styles.buttons}>
                        <button className={styles.playBtn}>
                            <img src="/static/media/precedent.svg" alt="playbuton"></img>
                        </button>
                        <button className={styles.playBtn}>
                            <img src="/static/media/play.9fa67a5e.svg" alt="playbuton"></img>
                        </button>
                        <button className={styles.playBtn}>
                            <img src="/static/media/suivant.svg" alt="playbuton"></img>
                        </button>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.expiredBar}>

                        </div>
                    </div>

                </div>

                <div>
                    
                </div>

            </div>

        </div>
    )
}

export default MobilePlayerPage; 