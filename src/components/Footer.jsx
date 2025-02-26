import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerlogo from "../assets/footer-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#282828] text-white py-10 px-10 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between">
          <img alt="logo" src={footerlogo} className="md:mb-4" />
          <div className="text-center md:text-left">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-sm mt-2">Speak with our Learning Advisor</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-4 pt-6 grid lg:grid-cols-3 gap-10 md:grid-cols-1">
          {/* Programs Section */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Programs</h3>
            <ul className="space-y-2">
              {[
                "Data Science & AI",
                "Product Management",
                "Business Analytics",
                "Digital Transformation",
                "Business Management",
                "Project Management",
                "Strategy & Leadership",
                "Senior Management",
                "Fintech",
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-center cursor-pointer hover:text-gray-400">
                  {item} <span className="text-xl">+</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <p>Email us (For Data Science Queries): admissions@accredian.com</p>
            <p>Email us (For Product Management Queries): pm@accredian.com</p>
            <p>Data Science Admission Helpline: +91 9099532092</p>
            <p>Product Management Admission Helpline: +91 9629318095</p>
            <p>Enrolled Student Helpline: +91 7990253077</p>
            <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurgaon, Haryana 122015</p>

            {/* Social Media Icons */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex gap-4 mt-3">
                <FaFacebook className="w-5 h-5 cursor-pointer hover:text-gray-400" />
                <FaTwitter className="w-5 h-5 cursor-pointer hover:text-gray-400" />
                <FaInstagram className="w-5 h-5 cursor-pointer hover:text-gray-400" />
                <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-gray-400" />
              </div>
            </div>
          </div>

          {/* Accredian Section */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Accredian</h3>
            <ul className="space-y-2">
              {[
                "About",
                "Career",
                "Blog",
                "Admission Policy",
                "Referral Policy",
                "Privacy Policy",
                "Terms of Service",
                "Master FAQs",
              ].map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Accredian, a Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
