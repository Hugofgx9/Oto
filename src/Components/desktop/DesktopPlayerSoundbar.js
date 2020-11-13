import React from 'react';
import soundbuton from '@src/assets/img/sound.svg';

//styles
import styles from '@components/desktop/style/DesktopPlayerSoundbar.module.scss';

const DesktopPlayerSoundbar = () => {
	return (
        <div className={ styles.soundbar}>
            <img src={soundbuton} alt="soundbuton" />
            <div className={ styles.slidecontainer }>
                <input type="range" min="1" max="100" className={ styles.slider }/>
            </div>
        </div>
    );
}

export default DesktopPlayerSoundbar;