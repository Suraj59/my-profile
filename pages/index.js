import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <div id="branding"> 
            <h1>My Profile</h1> <h1>Suraj Gour</h1>
          </div>
        </p>
      </main>

      <Footer />
    </div>
  )
}
