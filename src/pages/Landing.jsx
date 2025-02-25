import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    {/* Navigation */}
    <Navbar/>

   {/* Hero Section */}
  <Hero/>
 


   </div>
  )
}

export default Landing
