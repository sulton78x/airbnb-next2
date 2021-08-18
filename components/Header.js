import { useState } from 'react'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon, UsersIcon } from '@heroicons/react/solid'
import {motion} from 'framer-motion'
// react-date-range
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useRouter } from 'next/dist/client/router'

import { DateRangePicker } from 'react-date-range'

const Header = ({ placeholder }) => {

    const [searchInput, setSearchInput] = useState("")

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const [noOfGuests, setNoOfGuests] = useState(1)

    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
        <header className="sticky z-50 top-0 p-5 bg-white grid grid-cols-3 shadow-md md:px-10">
            <div className="relative flex justify-center items-center h-10 cursor-pointer my-auto" onClick={() => router.push('/')}>
                <Image src="https://links.papareact.com/qd3" alt="Image" layout="fill" objectFit="contain" objectPosition="left" />
            </div>
            <div className='flex items-center rounded-full py-2 md:border-2 md:shadow-sm'>
                <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='flex-grow pl-5 bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none' placeholder={placeholder || 'enter your search...'} />
                <SearchIcon className='hidden md:inline-flex h-8 p-2 bg-red-400 text-white rounded-full cursor-pointer md:mx-2' />
            </div>
            <div className='flex space-x-4 items-center justify-end'>
                <motion.p animate={{}} className='hidden md:inline cursor-pointer'>Become a host</motion.p>
                <GlobeAltIcon className='h-6 cursor-pointer' />

                <div className='flex items-center space-x-2 p-2 rounded-full border-2'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker 
                      ranges={[selectionRange]}
                      minDate={new Date()}
                      onChange={handleSelect}
                      rangeColors={["FD5B62"]}
                    />

                    <div className='flex justify-between text-gray-900 items-center border-b mb-2'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-6 cursor-pointer' />
                        <input type="number" className='w-12 pl-2 ml-2 outline-none border rounded-md text-red-400 font-semibold' value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} min={1} />
                    </div>

                    <div className='flex'>
                        <button className='flex-grow bg-gray-300 text-gray-900 font-semibold py-1 rounded-lg mx-3' 
                        onClick={() => setSearchInput('')}>Cancel</button>
                        <button className='flex-grow bg-red-400 text-gray-100 font-semibold py-1 rounded-lg mx-3' onClick={search}>Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
