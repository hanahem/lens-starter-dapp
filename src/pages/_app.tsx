import '@rainbow-me/rainbowkit/styles.css'
import '../globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from 'src/apollo'
import AppWrapper from '@components/UI/AppWrapper'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { APP_NAME, IS_MAINNET } from 'src/constants'
import { UserProvider } from '@context/UserContext'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { publicProvider } from 'wagmi/providers/public'

function MyApp({ Component, pageProps }: AppProps) {
  const { chains, provider } = configureChains(
    [IS_MAINNET ? chain.polygon : chain.polygonMumbai],
    [publicProvider()]
  )

  const { connectors } = getDefaultWallets({
    appName: APP_NAME,
    chains,
  })

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  })

  const toastOptions = {
    error: {
      style: {
        background: '#FF5728',
        border: 'none',
        color: 'white',
        fontSize: '10px',
      },
      icon: null,
    },
    success: {
      style: {
        background: '#28FF6F',
        border: 'none',
        color: 'white',
        fontSize: '10px',
      },
      icon: null,
    },
  }

  return (
    <div className="h-screen w-screen bg-[url('/assets/gradient-bg.png')] dark:bg-[url('/assets/dark-gradient-bg.png')]">
      <Head>
        <title>{APP_NAME}</title>

        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta name="theme-color" content="#00d272" />
        <meta name="msapplication-navbutton-color" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="#00d272" />
        <meta name="pple-mobile-web-app-status-bar-style" content="#00d272" />
      </Head>
      <Toaster position="top-center" toastOptions={toastOptions} />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider modalSize="compact" chains={chains}>
          <ApolloProvider client={client}>
            <UserProvider>
              <AppWrapper>
                <Component {...pageProps} />
              </AppWrapper>
            </UserProvider>
          </ApolloProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  )
}

export default MyApp
