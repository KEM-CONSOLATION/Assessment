import React from 'react'

const Steps = () => {
  return (
    <div className=" max-w-6xl mx-auto">
        <div className=" grid mx-5 md:mx-0">
            <h1 className="font-medium md:font-bold text-yellow-500 text-4xl mb-2">Steps</h1>

            {/* Section1 */}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                <div className=" bg-white py-16 px-5 rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-slate-400">
                    <p className=" font-semibold mb-5 ">Not written yet?</p>
                    <p className=' text-sm tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>       
                </div>

                <div className=" py-5  px-5 ">
                    <p className=" font-semibold mb-5">Work with the industry’s top professionals</p>
                    <p className=' tracking-widest text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>   
                </div>
            </div>
            
            {/* Section2 */}
            <div className="grid md:grid-cols-2 gap-10 my-5">
                <div className=" py-5  px-5 order-2">
                    <p className=" font-semibold mb-5">Find the perfect partner for your project</p>
                    <p className=' tracking-widest text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>   
                </div>

                <div className=" md:order-2 bg-white py-16 px-5 rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-slate-400">
                    <p className=" font-semibold mb-5 ">Work with the industry’s top professionals </p>
                    <p className=' text-sm tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>       
                </div>
            </div>

            {/* Section3 */}
            <div className="grid md:grid-cols-2 gap-10 my-5">
                <div className=" bg-white py-16 px-5 rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-slate-400">
                    <p className=" font-semibold mb-5 ">Not written yet?</p>
                    <p className=' text-sm tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>       
                </div>

                <div className=" py-5  px-5 ">
                    <p className=" font-semibold mb-5">Browse profiles, request for publisher</p>
                    <p className=' tracking-widest text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>   
                </div>
            </div>

            {/* Section4 */}
            <div className="grid md:grid-cols-2 gap-10 my-5">
                <div className=" py-5  px-5 order-2">
                    <p className=" font-semibold mb-5">Find the perfect partner for your project</p>
                    <p className=' tracking-widest text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>   
                </div>

                <div className=" md:order-2 bg-white py-16 px-5 rounded-tl-3xl rounded-br-3xl shadow-2xl shadow-slate-400">
                    <p className=" font-semibold mb-5 ">Work with the industry’s top professionals </p>
                    <p className=' text-sm tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>       
                </div>
            </div>
        </div>
        
    </div>  
  )
}

export default Steps