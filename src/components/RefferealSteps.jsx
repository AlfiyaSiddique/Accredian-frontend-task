import referral from "../assets/referral.png";
import { FaUserPlus } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import { IoBagRemove } from "react-icons/io5";

function ReferralSteps() {
  return (
    <div className="bg-blue-100 py-10 px-4">
      <h2 className="text-center text-xl font-semibold mb-8">
        How Do I Refer?
      </h2>

      <div className="relative max-w-5xl mx-auto">
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

      <div className="text-center mt-8">
        <button className="bg-[#1A73E8] text-white px-6 py-3 rounded-lg">
          Refer Now
        </button>
      </div>
    </div>
  );
}

export default ReferralSteps;
