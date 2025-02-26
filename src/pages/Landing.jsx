import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ReferralSteps from "../components/RefferealSteps"
import ReferralBenefits from "../components/ReferralBenefits"
import FAQs from "../components/FAQs"
import Footer from "../components/Footer"
import { Form } from "../components/Form"
import { FormContext } from "../../hooks/context"
import { useContext } from "react"

const Landing = () => {
  const {isOpen, setOpen} = useContext(FormContext)
  return (
    <div className="min-h-screen">
    <Navbar/>
    <Hero/>
    <ReferralSteps/>
    <ReferralBenefits/>
    <FAQs/>
    <Footer/>
    <Form isOpen={isOpen} onClose={setOpen}/>
   </div>
  )
}

export default Landing
