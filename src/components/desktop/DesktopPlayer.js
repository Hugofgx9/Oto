import React from 'react';

//styles
import styles from '@components/desktop/style/DesktopPlayer.module.scss';

//COMPONENTS
import DesktopPlayerPlaybar from '@components/desktop/DesktopPlayerPlaybar.js'
import DesktopPlayerSoundbar from '@components/desktop/DesktopPlayerSoundbar.js'

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