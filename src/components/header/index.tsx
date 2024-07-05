import styles from './header.module.css'
import logimg from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export function Header(){
	return(
		<header className={styles.container}>
        <Link to={'/'}>
			<img className={styles.logimg} src={logimg} alt="Logo Cripto App" />
        </Link>
		</header>
	)
}