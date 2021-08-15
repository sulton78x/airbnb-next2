import Image from 'next/image'

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image src="https://links.papareact.com/0fm" alt="Image" layout="fill" objectFit="cover" />

            <div className='absolute top-1/2 w-full text-center'>
                <p>Not sure where to go? Perfect.</p>
                <button className='text-purple-500 px-10 py-4 rounded-full bg-white shadow-md transition duration-150 active:scale-90 hover:shadow-xl my-3 font-bold'>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
