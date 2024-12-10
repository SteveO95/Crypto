/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CoinsContext } from '../../context/coinsContext';
import styles from './CoinsList.module.css';

const CoinsList = () => {
	const coinsContext = useContext(CoinsContext);
	const { filteredCoins } = coinsContext;

	return (
		<ul className={styles.CoinsList}>
			{filteredCoins.map(coin => {
				return (
					<li className={styles.CoinItem} key={coin.uuid}>
						<div className={styles.CoinItemInfo}>
							<img
								className={styles.CoinItemLogo}
								src={coin.iconUrl}
								alt={coin.name}
							/>
							<p style={{ color: coin.color }}>{coin.name}/USD</p>
						</div>
						<div className={styles.CoinItemPrice}>
							<p style={{ color: coin.color }}>
								{(+coin.price).toFixed(2)} USD
							</p>
							<p style={{ color: coin.color }}>
								{(+coin.btcPrice).toFixed(2)} BTC
							</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
export default CoinsList;
