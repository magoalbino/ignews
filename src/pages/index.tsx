import { GetStaticProps } from 'next'
import Head from 'next/head'

import styles from './home.module.scss'
import {SubscribeButton} from "../components/SubscribeButton";
import {stripe} from "../services/stripe";

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
          <title>Home | ig.news</title>
        </Head>
        <main className={styles.contentContainer}>
            <section className={styles.hero}>
                <span>👏 Hey, welcome</span>
                <h1>News about the <span>React</span> world.</h1>
                <p>
                    Get access to all the publications <br/>
                    <span>for { product.amount } month</span>
                </p>

                <SubscribeButton priceId={product.priceId} />
            </section>

            <img src="/images/avatar.svg" alt="Girl coding"/>
        </main>
      </>
  )
}

/**
 * stripe.com/docs/api (para o caso de fazer uma chamada http ou via axios
 */

export const getStaticProps: GetStaticProps = async () => {
    const price = await stripe.prices.retrieve('price_1JPtRdAykmDA0OAEHLpZIFxd', {
        expand: ['product'] //não está sendo usado aqui, mas é uma funcionalidade interessante da api (expande a requisição para trazer todos os dados do produto relacionado a esse preço
    })

    const product = {
        priceId: price.id,
        amount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price.unit_amount / 100), //salva sempre em centavos. o bom é que não precisa lidar com decimais
    }

    return {
        props: {
            product,
        },
        revalidate: 60 * 60 * 24, // 24 horas (o revalidade utiliza o tempo em segundos)
    }
}
