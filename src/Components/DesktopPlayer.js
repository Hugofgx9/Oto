import React from 'react';

//styles
import styles from './ComponentStyle/DesktopPlayer.module.scss';

//COMPONENTS
import DesktopPlayerPlaybar from '@components/DesktopPlayerPlaybar.js'
import DesktopPlayerSoundbar from '@components/DesktopPlayerSoundbar.js'

const DesktopPlayer = () => {
	return (
        <div className={ styles.DesktopPBGrid}>
            <div></div>
            <DesktopPlayerPlaybar/>
            <DesktopPlayerSoundbar/>
        </div>
    );
}
export default DesktopPlayer;