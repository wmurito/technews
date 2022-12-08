import { LoginButton } from '../LoginButton';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ActiveLink } from './ActiveLink';

export function Header (){

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/" legacyBehavior>
                    <a><img src="/images/22.svg" className={styles.logo2} alt="imagem logo do projeto" />
                </a>
                </Link>
                <nav>
                    <ActiveLink  activeClassName={styles.active} href="/" legacyBehavior>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts" legacyBehavior>
                        <a>Posts</a>    
                    </ActiveLink> 
                    <ActiveLink activeClassName={styles.active} href="/about" legacyBehavior>
                        <a>About</a>    
                    </ActiveLink> 
                </nav>
                <LoginButton />
            </div>
        </header>
    )
}