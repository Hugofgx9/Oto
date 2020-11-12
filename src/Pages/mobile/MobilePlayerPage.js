import React from 'react';
import clsx from 'clsx';

import styles from '@pages/PagesStyle/MobilePlayerPage.module.scss';
import MobileButton from '@components/MobileButton.js';



const MobilePlayerPage = (props) => {
    const { trackImg, likeIc, repeatIc, shuffleIc } = props
    return(
        <div className={styles.playerPage}>
            <div className={styles.upPart}>
                <div>
                    blz
                </div>
                <div>
                    bla
                </div>
                <div>
                    behs
                </div>
            </div>
            <div className={styles.midPart}>
                <div>
                    blz
                </div>
                <div className={styles.trackInfo} >
                    <div className={styles.title}> trackTitle </div>
                    <div className={styles.artist}> trackArtist </div>
                    <img></img>
                </div>
                <div>
                    behs
                </div>
            </div>
            <div className={styles.downPart}>
                <div className={styles.controler}>
                    <div className={ clsx( styles.playBtn) }>
						<MobileButton>Play</MobileButton>
					</div>
                    <div className={ clsx( styles.playBtn) }>
						<MobileButton>Shuffle</MobileButton>
					</div>
                    <div className={ clsx( styles.playBtn) }>
						<MobileButton>Repeat</MobileButton>
					</div>
                    <div></div>
                </div>
                <div>
                    ho
                </div>
                <div>
                    da
                </div>

            </div>

        </div>
    )
}

export default MobilePlayerPage; 