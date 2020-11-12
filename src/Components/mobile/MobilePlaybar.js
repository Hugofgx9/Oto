import React from 'react';
import clsx from 'clsx';

//SVG
import playbuton from '@src/assets/img/play.svg';

//styles
import styles from '@components/mobile/style/MobilePlaybar.module.scss';

const MobilePlaybar = () => {
	return (
        <div className={ styles.MobilePlaybar}>

            <img className={ styles.cover} src = "https://cdn.hmv.com/r/w-1280/hmv/files/71/71d9cbc7-3bc0-44a5-9bb3-fa491bf9b694.jpg" alt = ""
            />

            <div className={ clsx(styles.titlePlayedTrack, styles.corps)}>
                On The Turning Away
            </div>
            <div className={ clsx(styles.artistPlayedTrack, styles.corps)}>
                Pink Floyd
            </div>
            <div className={styles.playbuton}>
                <img src={playbuton} alt="playbuton" />
            </div>

        </div>
    );
}
export default MobilePlaybar;