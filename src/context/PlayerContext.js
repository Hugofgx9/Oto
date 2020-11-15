import { createContext, useState, useMemo } from 'react';

const context = createContext();

const PlayerProvider = (props) => {
	const { children } = props;
	const [isPlay, setIsPlay] = useState(false);
	const [currentlyPlaying, setCurrentlyPlaying] = useState({
		track: {name: "", uri: ""},
		artist: {name: "", uri: ""},
		img: "https://images-na.ssl-images-amazon.com/images/I/710ZkhTLgJL._SY355_.jpg",
	});

	const contextValue = useMemo(() => ({
		isPlay,
		setIsPlay,
		currentlyPlaying,
		setCurrentlyPlaying,
	}),[isPlay, setIsPlay, currentlyPlaying, setCurrentlyPlaying])

	return (
		<context.Provider value={contextValue}>
			{ children }
		</context.Provider>
	)
}
export const PlayerContext = context;

export default PlayerProvider;