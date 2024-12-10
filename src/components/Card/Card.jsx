import { WithRuBalance } from '../../helpers/hoc/withRuBalance';
import styles from './Card.module.css';
// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const Card = ({ balance, setBalance }) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardBlock}>
				<p>CRYPTO-FINANCE</p>
				<button onClick={setBalance}>Add money</button>
			</div>

			<div className={styles.cardBlock}>
				<p>SERGEY</p>
				<p>{balance} $</p>
			</div>
		</div>
	);
};
export default WithRuBalance(Card);
