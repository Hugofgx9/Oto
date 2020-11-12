import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from '@components/ComponentStyle/MobileButton.module.scss';


const MobileButton = (props) => {
const { children } = props;
	return (
		<button className={styles.MobileButton}> 
			{ children }
		</button>
	);
}

export default MobileButton;