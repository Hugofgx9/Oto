import React, {useState, useRef, useEffect} from 'react'; 
import gsap from 'gsap';
import styles from '@components/desktop/style/SearchDesktop.module.scss';
import clsx from 'clsx';

import MobileThinLine from '@components/mobile/MobileThinLine';

const SearchDesktop = () => {

	const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
	const [isResultContentOpen, setIsResultContentOpen] = useState(false);
	const searchBar = useRef(null);
	const textInput = useRef(null);
	const resultContent = useRef(null);

	//(?=.*[A-Za-z]).text(textInput.current.value)
	const regexText = /^(?=.*[A-Za-z1-9$@$!%*#=+\(\)\^?&"'])/;

	const showResults = () => {
		if (isSearchBarOpen && !isResultContentOpen && !!textInput.current.value.match(regexText)) {
			gsap.to(resultContent.current, .3, {
				display: 'block',
				height: '200px',
			});
			setIsResultContentOpen(true);
		} else if (isResultContentOpen && !textInput.current.value.match(regexText)) {
			gsap.to(resultContent.current, .3, {
				display: 'none',
				height: 0,
			});
			setIsResultContentOpen(false);
		}
	}

  //pb isSearchBarOpen ne change qu'après la fonction executée ?????

  useEffect(() => {
		const openSearchBar = () => {
  		let tl = gsap.timeline();
  		tl.to(searchBar.current, .4, {
  			width: '50vw',
  		})
			.to(textInput.current, {
  			display: 'inline',
  		})
		}

		const closeSearchBar = () => {
  		let tl = gsap.timeline();
  		if (isResultContentOpen) {
	  		tl.to(resultContent.current, .2, {
	  			height: 0,
	  			display: 'none',
	  		})
  		}
			tl.to(textInput.current, 0, {
  			display: 'none',
  		})
  		.to(searchBar.current, .4, {
  			width: '20vw',
  		})
  		setIsResultContentOpen(false)
  	}

		const toggleSearchBar = () => {
			if(isSearchBarOpen) {
				openSearchBar();
			} else {
				closeSearchBar()
			}
		}

  	toggleSearchBar();
  },[isSearchBarOpen, isResultContentOpen, setIsResultContentOpen])

	return (
		<div className={ clsx(styles.searchDesktop, styles.greyLight)} >
			<div ref={searchBar} className={ styles.bar }>
				<div className={ styles.barContent}>
					<button onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
									className={ clsx(styles.greyLight)}
					>
							Search
					</button>	
					<input onChange={() => showResults()}ref={textInput} className={styles.greyLight} type="text" placeholder="Search.."/>	
				</div>
				<MobileThinLine/>	
			</div>
			<div ref={resultContent} className={ styles.result}>
				
			</div>
		</div>
		)
}

export default SearchDesktop;