// ReferralModal.jsx
import { useState } from 'react';
import PropTypes from "prop-types"

export const Form = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    refereeName: '',
    refereeEmail: '',
    refereePhone: '',
    courseInterest: '',
    referralNote: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const backendURL = import.meta.env.VITE_API_URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.referrerName.trim()) {
      newErrors.referrerName = 'Your name is required';
    }
    
    if (!formData.referrerEmail.trim()) {
      newErrors.referrerEmail = 'Your email is required';
    } else if (!emailRegex.test(formData.referrerEmail)) {
      newErrors.referrerEmail = 'Please enter a valid email';
    }
    
    if (formData.referrerPhone && !phoneRegex.test(formData.referrerPhone.replace(/[^\d]/g, ''))) {
      newErrors.referrerPhone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.refereeName.trim()) {
      newErrors.refereeName = "Friend's name is required";
    }
    
    if (!formData.refereeEmail.trim()) {
      newErrors.refereeEmail = "Friend's email is required";
    } else if (!emailRegex.test(formData.refereeEmail)) {
      newErrors.refereeEmail = 'Please enter a valid email';
    }
    
    if (formData.refereePhone && !phoneRegex.test(formData.refereePhone.replace(/[^\d]/g, ''))) {
      newErrors.refereePhone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.courseInterest.trim()) {
      newErrors.courseInterest = 'Please select a course of interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch(`${backendURL}/api/referrals`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json", // Sending JSON data
          },
          body: JSON.stringify(formData)
        });

        
        if (response.ok) {
          setSubmitStatus('success');
          setTimeout(() => {
            onClose(!isOpen);
            setFormData({
              referrerName: '',
              referrerEmail: '',
              referrerPhone: '',
              refereeName: '',
              refereeEmail: '',
              refereePhone: '',
              courseInterest: '',
              referralNote: ''
            });
            setSubmitStatus(null);
          }, 2000);
        } else {
          console.log(response)
          setSubmitStatus('error');
        }
      } catch (error) {
        console.log(error)
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className='absolute top-0 w-[100%] h-[500vh] bg-black opacity-50 z-20'></div>
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Refer a Friend</h2>
            <button
              onClick={()=>onClose(!isOpen)}
              className="cursot-pointer text-gray-400 hover:text-gray-500"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
              Your referral has been submitted successfully! We&apos;ll send an invitation to your friend soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
              There was an error submitting your referral. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Your Information</h3>
              
              <div>
                <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">Your Name *</label>
                <input
                  type="text"
                  id="referrerName"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${errors.referrerName ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2`}
                />
                {errors.referrerName && <p className="mt-1 text-sm text-red-600">{errors.referrerName}</p>}
              </div>
              
              <div>
                <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">Your Email *</label>
                <input
                  type="email"
                  id="referrerEmail"
                  name="referrerEmail"
                  // ReferralModal.jsx (continued)
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${errors.referrerEmail ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2`}
                />
                {errors.referrerEmail && <p className="mt-1 text-sm text-red-600">{errors.referrerEmail}</p>}
              </div>
              
              <div>
                <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700">Your Phone (Optional)</label>
                <input
                  type="tel"
                  id="referrerPhone"
                  name="referrerPhone"
                  value={formData.referrerPhone}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${errors.referrerPhone ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2`}
                />
                {errors.referrerPhone && <p className="mt-1 text-sm text-red-600">{errors.referrerPhone}</p>}
              </div>
              
              <div className="border-t pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Friend&apos;s Information</h3>
                
                <div>
                  <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">Friend&apos;s Name *</label>
                  <input
                    type="text"
                    id="refereeName"
                    name="refereeName"
                    value={formData.refereeName}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.refereeName ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2`}
                  />
                  {errors.refereeName && <p className="mt-1 text-sm text-red-600">{errors.refereeName}</p>}
                </div>
                
                <div>
                  <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">Friend&apos;s Email *</label>
                  <input
                    type="email"
                    id="refereeEmail"
                    name="refereeEmail"
                    value={formData.refereeEmail}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.refereeEmail ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2`}
                  />
                  {errors.refereeEmail && <p className="mt-1 text-sm text-red-600">{errors.refereeEmail}</p>}
                </div>
                
                <div>
                  <label htmlFor="refereePhone" className="block text-sm font-medium text-gray-700">Friend&apos;s Phone (Optional)</label>
                  <input
                    type="tel"
                    id="refereePhone"
                    name="refereePhone"
                    value={formData.refereePhone}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.refereePhone ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2`}
                  />
                  {errors.refereePhone && <p className="mt-1 text-sm text-red-600">{errors.refereePhone}</p>}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Course Information</h3>
                
                <div>
                  <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700">Course of Interest *</label>
                  <select
                    id="courseInterest"
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.courseInterest ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2`}
                  >
                    <option value="">Select a course</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="ux-design">UX/UI Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="product-management">Product Management</option>
                  </select>
                  {errors.courseInterest && <p className="mt-1 text-sm text-red-600">{errors.courseInterest}</p>}
                </div>
                
                <div>
                  <label htmlFor="referralNote" className="block text-sm font-medium text-gray-700">Personal Note (Optional)</label>
                  <textarea
                    id="referralNote"
                    name="referralNote"
                    rows="3"
                    value={formData.referralNote}
                    onChange={handleChange}
                    placeholder="Add a personal message to your friend"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button
              onClick={handleSubmit}
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Send Referral'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

Form.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  }
