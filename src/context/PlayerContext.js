import { createContext, useState, useMemo } from 'react';

const context = createContext();

const PlayerProvider = (props) => {
	const { children } = props;
	const [isPlay, setIsPlay] = useState(false);

	const contextValue = useMemo(() => ({
		isPlay,
		setIsPlay
	}),[isPlay, setIsPlay])

	return (
		<context.Provider value={contextValue}>
			{ children }
		</context.Provider>
	)
}
export const PlayerContext = context;

export default PlayerProvider;