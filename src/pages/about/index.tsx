import Head from 'next/head';
import styles from './styles.module.scss'


export default function About(){
    return(
        <>
        <Head>
            <title> Posts | TechNews </title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <h1> Meu nome é Wellington Murito, sou estudande engenharia de software </h1>
            </div>
        </main>

        </>

    );
}