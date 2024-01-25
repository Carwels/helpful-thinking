import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Homepage from '@/components/Homepage/Homepage'
import Benefits from '@/components/Benefits/Benefits'
import Treatment from '@/components/Treatment/Treatment'
import Equip from '@/components/Equip/Equip'
import Help from '@/components/Help/Help'
import Faqs from '@/components/Faqs/Faqs'
import Footer from '@/components/Footer/Footer'
import Leader from '@/components/Leader/Leader'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Head>
        <title>Helpful Thinking</title>
        <meta name="description" content="Helpful Thinking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Homepage />
          <Benefits />
          <Treatment />
          <Equip />
          <Leader />
          <Help />
          <Faqs />
          <Footer />
        </div>
      </main>
    </>
  )
}
