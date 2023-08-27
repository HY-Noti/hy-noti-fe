import GlobalNav from '@/components/nav/GlobalNav'
import '@/styles/globals.css'
import { CssBaseline, GeistProvider } from '@geist-ui/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline/>
      <GlobalNav />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
