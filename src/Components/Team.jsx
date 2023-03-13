import {ProfileFillIcon} from '../assets/icons'
const Team = () => {
  return (
    <div>
        <div className=" max-w-6xl mx-auto">
            <div className=" ">
                <h1 className='text-center text-yellow-500 text-4xl font-semibold tracking-widest'>Our Team</h1>
                <p className='text-center text-black font-medium'>Meet Our Team</p>
            </div>
            <div className=" grid gap-5 sm:grid-cols-2 md:grid-cols-4 items-center place-items-center my-5">
                <div className=" text-center">
                    <div className=" bg-slate-200 rounded-full h-28 w-28 flex items-center justify-center overflow-hidden">
                        <ProfileFillIcon size={120} className=" object-fill" />
                    </div>
                    <h1 className=' font-medium'> John Doe</h1>
                    <p className=' font-light text-sm'>CEO, CO-Founder</p>
                </div>

                <div className=" text-center">
                    <div className=" bg-slate-200 rounded-full h-28 w-28 flex items-center justify-center overflow-hidden">
                        <ProfileFillIcon size={120} className=" object-fill" />
                    </div>
                    <h1 className=' font-medium'> John Doe</h1>
                    <p className=' font-light text-sm'>CEO, CO-Founder</p>
                </div>

                <div className=" text-center">
                    <div className=" bg-slate-200 rounded-full h-28 w-28 flex items-center justify-center overflow-hidden">
                        <ProfileFillIcon size={120} className=" object-fill" />
                    </div>
                    <h1 className=' font-medium'> John Doe</h1>
                    <p className=' font-light text-sm'>CEO, CO-Founder</p>
                </div>

                <div className=" text-center">
                    <div className=" bg-slate-200 rounded-full h-28 w-28 flex items-center justify-center overflow-hidden">
                        <ProfileFillIcon size={120} className=" object-fill" />
                    </div>
                    <h1 className=' font-medium'> John Doe</h1>
                    <p className=' font-light text-sm'>CEO, CO-Founder</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team