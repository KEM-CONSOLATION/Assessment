const HeroSection = () => {
  return (
    <div className=" max-w-6xl mx-auto py-5 items-center place-items-center md:mx-20">
        <div className=" grid grid-cols-1 items-center place-items-center my-5 mt-10 md:flex md:items-start md:justify-between">
            <div className=" order-2 md:-order-none mt-10 w-5/6 md:w-3/6">
                <h1 className=" text-3xl md:text-4xl tracking-widest"><span className=" text-yellow-500 font-medium">Writers</span>,Readers and <span className=" text-slate-300 font-extralight">Reviewers</span></h1>
                <p className=" tracking-widest text-slate-300 text-sm mt-10">A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.</p>

                <div className=" mt-16 grid md:flex gap-5 md:gap-0 font-semibold text-center w-72 md:w-full">
                    <a href="#" className=" px-10 bg-black rounded-md py-3 text-white md:mr-20">Let's Get Started</a>
                    <a href="#" className="  px-10  bg-blue-50 border-black border-2 rounded-md py-3 text-black">Guide Me</a>
                </div>
            </div>

            <div className=" flex flex-col items-center justify-center mb-10 md:mb-0 h-72 w-72 mx-auto md:mx-0 md:h-96 md:w-96 rounded-full bg-yellow-600 relative">
              
            </div>
        </div>
    </div>
  )
}

export default HeroSection