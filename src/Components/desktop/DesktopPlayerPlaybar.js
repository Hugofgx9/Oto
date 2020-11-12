import React from 'react';

//SVG
import playbuton from '@src/assets/img/play.svg';

//styles
import styles from '@components/desktop/style/DesktopPlayerPlaybar.module.scss';

const DesktopPlayerPlaybar = () => {
	return (
        <div className={ styles.playbar}>
            <img src={playbuton} alt="playbuton" />
        </div>
    );
}

export default DesktopPlayerPlaybar;