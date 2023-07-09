import igniteLogo from '../assets/img/ignite-logo.svg'
import styles from '../assets/css/Header.module.css'

export function Header(){
    return (
        <header className={ styles.header }>
            <img src={ igniteLogo } alt="Logotipo do Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}