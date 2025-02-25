import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ReferralSteps from "../components/RefferealSteps"

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    <Navbar/>
    <Hero/>
    <ReferralSteps/>
   </div>
  )
}

export default Landing
