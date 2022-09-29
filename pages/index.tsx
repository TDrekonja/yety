import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/About";
import Songs from "../components/Songs";

const Home: NextPage = () => {
  return (
    <div className="bg-[#000104] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Yety</title>

      </Head>

      <Header/>
        {/*hero*/}
        <section id="hero" className="snap-start">
            <Hero/>
        </section>
        <section id="hero" className="snap-center">
            <About/>
        </section>
        <section id="songs" className="snap-center">
            <Songs/>
        </section>
    </div>
  )
}

export default Home
