'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
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
        body: JSON.stringify({ ...formData }),
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
    <div className="container mx-auto py-12 px-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Post a Review</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg p-8 max-w-xl mx-auto space-y-6"
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
          <label htmlFor="feedback" className="block text-lg font-semibold mb-2">
            Feedback <span className="text-red-500">*</span>
          </label>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Write your feedback here"
            value={formData.feedback}
            onChange={handleInputChange}
            required
            className="textarea textarea-bordered w-full text-black h-32"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">
            Would you recommend World Mobile? <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`btn ${
                formData.recommend === 'Yes' ? 'bg-[#F6642D]' : 'btn-outline'
              }`}
              onClick={() => setFormData({ ...formData, recommend: 'Yes' })}
            >
              Yes
            </button>
            <button
              type="button"
              className={`btn ${
                formData.recommend === 'No' ? 'bg-[#F6642D]' : 'btn-outline'
              }`}
              onClick={() => setFormData({ ...formData, recommend: 'No' })}
            >
              No
            </button>
          </div>
        </div>

        {['name', 'city', 'email'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-lg font-semibold mb-2">
              {field.charAt(0).toUpperCase() + field.slice(1)}{' '}
              {field !== 'email' && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              placeholder={`Enter your ${field}`}
              value={formData[field as keyof typeof formData]}
              onChange={handleInputChange}
              className="input input-bordered w-full text-black"
              required={field !== 'email'}
            />
          </div>
        ))}

        <ReCAPTCHA sitekey="6LfrRqoqAAAAAB5QBGNidW0WHHZIgocAHTibFnLi" onChange={handleCaptchaChange} />

        <button
          type="submit"
          className="btn btn-primary w-full bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] hover:brightness-125 text-white"
        >
          Post Review
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center font-semibold">
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
