import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ReferralSteps from "../components/RefferealSteps"
import ReferralBenefits from "../components/ReferralBenefits"

const Landing = () => {
  return (
    <div className="min-h-screen">
    <Navbar/>
    <Hero/>
    <ReferralSteps/>
    <ReferralBenefits/>
   </div>
  )
}

export default Landing
