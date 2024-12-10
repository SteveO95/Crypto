/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { CoinsContext } from '../../context/coinsContext';
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins';
import styles from './FilterBlock.module.css';

const FilterBlock = ({ setCoins }) => {
	const coinsContext = useContext(CoinsContext);
	const { coins } = coinsContext;
	const { setValue, value } = useFilterCoins(setCoins, coins);

	// const inputRef = useRef(null);
	// console.log(inputRef);
	return (
		<div className={styles.FilterBlock}>
			<input
				// ref={inputRef}
				onChange={e => setValue(e.target.value)}
				value={value}
				className={styles.Input}
				type='text'
				placeholder='bitcoin'
			/>
		</div>
	);
};

export default React.memo(FilterBlock);
