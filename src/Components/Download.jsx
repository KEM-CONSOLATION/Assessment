import {AppsFillIcon, GooglePlayFillIcon} from '../assets/icons'
const Download = () => {
  return (
    <div className=' bg-yellow-100'>
        <div className=" max-w-6xl mx-auto py-10 ">
            <div className=" md:w-3/6 mx-10">
                <h1 className=' text-2xl md:text-3xl font-medium py-3'>Download App for Exciting Deals</h1>
                <p className=' font-normal text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae error ad eligendi officia assumenda est nam aspernatur tempore tenetur.</p>
                
                {/* Links */}
                <div className=" flex items-center mt-5">
                    <a href="#" className=" px-1 sm:px-2 md:px-5 bg-white shadow-lg rounded-md py-3 mr-5 md:mr-10 text-blue-500 font-medium "> <GooglePlayFillIcon className=' inline-flex'/> Google Play</a>
                    <a href="#" className="px:2 sm:px-3 md:px-5  bg-black py-3 rounded-md text-white font-medium shadow-lg"> <AppsFillIcon className=' inline-flex' />  App Store</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download