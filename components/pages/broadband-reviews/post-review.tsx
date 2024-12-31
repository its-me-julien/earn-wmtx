'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBullhorn, faCheckCircle, faExclamationCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import RatingField from './review/RatingField';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    overallRating: 5,
    serviceRating: 5,
    pricingRating: 5,
    speedRating: 5,
    feedback: '',
    recommend: 'Yes',
    name: '',
    city: '',
    zipcode: '',
    email: '',
  });
  const [status, setStatus] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (name: string, value: number) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    if (!captchaToken) {
      setStatus('Please complete the CAPTCHA');
      return;
    }

    try {
      const response = await fetch('/.netlify/functions/submitReview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          captchaToken,
          reviewType: 'broadband', // Specify the type of review
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Review submitted successfully!');
        setFormData({
          overallRating: 1,
          serviceRating: 1,
          pricingRating: 1,
          speedRating: 1,
          feedback: '',
          recommend: 'Yes',
          name: '',
          city: '',
          zipcode: '',
          email: '',
        });
        setCaptchaToken(null);
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('An unexpected error occurred.');
    }
  };

  return (
    <div className="container mx-auto py-10 px-6">
      {/* Two-Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Column 1 */}
        <div className="bg-gradient-to-r from-[#5A2FBA] to-[#F6642D] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-aeonik-bold text-white mb-6">
            Review <span className="text-[#FFFFFF]">World Mobile Broadband</span>
          </h2>
          <p className="text-lg font-aeonik-regular text-white mb-4">
            Help people make smarter choices with their internet provider service. Your honest
            feedback can guide others to make informed decisions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faInfoCircle} className="text-white text-xl" />
              <p className="text-base text-gray-200">
                <strong>Information:</strong> State your claim and give an example.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faBullhorn} className="text-white text-xl" />
              <p className="text-base text-gray-200">
                <strong>Facts:</strong> Slanderous rants aren&#39;t helpful.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xl" />
              <p className="text-base text-gray-200">
                <strong>Relevance:</strong> Leave out prices; they vary by location.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-aeonik-bold text-white mb-4">Post a Review</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Ratings Section */}
            <div className="space-y-4">
              <RatingField
                label="Overall Rating"
                name="overallRating"
                value={formData.overallRating}
                onChange={handleRatingChange}
              />
              <RatingField
                label="Pricing"
                name="pricingRating"
                value={formData.pricingRating}
                onChange={handleRatingChange}
              />
              <RatingField
                label="Service"
                name="serviceRating"
                value={formData.serviceRating}
                onChange={handleRatingChange}
              />
              <RatingField
                label="Speed"
                name="speedRating"
                value={formData.speedRating}
                onChange={handleRatingChange}
              />
            </div>

            {/* Feedback Section */}
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Write your feedback here..."
              value={formData.feedback}
              onChange={handleInputChange}
              required
              className="textarea textarea-bordered w-full h-28 bg-gray-800 text-white text-sm focus:ring-[#5A2FBA] focus:border-[#5A2FBA]"
            />

            {/* Recommendation Section */}
            <div>
              <p className="text-sm font-semibold text-white mb-2">
                Would you recommend World Mobile?
              </p>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`btn ${
                    formData.recommend === 'Yes' ? 'bg-[#F6642D] text-white' : 'btn-outline'
                  } hover:bg-[#F6642D] w-32`}
                  onClick={() => setFormData({ ...formData, recommend: 'Yes' })}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`btn ${
                    formData.recommend === 'No' ? 'bg-[#F6642D] text-white' : 'btn-outline'
                  } hover:bg-[#F6642D] w-32`}
                  onClick={() => setFormData({ ...formData, recommend: 'No' })}
                >
                  No
                </button>
              </div>
            </div>

            {/* Name, City, Zipcode */}
            <div className="space-y-3">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="input input-bordered w-full bg-gray-800 text-white text-sm focus:ring-[#5A2FBA] focus:border-[#5A2FBA]"
              />
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                placeholder="Zip Code"
                value={formData.zipcode}
                onChange={handleInputChange}
                className="input input-bordered w-full bg-gray-800 text-white text-sm focus:ring-[#5A2FBA] focus:border-[#5A2FBA]"
              />
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="input input-bordered w-full bg-gray-800 text-white text-sm focus:ring-[#5A2FBA] focus:border-[#5A2FBA]"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email (optional)"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full bg-gray-800 text-white text-sm focus:ring-[#5A2FBA] focus:border-[#5A2FBA]"
              />
              <div className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400 cursor-pointer">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  title="Your email will not be published or used to contact you."
                />
              </div>
            </div>

            {/* CAPTCHA */}
            <ReCAPTCHA
              sitekey="6LfrRqoqAAAAAB5QBGNidW0WHHZIgocAHTibFnLi"
              onChange={handleCaptchaChange}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-[#F6642D] to-[#D42E58] text-white hover:brightness-125"
            >
              Post Review
            </button>
          </form>
        </div>
      </div>

      {/* Status Message */}
      {status && (
        <div
          className={`mt-4 text-center text-sm font-semibold p-4 rounded-lg ${
            status.startsWith('Error')
              ? 'bg-[#D42E58] text-white'
              : 'bg-green-500 text-white'
          }`}
        >
          {status.startsWith('Error') ? (
            <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
          ) : (
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
          )}
          {status}
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
