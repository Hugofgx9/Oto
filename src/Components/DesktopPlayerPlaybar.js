import React from 'react';
import playbuton from '../img/play.svg';

//styles
import styles from './ComponentStyle/DesktopPlayerPlaybar.module.scss';

const DesktopPlayerPlaybar = () => {
	return (
        <div className={ styles.playbar}>
            <img src={playbuton} alt="playbuton" />
        </div>
    );
}

export default DesktopPlayerPlaybar;