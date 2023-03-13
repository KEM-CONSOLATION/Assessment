// import AuthorsImage from '../assets/AuthorsImage.jpeg'
import BookCover from '../assets/BookCover.jpeg'

const Author = () => {
  return (
    <div className=" max-w-6xl mx-auto border-t md:border-none pt-5 md:pt-0 md:mt-20">
        <div className="  mx-2 md:mx-auto text-center md:w-2/4">
            <h1 className=" font-semibold md:font-bold text-yellow-500 text-3xl md:text-4xl mb-2">Our Author</h1>
            <p className=' text-sm md:text-xl text-slate-700'>A creative hub for over 150,000 authors <br /> We can help any author with their literary endeavor.</p>
        </div>

        <div className=" grid gap-5 sm:grid sm:gap-2 sm:mx-5 sm:grid-cols-2 md:flex md:justify-between items-center place-items-center my-10">
          <div className=" w-80 md:w-96 shadow-lg  px-5 py-5 bg-white">
            <img src={BookCover} alt="" srcset="" className=' py-2' />
            <p className=' text-yellow-500 font-medium'>Jane Doe</p>
            <p className=' font-extralight text-sm text-slate-500 py-2 mb-3'>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn.</p>
            <a href="#" className=' bg-slate-700 px-7 py-3 rounded text-white'>Read More</a>
          </div>

          <div className=" w-80 md:w-96 shadow-lg  px-5 py-5 bg-white">
            <img src={BookCover} alt="" srcset="" className=' py-2' />
            <p className=' text-yellow-500 font-medium'>Jane Doe</p>
            <p className=' font-extralight text-sm text-slate-500 py-2 mb-3'>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn.</p>
            <a href="#" className=' bg-slate-700 px-7 py-3 rounded text-white'>Read More</a>
          </div>

          <div className=" w-80 md:w-96 shadow-lg  px-5 py-5 bg-white">
            <img src={BookCover} alt="" srcset="" className=' py-2' />
            <p className=' text-yellow-500 font-medium'>Jane Doe</p>
            <p className=' font-extralight text-sm text-slate-500 py-2 mb-3'>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn.</p>
            <a href="#" className=' bg-slate-700 px-7 py-3 rounded text-white'>Read More</a>
          </div>
        </div>
        
    </div>  
  )
}

export default Author