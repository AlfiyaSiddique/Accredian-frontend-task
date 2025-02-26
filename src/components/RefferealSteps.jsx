import referral from "../assets/referral.png";
import { FaUserPlus } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import { IoBagRemove } from "react-icons/io5";
import { useContext } from "react";
import { FormContext } from "../../hooks/context";

function ReferralSteps() {
  const {isOpen, setOpen} = useContext(FormContext)
  return (
    <div className="bg-blue-100 py-10 px-4">
      <h2 className="text-center text-xl font-semibold mb-8">
        How Do I Refer?
      </h2>

      <div className="hidden md:block relative max-w-5xl mx-auto">
        <img src={referral} />
        <div className="absolute top-40 left-20">
          <FaUserPlus className="w-12 h-12 text-[#1A73E8] m-auto" />
          <p className="mt-2 w-[200px] text-center">
            Submit referrals easily via our website’s referral section.
          </p>
        </div>

        <div className="absolute top-40 left-[40%]">
          <BiSolidNotepad className="w-12 h-12 text-[#1A73E8] m-auto" />
          <p className="mt-2 w-[200px] text-center">
            Earn rewards once your referral joins an Accredian program.
          </p>
        </div>

        <div className="absolute top-40 right-20">
          <IoBagRemove className="w-12 h-12 text-[#1A73E8] m-auto" />
          <p className="mt-2 w-[200px] text-center">
            Referrer receives a bonus 30 days after program enrollment.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 p-6 md:hidden">
      <div className=" w-[40vw] m-auto flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg md:w-1/3">
        <FaUserPlus className="text-blue-500 text-4xl mb-4" />
        <p className="text-gray-700">Submit referrals easily via our website referral section.</p>
      </div>

      <div className="w-[40vw] m-auto flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg md:w-1/3">
        <BiSolidNotepad className="text-blue-500 text-4xl mb-4" />
        <p className="text-gray-700">Earn rewards once your referrals join the Accredian program.</p>
      </div>

      <div className="w-[40vw] m-auto flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg md:w-1/3">
        <IoBagRemove className="text-blue-500 text-4xl mb-4" />
        <p className="text-gray-700">Referrer receives a bonus 365 days after program enrollment.</p>
      </div>
    </div>

    <div className="text-center mt-8">
        <button  onClick={()=>setOpen(!isOpen)} className="bg-[#1A73E8] text-white px-6 py-3 rounded-lg">
          Refer Now
        </button>
      </div>
    </div>
  );
}

export default ReferralSteps;
