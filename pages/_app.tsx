import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { DynaPuff } from 'next/font/google'

const dynapuff = DynaPuff({
  subsets: ['latin'],
  variable: '--font-dynapuff'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dynapuff.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}
