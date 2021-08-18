import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone | Sulton Tech.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from a server - API endpoint */}
          {/* ? - optionalChaining - to handle errors gracefully... */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({img, distance, location}, index) => (
              <SmallCard key={index} img={img} distance={distance} location={location} />
            ))}
          </div>
        </section>

        <section>
          <h2>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }, index) => (
              <MediumCard key={index} img={img} title={title} />
            ))}
          </div>
        </section>

          <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' description='wishlists created by Airbnb' buttonText='Get Inspired' />
      </main>

      <Footer />
    </div>
  )
}

// Static Rendering
// Needs to return the result cause all that's happening here happens on the server. b4 reaching the browser.
export async function getStaticProps() {
  // returns json with an array of objects.
   const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json())

   const cardsData = await fetch("https://links.papareact.com/zp1").then((res) => res.json())

   return {
     props: {
       exploreData,
       cardsData
     }
   }
}