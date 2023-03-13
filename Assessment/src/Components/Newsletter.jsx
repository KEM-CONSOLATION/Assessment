import React from 'react'

const Newsletter = () => {
  return (
    <div>
        <div className="  max-w-6xl mx-auto bg-slate-50 py-5 shadow-lg  rounded-lg border">
            <div className="  md:w-3/6 md:mx-auto mt-5 ">
                <h1 className=' text-center font-medium text-2xl py-3'>Publish a beautiful book</h1>
                <p className=' font-normal text-sm text-center text-slate-500'>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn.</p>
                <div className=" py-5 grid md:flex gap-3 mx-5">
                    <input type="email" placeholder=' Enter your email...' className=' w-full md:w-96 py-3 px-4 border border-black' />
                    <a href="#" className=' py-3 px-3  tracking-widest bg-black text-white rounded text-center md:text-left'>Get Started</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter