import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import Navbar from '@/components/Navbar/Navbar'
import Providers from './providers'
import { FormProvider } from '@/contexts/FormContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Providers> {/* Wrap your components with the Providers component */}
        <FormProvider>
          <Navbar />
          <div className="content">
            <Component {...pageProps} />
          </div>
        </FormProvider>
      </Providers>
      {/* <Footer /> */}
    </div>
  )
}
