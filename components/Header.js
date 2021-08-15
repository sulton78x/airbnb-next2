import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon, UsersIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className="sticky z-50 top-0 p-5 bg-white grid grid-cols-3 shadow-md md:px-10">
            <div className="relative flex justify-center items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" alt="Image" layout="fill" objectFit="contain" objectPosition="left" />
            </div>
            <div className='flex items-center rounded-full py-2 md:border-2 md:shadow-sm'>
                <input type='text' className='flex-grow pl-5 bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none' placeholder='enter your search...' />
                <SearchIcon className='hidden md:inline-flex h-8 p-2 bg-red-400 text-white rounded-full cursor-pointer md:mx-2' />
            </div>
            <div className='flex space-x-4 items-center justify-end'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />

                <div className='flex items-center space-x-2 p-2 rounded-full border-2'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    )
}

export default Header
