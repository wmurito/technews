import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut } from 'next-auth/react'

export function LoginButton (){
    const {data: session}  = useSession()

        console.log(session)

    return session ? (
        <button 
        className={styles.loginbutton}
        type= "button"
        onClick={()=> signOut()}
        >
            <FaGithub color='#04d361' />
            {session.user.name}
            <FiX color ="#737388" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
        className={styles.loginbutton}
        type= "button"
        onClick={()=> signIn ('github')}
        >
            <FaGithub color='#eba417' />
            Sign in with GitHub
        </button>
    );
}