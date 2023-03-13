import {FacebookBoxFillIcon, InstagramLineIcon, TwitterFillIcon, LinkedinFillIcon} from '../assets/icons';

const Footer = () => {
  return (
    <div className=' bg-black py-5 md:py-20'>
        <div className=" max-w-6xl mx-auto ">
            <footer className=' grid place-items-start mx-5 md:flex md:items-start md:justify-between'>
                <div className=" text-white grid items-center md:mt-28 ">
                    <h1 className=' font-bold text-3xl text-yellow-600'><a href="#">Bookry</a></h1>
                    <div className=" flex items-center justify-between  gap-3 mt-3">
                        <a href="#" className=' hover:text-blue-500'><FacebookBoxFillIcon /></a>
                        <a href="#" className=' hover:text-pink-500'><InstagramLineIcon /></a>
                        <a href="#" className=' hover:text-blue-500'><TwitterFillIcon /></a>
                        <a href="#" className=' hover:text-blue-500'><LinkedinFillIcon /></a>
                    </div>
                    <p className=' text-sm font-extralight mt-10 italic'>Privacy | Terms @Bookry 2023</p>
                </div>

                <div className=" text-white">
                    <h1 className=' font-bold tracking-widest mt-5 md:mt-0 text-yellow-500'>MARKET PLACE:</h1>
                    <ul className=' mt-2 md:mt-5 font-extralight flex gap-2 md:block'>
                        <li className=' underline md:py-2 hover:text-yellow-500 text-xs md:text-sm'><a href="#">Authors</a></li>
                        <li className=' underline md:py-2 hover:text-yellow-500 text-xs md:text-sm'><a href="#">Publisher</a></li>
                        <li className=' underline md:py-2 hover:text-yellow-500 text-xs md:text-sm'><a href="#">Hire a Freelance</a></li>
                    </ul>
                </div>

                <div className=" text-white">
                    <h1 className=' font-bold tracking-widest mt-5 md:mt-0 text-yellow-500'>LEARN:</h1>
                    <ul className=' mt-2 md:mt-5 font-extralight flex gap-2 md:block'>
                        <li className=' underline md:py-2 hover:text-yellow-500 text-xs md:text-sm'><a href="#">Blog</a></li>
                        <li className=' underline md:py-2 hover:text-yellow-500 text-xs md:text-sm'><a href="#">Learning</a></li>
                        <li className=' underline md:py-2 hover:text-yellow-500 text-xs md:text-sm'><a href="#">Freelance</a></li>
                        <li className=' underline md:py-2 hover:text-yellow-500 text-xs md:text-sm'><a href="#">About</a></li>
                        <li className=' underline md:py-2 hover:text-yellow-500 text-xs md:text-sm'><a href="#">Team</a></li>
                        <li className=' underline md:py-2 hover:text-yellow-500 text-xs md:text-sm'><a href="#">Press</a></li>
                    </ul>
                </div>

                <div className=" text-white">
                    <h1 className=' font-bold tracking-widest mt-5 md:mt-0 text-yellow-500'>CONTACT US:</h1>
                    <ul className=' mt-2 md:mt-5 font-extralight'>
                        <li className='py-1 md:py-2 text-xs md:text-sm'><a href="#">No 5, Wuse 2, Zone 4 Abuja</a></li>
                        <li className='py-1 md:py-2 text-xs md:text-sm'><a href="#">+234 903 665 0603</a></li>
                        <li className='py-1 md:py-2 text-xs md:text-sm'><a href="#">bookry@domain.com</a></li>
                        <li className='py-1 md:py-2 text-xs md:text-sm'><a href="#">Monday - Sunday 9:00 - 18:00</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer