import React, {useState, useRef, useEffect, useContext} from 'react'; 
import { Link } from "react-router-dom";
import gsap from 'gsap';
import clsx from 'clsx';
import { SpotifyContext } from '@components/SpotifyProvider';
import styles from '@components/desktop/style/SearchDesktop.module.scss';

import MobileThinLine from '@components/mobile/MobileThinLine';


const SearchDesktop = () => {

  const { spotifyApi } = useContext(SpotifyContext);
	const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
	const [isResultsContentOpen, setIsResultsContentOpen] = useState(false);
	const [artists, setArtists] = useState();
	const [albums, setAlbums] = useState();
	const [tracks, setTracks] = useState();
	const searchBar = useRef(null);
	const textInput = useRef(null);
	const resultsContent = useRef(null);
	const regexText = /^(?=.*[A-Za-z1-9$@$!%*#=+^?&"'])/;

	const showResultsSection = () => {
		if (isSearchBarOpen && !isResultsContentOpen && !!textInput.current.value.match(regexText)) {
			gsap.to(resultsContent.current, .3, {
				display: 'block',
				height: '200px',
			});
			setIsResultsContentOpen(true);
		} else if (isResultsContentOpen && !textInput.current.value.match(regexText)) {
			gsap.to(resultsContent.current, .3, {
				display: 'none',
				height: 0,
			});
			setIsResultsContentOpen(false);
		}
	}

	const getArtists = async () => {
		if (isResultsContentOpen) {
			const result = await spotifyApi.searchArtists(textInput.current.value, {limit: 3});
			setArtists(result.artists.items);
		}
	};

	const getAlbums = async () => {
		if (isResultsContentOpen) {
			const result = await spotifyApi.searchAlbums(textInput.current.value, {limit: 3});
			setAlbums(result.albums.items);
		}
	};

		const getTracks = async () => {
		if (isResultsContentOpen) {
			const result = await spotifyApi.searchTracks(textInput.current.value, {limit: 3});
			setTracks(result.tracks.items);
		}
	};

  useEffect(() => {
		const openSearchBar = () => {
  		let tl = gsap.timeline();
  		tl.to(searchBar.current, .4, {
  			width: 'calc(100vw - (220px + 2 * 30px)',
  		})
			.to(textInput.current, {
  			display: 'inline',
  		})
		}

		const closeSearchBar = () => {
  		let tl = gsap.timeline();
  		if (isResultsContentOpen) {
	  		tl.to(resultsContent.current, .2, {
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
  		setIsResultsContentOpen(false)
  	}

		const toggleSearchBar = () => {
			if(isSearchBarOpen) {
				openSearchBar();
			} else {
				closeSearchBar()
			}
		}

  	toggleSearchBar();
  },[isSearchBarOpen, isResultsContentOpen, setIsResultsContentOpen])

	return (
		<div className={ clsx(styles.searchDesktop, styles.greyLight)} >
			<div ref={searchBar} className={ styles.bar }>
				<div className={ styles.barContent}>
					<button onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
									className={ clsx(styles.greyLight)}
					>
							Rechercher
					</button>	
					{isSearchBarOpen && 
						<input onChange={() => {
																showResultsSection();
																getArtists();
																getAlbums();
																getTracks();
														}
										}
							ref={textInput} className={styles.greyLight} type="text" placeholder="un artist, un morceau, un album..."/>	
					}
				</div>
				<MobileThinLine/>	
			</div>
			<div ref={resultsContent} className={ clsx(styles.results) }>
				<ul className={styles.resultsContainer}>

					{artists && 
						<li className={styles.resultsSection}>
							<p className={ clsx(styles.title2)} >Artists</p>
								<ul className={styles.grey1}>
									{ artists.map((artist) => {
										return (
												<li key={artist.id}>
													<Link to={`/artist/${artist.id}`}>{artist.name}</Link>
												</li>
											)
									})}
								</ul>
								<MobileThinLine/>
						</li>
					}

					{albums && 
						<li className={styles.resultsSection}>
							<p className={ clsx(styles.title2)} >Albums</p>
							<ul className={styles.grey1}>
								{ albums.map((album) => {
									return (
											<li key={album.id}>
												<Link to={`/album/${album.id}`}>{album.name}</Link>
											</li>
										)
								})}
							</ul>
							<MobileThinLine/>
						</li>
					}

					{tracks && 
						<li className={styles.resultsSection}>
							<p className={ clsx(styles.title2)} >Morceaux</p>
							<ul className={styles.grey1}>
								{ tracks.map((track) => {
									return (
											<li key={track.id}>
												<Link to={`/album/${track.album.id}`}>{track.name}</Link>
											</li>
										)
								})}
							</ul>
							<MobileThinLine/>
						</li>
					}
				</ul>
				
			</div>
		</div>
		)
}

export default SearchDesktop;