import { FaChevronRight } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { useContext } from "react";
import { FormContext } from "../../hooks/context";

const ReferralBenefits = () => {

    const {isOpen, setOpen} = useContext(FormContext)
  return (
    <div className="p-4 md:p-10">
      <h2 className="text-center text-xl md:text-2xl font-semibold">
        What Are The <span className="text-blue-500">Referral Benefits?</span>
      </h2>

      <div className="w-[70%] m-auto ">
        <div className=" flex flex-col md:flex-row mt-6 space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/4 rounded-lg shadow-2xl">
            <button className="w-full text-left flex font-semibold bg-blue-500 text-white justify-between rounded p-4">
              ALL PROGRAMS <FaChevronRight />
            </button>
            <ul className="mt-2 space-y-2 p-4">
              {[
                "Product Management",
                "Strategy & Leadership",
                "Business Management",
                "Fintech",
                "Senior Management",
                "Data Science",
                "Digital Transformation",
                "Business Analytics",
              ].map((category) => (
                <div key={category}>
                  <li
                    
                    className="hover:text-blue-500 cursor-pointer flex justify-between"
                  >
                    {category} <FaChevronRight />
                  </li>
                  <div className="my-2 w-[100%] bg-black h-[1px]"></div>
                </div>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-semibold"></div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Enrolled</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-300 peer-checked:bg-blue-500 rounded-full peer-checked:after:translate-x-4 after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:top-0.5 after:left-0.5 after:transition-all"></div>
                </label>
              </div>
            </div>

            <div className="overflow-x-auto bg-white shadow-xl rounded-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-gray-800">
                    <th className="text-left p-2 text-[#1350A0]">Programs</th>
                    <th className="p-2 border-x border-gray-300 text-[#1350A0]">
                      Referrer Bonus
                    </th>
                    <th className="p-2 border-x border-gray-300 text-[#1350A0]">
                      Referee Bonus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Professional Certificate Program in Product Management",
                      referrer: "₹ 7,000",
                      referee: "₹ 9,000",
                    },
                    {
                      name: "PG Certificate Program in Strategic Product Management",
                      referrer: "₹ 9,000",
                      referee: "₹ 11,000",
                    },
                    {
                      name: "Executive Program in Data Driven Product Management",
                      referrer: "₹ 10,000",
                      referee: "₹ 10,000",
                    },
                    {
                      name: "Executive Program in Product Management and Digital Transformation",
                      referrer: "₹ 10,000",
                      referee: "₹ 10,000",
                    },
                    {
                      name: "Executive Program in Product Management",
                      referrer: "₹ 10,000",
                      referee: "₹ 10,000",
                    },
                    {
                      name: "Advanced Certification in Product Management",
                      referrer: "₹ 10,000",
                      referee: "₹ 10,000",
                    },
                    {
                      name: "Executive Program in Product Management and Project Management",
                      referrer: "₹ 10,000",
                      referee: "₹ 10,000",
                    },
                  ].map((program, index) => (
                    <tr key={index} className="bg-white">
                      <td className="p-2 w-[400px] flex align-center">
                        <FaGraduationCap className="text-[#1A73E8] text-md" />{" "}
                        {program.name}
                      </td>
                      <td className="p-2 text-center border-x border-gray-300">
                        {program.referrer}
                      </td>
                      <td className="p-2 text-center border-x border-gray-300">
                        {program.referee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="text-gray-600 border border-gray-400 px-3 py-1 rounded flex items-center">
            Show More <span className="ml-1">▼</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button onClick={()=>setOpen(!isOpen)} className="bg-blue-500 text-white font-semibold py-2 px-6 rounded">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferralBenefits;
