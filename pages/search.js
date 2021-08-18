import Footer from "../components/Footer"
import Header from "../components/Header"
import { useRouter } from 'next/dist/client/router'
// Format ISO date string
import { format } from 'date-fns'
import InfoCard from "../components/InfoCard"

const Search = ({ searchResults }) => {

    const router = useRouter()
    const {location, noOfGuests, startDate, endDate} = router.query

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedendDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedendDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

            <main className="flex">
                <section className="flex-grow px-6 pt-14">
                    <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} number of guests...</p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    
                    <div className='hidden lg:inline-flex mb-5 space-x-4 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>

                    {searchResults.map(({img, title, description, location, star, price, total}, index) => (
                        <InfoCard 
                            key={index}
                            img={img}
                            title={title}
                            description={description}
                            location={location}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz")
        .then(response => response.json())

    return {
        props: {
            searchResults,
        }
    }
}
