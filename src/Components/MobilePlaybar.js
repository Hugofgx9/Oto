import React from 'react';
//styles
import styles from './ComponentStyle/MobilePlaybar.module.scss';
import clsx from 'clsx';

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

        </div>
    );
}
export default MobilePlaybar;