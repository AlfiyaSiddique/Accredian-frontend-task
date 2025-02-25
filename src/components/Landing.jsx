import logo from "../assets/logo.png"
import { FaChevronDown } from 'react-icons/fa'; 

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    {/* Navigation */}
    <nav className="bg-white shadow-sm">
      <div className='text-center bg-[#1A73E826] p-4 text-xl font-medium'>
      Navigate your ideal career path with tailored expert advice
      <span className='text-[#1A73E8] font-semibold ml-4'>Contact Expert</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
        <div className='w-[20%] flex justify-between'>
             <div className="flex-shrink-0">
            <img className="h-8 w-auto" src={logo} alt="Accredian Logo" />
          </div>
          <button className="bg-[#1a73e8] hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium">
             Courses  <FaChevronDown className='inline'/>
            </button>
        </div> 
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Refer & Earn</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Resources</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <button className="bg-[#eaedf1] cursor-pointer px-4 py-2 rounded-md text-sm font-medium">
              Login
            </button>
            <button className="bg-[#1a73e8] hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium">
              Try for free 
            </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

   </div>
  )
}

export default Landing
