import { useCallback, useEffect, useState } from 'react';
import { getCoins } from './api/api.js';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { CoinsContext } from './context/coinsContext.jsx';

function App() {
	const [balance, setBalance] = useState(60000);
	const [coins, setCoins] = useState([]);
	const [filteredCoins, setFilteredCoins] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getCoins();
			setCoins(data.coins);
			setFilteredCoins(data.coins);
		};
		fetchData();
	}, []);
	const addBalance = useCallback(() => {
		setBalance(prev => prev + 1000);
	}, []);

	return (
		<>
			<CoinsContext.Provider value={{ coins, filteredCoins }}>
				<Header />
				<Main
					setCoins={setFilteredCoins}
					coins={coins}
					balance={balance}
					setBalance={addBalance}
					filteredCoins={filteredCoins}
				/>
			</CoinsContext.Provider>
		</>
	);
}

export default App;
