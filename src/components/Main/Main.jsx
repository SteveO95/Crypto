/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import CoinsList from '../CoinsList/CoinsList';
import FilterBlock from '../FilterBlock/FilterBlock';
import styles from './Main.module.css';

const Main = ({ balance, setBalance, coins, setCoins }) => {
	// const filterExpensiveCoins = () => {
	// 	console.log('---func work');
	// 	return filteredCoins.filter(coin => coin.price > 1000);
	// };
	// const expensiveCoins = filterExpensiveCoins();
	// const expensiveCoins = useMemo(() => filterExpensiveCoins(), [filteredCoins]);

	return (
		<main className={styles.main}>
			<Card balance={balance} setBalance={setBalance} />
			<FilterBlock setCoins={setCoins} />
			{coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
		</main>
	);
};

export default Main;
