import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import '@/app/globals.css'
import Image from 'next/image'
import logoLight from '@/public/img/logo-light.png'
import logoDark from '@/public/img/logo-dark.png'
// import 'nextra-theme-docs/style.css';

export const metadata = {
  title: {
    default: 'SkyFleet Dash',
    template: '%s | SkyFleet Dash',
  },
  description: 'SkyFleet Dash - The ultimate play-to-earn drone racing platform on BNB Smart Chain',
}

const Logo = (
  <div className="">
    <Image
      src={logoDark}
      alt="Skyfleet Dash Logo"
      className="max-h-5 w-auto hidden dark:flex"
    />
   <Image
      src={logoLight}
      alt="Skyfleet Dash Logo"
      className="max-h-5 w-auto inline-flex dark:hidden"
    />
  </div>
)
 
// const banner = <Banner storageKey="some-key">Skyfleet Dash 2.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={Logo}
    // ... Your additional navbar options
  />
)
const footer = <Footer>© {new Date().getFullYear()} Skyfleet Dash. All rights reserved.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase='https://github.com/shafimsp/skyfleetdash-tokenomics'
          feedback={{
            content: null,
            labels: '',
          }}
          editLink={null}
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}