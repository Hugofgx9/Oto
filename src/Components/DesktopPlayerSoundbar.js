import React from 'react';
import soundbuton from '../img/sound.svg';

//styles
import styles from './ComponentStyle/DesktopPlayerSoundbar.module.scss';

const DesktopPlayerSoundbar = () => {
	return (
        <div className={ styles.soundbar}>
            <img src={soundbuton} alt="soundbuton" />
        </div>
    );
}

export default DesktopPlayerSoundbar;