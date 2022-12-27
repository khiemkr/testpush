// ** React Imports
import { ReactNode } from 'react'

// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Script from 'next/script'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports

import { defaultACLObj } from 'src/configs/acl'
import themeConfig from 'src/configs/themeConfig'

// ** Fake-DB Import
import 'src/@fake-db'

// ** Third Party Import
import { Toaster } from 'react-hot-toast'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import AclGuard from 'src/@core/components/auth/AclGuard'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import AuthGuard from 'src/@core/components/auth/AuthGuard'
import GuestGuard from 'src/@core/components/auth/GuestGuard'
import WindowWrapper from 'src/@core/components/window-wrapper'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Contexts
import { AuthProvider } from 'src/context/AuthContext'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

// css slider

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Web3

import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]

// Wagmi client
const { provider } = configureChains(chains, [walletConnectProvider({ projectId: 'f3e3c71b0968ed1bc1bb2db39bb13c38' })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains }),
  provider
})

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains)

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

type GuardProps = {
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  const setConfig = Component.setConfig ?? undefined

  const authGuard = Component.authGuard ?? true

  const guestGuard = Component.guestGuard ?? false

  const aclAbilities = Component.acl ?? defaultACLObj

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Market Place | Zomland</title>
        <meta
          name='description'
          content='Zomland is the first 3D GameFi Blockchain platform about "Zombie" universe where game players are free to create, collect and bid unique NFT items on Marketplace'
        />
        <meta name='keywords' content='Blockchain, GameFi 3D, GameFi 3D Blockchain, NFT, Community Zomland' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta
          name='description'
          content='Zomland is the first 3D GameFi Blockchain platform about "Zombie" universe where game players are free to create, collect and bid unique NFT items on Marketplace
'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://zomland-landing.vercel.app/' />
        <meta property='og:title' content='Zomland | Coming Soon' />
        <meta
          property='og:description'
          content='Zomland is the first 3D GameFi Blockchain platform about "Zombie" universe where game players are free to create, collect and bid unique NFT items on Marketplace
'
        />
        <meta
          property='og:image'
          content='https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/318407187_115677668041146_8275627593090588778_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=43mOSyM_-OUAX_fKDtu&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfA_UlYADFC9qrdHb2JYFf2vDaNkpriKgjzDLIKZFqoD4A&oe=63962A39'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://metatags.io/' />
        <meta property='twitter:title' content='Zomland | Coming Soon' />
        <meta
          property='twitter:description'
          content='Zomland is the first 3D GameFi Blockchain platform about "Zombie" universe where game players are free to create, collect and bid unique NFT items on Marketplace
'
        />
        <meta
          property='twitter:image'
          content='https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/318407187_115677668041146_8275627593090588778_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=43mOSyM_-OUAX_fKDtu&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfA_UlYADFC9qrdHb2JYFf2vDaNkpriKgjzDLIKZFqoD4A&oe=63962A39'
        />
      </Head>
      <Script src='/js/lord_icons.js' strategy='lazyOnload' />
      <AuthProvider>
        <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
          <SettingsConsumer>
            {({ settings }) => {
              return (
                <ThemeComponent settings={settings}>
                  <WindowWrapper>
                    <Guard authGuard={authGuard} guestGuard={guestGuard}>
                      <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard}>
                        {getLayout(<Component {...pageProps} />)}
                        <Web3Modal projectId='f3e3c71b0968ed1bc1bb2db39bb13c38' ethereumClient={ethereumClient} />
                      </AclGuard>
                    </Guard>
                  </WindowWrapper>
                  <ReactHotToast>
                    <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                  </ReactHotToast>
                </ThemeComponent>
              )
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </AuthProvider>
    </CacheProvider>
  )
}

export default App
