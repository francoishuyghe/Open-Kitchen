import React from 'react'
import '@/styles/global.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <div>
      <h1 className='text-3xl font-bold'>Open Kitchen V1</h1>
      <Component {...pageProps} />
    </div>
}