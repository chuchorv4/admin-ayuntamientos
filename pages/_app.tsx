import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth'
import Dashboard from '../layouts/Dashboard'

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    </SessionProvider>
  )
}

export default MyApp
