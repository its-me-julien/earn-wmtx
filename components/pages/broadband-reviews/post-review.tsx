'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBullhorn, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import RatingField from './review/RatingField';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    overallRating: 1,
    serviceRating: 1,
    pricingRating: 1,
    speedRating: 1,
    feedback: '',
    recommend: '',
    name: '',
    city: '',
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
        body: JSON.stringify({ ...formData, captchaToken }),
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
          recommend: '',
          name: '',
          city: '',
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
    <div className="container mx-auto py-12 px-6">
      {/* Two-Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Column 1 */}
        <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Review World Mobile Broadband</h2>
          <p className="text-white mb-6">
            Help people make smarter choices with their internet provider service. Your honest
            feedback can guide others to make informed decisions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-[#F6642D] text-xl"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">Information</h3>
                <p className="text-gray-300">State your claim and give an example.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faBullhorn}
                className="text-[#F6642D] text-xl"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">Facts</h3>
                <p className="text-gray-300">Slanderous rants aren&#39;t helpful.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#F6642D] text-xl"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">Relevance</h3>
                <p className="text-gray-300">Leave out prices; they vary by location.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Post a Review</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <RatingField
              label="Your Overall Rating"
              name="overallRating"
              value={formData.overallRating}
              onChange={handleRatingChange}
            />
            <RatingField
              label="Service"
              name="serviceRating"
              value={formData.serviceRating}
              onChange={handleRatingChange}
            />
            <RatingField
              label="Pricing"
              name="pricingRating"
              value={formData.pricingRating}
              onChange={handleRatingChange}
            />
            <RatingField
              label="Speed"
              name="speedRating"
              value={formData.speedRating}
              onChange={handleRatingChange}
            />

            <div>
              <label htmlFor="feedback" className="block text-lg font-semibold text-white mb-2">
                Feedback <span className="text-[#D42E58]">*</span>
              </label>
              <textarea
                id="feedback"
                name="feedback"
                placeholder="Write your feedback here"
                value={formData.feedback}
                onChange={handleInputChange}
                required
                className="textarea textarea-bordered w-full bg-gray-800 text-white border-[#F6642D] focus:ring-[#F6642D]"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-2">
                Would you recommend World Mobile? <span className="text-[#D42E58]">*</span>
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`btn ${
                    formData.recommend === 'Yes' ? 'bg-[#F6642D] text-white' : 'btn-outline'
                  } hover:bg-[#F6642D]`}
                  onClick={() => setFormData({ ...formData, recommend: 'Yes' })}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`btn ${
                    formData.recommend === 'No' ? 'bg-[#F6642D] text-white' : 'btn-outline'
                  } hover:bg-[#F6642D]`}
                  onClick={() => setFormData({ ...formData, recommend: 'No' })}
                >
                  No
                </button>
              </div>
            </div>

            {['name', 'city', 'email'].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-lg font-semibold text-white mb-2"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}{' '}
                  {field !== 'email' && <span className="text-[#D42E58]">*</span>}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  placeholder={`Enter your ${field}`}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="input input-bordered w-full bg-gray-800 text-white border-[#F6642D] focus:ring-[#F6642D]"
                  required={field !== 'email'}
                />
              </div>
            ))}

            <ReCAPTCHA
              sitekey="6LfrRqoqAAAAAB5QBGNidW0WHHZIgocAHTibFnLi"
              onChange={handleCaptchaChange}
            />

            <button
              type="submit"
              className="btn btn-primary w-full bg-gradient-to-r from-[#F6642D] to-[#D42E58] hover:brightness-125 text-white"
            >
              Post Review
            </button>
          </form>
        </div>
      </div>

      {/* Status Message */}
      {status && (
        <p className="mt-6 text-center text-lg font-semibold">
          {status.startsWith('Error') ? (
            <span className="text-[#D42E58]">{status}</span>
          ) : (
            <span className="text-green-500">{status}</span>
          )}
        </p>
      )}
    </div>
  );
};

export default ReviewForm;
