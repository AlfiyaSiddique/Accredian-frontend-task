import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ReferralSteps from "../components/RefferealSteps"
import ReferralBenefits from "../components/ReferralBenefits"
import FAQs from "../components/FAQs"
import Footer from "../components/Footer"

const Landing = () => {
  return (
    <div className="min-h-screen">
    <Navbar/>
    <Hero/>
    <ReferralSteps/>
    <ReferralBenefits/>
    <FAQs/>
    <Footer/>
   </div>
  )
}

export default Landing
