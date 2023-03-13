import {BookOpenFillIcon} from '../assets/icons';

const Features = () => {
  return (
    <div className=" max-w-6xl mx-auto">
        <div className=" grid mx-5 md:mx-0">
            <h1 className=" font-medium md:font-bold text-yellow-500 text-4xl mb-2">Features</h1>
            <p>Not Sure where to Start? <span><a href="#" className=" text-yellow-500">Guide Me</a></span> is the perfect place to begin.</p>
            
            {/* Card Section */}
            <div className="grid md:grid-cols-3 gap-10 my-10 md:my-20">

                {/* Card 1 */}
                <div className=" bg-slate-100 py-8 px-5 rounded-2xl shadow-md relative">
                    <p className=" font-semibold mb-5">Not written yet?</p>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>
                    <div className=" py-6 px-6 bg-white rounded-full absolute top-[-20px] right-[-15px] border">
                        <BookOpenFillIcon className=' text-yellow-500' />    
                    </div>         
                </div>

                {/* Card 2 */}
                <div className=" bg-slate-200 py-8 px-5 rounded-2xl shadow-md relative">
                    <p className=" font-semibold mb-5">Thinking of Self-Publishing?</p>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>
                    <div className=" py-6 px-6 bg-white rounded-full absolute top-[-20px] right-[-15px] border">
                        <BookOpenFillIcon className=' text-yellow-500' />    
                    </div>         
                </div>

                {/* Card 3 */}
                <div className=" bg-slate-100 py-8 px-5 rounded-2xl shadow-md relative">
                    <p className=" font-semibold mb-5">Previously Published?</p>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe nobis nemo sunt! Explicabo, distinctio.</p>
                    <div className=" py-6 px-6 bg-white rounded-full absolute top-[-20px] right-[-15px] border">
                        <BookOpenFillIcon className=' text-yellow-500' />  
                    </div>         
                </div>
            </div>
        </div>
        
    </div>  
  )
}

export default Features