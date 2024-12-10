import styles from './Header.module.css';

const name = 'CRIPTO';

const Header = () => {
	return <header className={styles.header}> {name}</header>;
};
export default Header;
