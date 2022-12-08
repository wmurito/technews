import { GetStaticProps } from 'next';

import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe';

import styles from './home.module.scss'

// blog
//client-side {comentarios}
// server-side {}
// static-side generation {conteudo do post do blog}

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
    <Head>
    <title> Home | Tech News</title>
    </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome </span>
          <h1> News loren ipsun <span>Loren</span> Ipsun.</h1>
          <p> 
            Tenha acesso assinando <br/>
            <span> por  {product.amount} mes</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>

        </section>
        <img src="/images/avatar.png" className={styles.logo} alt=" girl coding " />
      </main>
      </>
    )
}



export const getStaticProps: GetStaticProps = async () => { 
    const price = await stripe.prices.retrieve('price_1M3OkRIOAjqdbsWuI328s1dZ')
    const product = {
      priceId: price.id,
      amount: new Intl.NumberFormat('en-Us',{
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount / 100)
    };
    return {
      props: {
        product,
      },
      revalidate: 60 * 60 * 24, //24hours
    }
}