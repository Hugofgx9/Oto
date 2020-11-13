import clsx from 'clsx';
import React, { useState } from 'react';

//SVG
import playbutton from '@src/assets/img/play.svg';
import pausebutton from '@src/assets/img/pause.svg';
import homebutton from '@src/assets/img/home_white.svg';
import queuebutton from '@src/assets/img/queue_white.svg';
import searchbutton from '@src/assets/img/search_white.svg';

//styles
import styles from '@components/mobile/style/MobilePlaybar.module.scss';

const MobilePlaybar = () => {

    const [isPlay, setPlay] = useState(false);

    return (
        <div className={ styles.MobilePlaybar}>

            <div className={styles.leftPart}>
                <button onClick={() => setPlay(!isPlay)} className={ styles.playButton} >
                    { isPlay ? <img src={pausebutton} alt="pause" /> : <img src={playbutton} alt="playbutton"/> }
                </button>
                {/* <img className={ styles.playButton} src={playbutton} alt="playbuton" /> */}
                <img className={ styles.cover} src = "https://cdn.hmv.com/r/w-1280/hmv/files/71/71d9cbc7-3bc0-44a5-9bb3-fa491bf9b694.jpg" alt = ""/>
            </div>
            <div className = {styles.rightPart}>
                <span className={ clsx(styles.titlePlayedTrack, styles.corps)}>
                    On The Turning Away
                </span>
            
                <span className={ clsx(styles.artistPlayedTrack, styles.corps)}>
                    Pink Floyd
                </span>
            
                <div className={styles.button}>
                    <img className={styles.homebutton} src={homebutton} alt="homebutton" />
                    <img className={styles.searchbutton} src={searchbutton} alt="searchbutton" />
                    <img className={styles.queuebutton} src={queuebutton} alt="queuebutton" />

                </div>
            </div>
        </div>
    );
}
export default MobilePlaybar;
