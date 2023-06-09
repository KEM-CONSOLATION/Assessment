import {DoubleQuotesLIcon} from '../assets/icons'

const Testimonials = () => {
  return (

    <div className=" bg-slate-50">
        <div className=" max-w-6xl mx-auto border-t md:border-none py-5 md:pt-0 md:mt-20">
            {/* Header */}
            <div className=" mx-2 md:mx-auto text-center md:w-3/4  py-8">
                <h1 className=" font-bold text-yellow-500 text-3xl md:text-4xl mb-2">Testimonials</h1>
                <p className=' text-sm md:text-lg text-slate-900'>Hear how we are helping businesses grow by taking away the hassels  </p>
            </div>

            {/* Card Section */}
            <div className=" grid gap-10 sm:grid sm:gap-15 sm:mx-5 sm:grid-cols-2 md:flex md:justify-between items-center place-items-center my-10 mx-5">   

             {/*Card1  */}
                <div className=" w-full md:w-3/4 shadow-lg  px-5 py-5 bg-white relative">
                    <div className=" flex">
                        <DoubleQuotesLIcon  className=' text-yellow-500' size={96}/>
                        <p className=' font-extralight text-sm text-slate-500 '>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. </p>
                    </div>
                    <p className=' text-yellow-500 font-medium text-center'>Jane Doe</p>
                    
                    <div class="w-16 overflow-hidden inline-block absolute bottom-[-43px]">
                        <div class=" h-11 w-11 bg-white -rotate-45 transform origin-top-left"></div>
                    </div>
                </div>
                
             {/*Card2  */}
                <div className=" w-full md:w-3/4 shadow-lg  px-5 py-5 bg-white relative">
                    <div className=" flex">
                        <DoubleQuotesLIcon  className=' text-yellow-500' size={96}/>
                        <p className=' font-extralight text-sm text-slate-500 '>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. </p>
                    </div>
                    <p className=' text-yellow-500 font-medium text-center'>Jane Doe</p>
                    <div class="w-16 overflow-hidden inline-block absolute bottom-[-43px]">
                        <div class=" h-11 w-11 bg-white -rotate-45 transform origin-top-left"></div>
                    </div>
                </div>

             {/*Card3  */} 
                <div className=" w-full md:w-3/4 shadow-lg  px-5 py-5 bg-white relative">
                    <div className=" flex">
                        <DoubleQuotesLIcon  className=' text-yellow-500' size={96}/>
                        <p className=' font-extralight text-sm text-slate-500 '>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. </p>
                    </div>
                    <p className=' text-yellow-500 font-medium text-center'>Jane Doe</p>
                    <div class="w-16 overflow-hidden inline-block absolute bottom-[-43px]">
                        <div class=" h-11 w-11 bg-white -rotate-45 transform origin-top-left"></div>
                    </div>
                </div>                

            </div>
        
        </div> 
    </div>
  )
}

export default Testimonials