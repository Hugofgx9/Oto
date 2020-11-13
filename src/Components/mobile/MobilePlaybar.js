import React from 'react';
import clsx from 'clsx';

//SVG
import playbutton from '@src/assets/img/play.svg';
import homebutton from '@src/assets/img/home_white.svg';
import queuebutton from '@src/assets/img/queue_white.svg';
import searchbutton from '@src/assets/img/search_white.svg';

//styles
import styles from '@components/mobile/style/MobilePlaybar.module.scss';

const MobilePlaybar = () => {
    return (
        <div className={ styles.MobilePlaybar}>

           

            <div className={styles.leftPart}>
                <img className={ styles.playButton} src={playbutton} alt="playbuton" />
                <img className={ styles.cover} src = "https://cdn.hmv.com/r/w-1280/hmv/files/71/71d9cbc7-3bc0-44a5-9bb3-fa491bf9b694.jpg" alt = ""
                />
            </div>

            <div className = {styles.rightPart}>
                <span className={ clsx(styles.titlePlayedTrack, styles.corps)}>
                    On The Turning Away
                </span>
            
                <span className={ clsx(styles.artistPlayedTrack, styles.corps)}>
                    Pink Floyd
                </span>
            
                <div className={styles.button}>
                    <img src={homebutton} alt="homebutton" />
                    <img src={queuebutton} alt="queuebutton" />
                    <img src={searchbutton} alt="searchbutton" />

                </div>
            </div>

            

            
            

        </div>
    );
}
export default MobilePlaybar;
