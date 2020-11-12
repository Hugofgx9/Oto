import React from 'react';
import clsx from 'clsx';
import styles from '@components/mobile/style/MobileThinLine.module.scss';
//import { Link } from 'react-router-dom';


const MobileThinLine = (props) => {
	const {className} = props;
	return (
		<hr className={ clsx(styles.thinLine, className) }/>
	);
}

export default MobileThinLine; 