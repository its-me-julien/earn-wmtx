"use client";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import sanitizeHtml from "sanitize-html";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faBullhorn, faCheckCircle, faExclamationCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import RatingField from "./review/RatingField";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    overallRating: 5,
    serviceRating: 5,
    pricingRating: 5,
    speedRating: 5,
    feedback: "",
    recommend: "Yes",
    name: "",
    city: "",
    zipcode: "",
    email: "",
  });
  const [status, setStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeHtml(value) });
  };

  const handleRatingChange = (name: string, value: number) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    if (!captchaToken) {
      setStatus("Please complete the CAPTCHA");
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/submitReview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          captchaToken,
          reviewType: "broadband", // Specify the type of review
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Review submitted successfully!");
        setFormData({
          overallRating: 1,
          serviceRating: 1,
          pricingRating: 1,
          speedRating: 1,
          feedback: "",
          recommend: "Yes",
          name: "",
          city: "",
          zipcode: "",
          email: "",
        });
        setCaptchaToken(null);
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("An unexpected error occurred.");
    }
  };

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": "World Mobile Broadband",
    },
    "author": {
      "@type": "Person",
      "name": formData.name || "Anonymous",
    },
    "reviewBody": formData.feedback,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": formData.overallRating,
      "bestRating": 5,
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Service",
        "value": formData.serviceRating,
      },
      {
        "@type": "PropertyValue",
        "name": "Pricing",
        "value": formData.pricingRating,
      },
      {
        "@type": "PropertyValue",
        "name": "Speed",
        "value": formData.speedRating,
      },
    ],
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": formData.city || "Unknown",
        "postalCode": formData.zipcode || "Unknown",
      },
    },
    "recommendation": formData.recommend,
  };

  return (
    <div className="container mx-auto py-10 px-6">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Two-Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Column 1 */}
        <div className="bg-gradient-to-r from-[#5A2FBA] to-[#F6642D] p-8 rounded-lg shadow-lg space-y-6">
  {/* Introduction */}
  <h2 className="text-3xl font-aeonik-bold text-white">
    Share Your Experience with{" "}
    <span className="text-[#FFFFFF]">World Mobile Broadband</span>
  </h2>
  <p className="text-lg font-aeonik-regular text-gray-200 leading-relaxed">
    Your feedback matters. It helps others make smarter decisions when choosing an internet provider. 
    Share your honest experience and help us build a trusted community of World Mobile users.
  </p>

  {/* Why Leave a Review */}
  <div className="space-y-4">
    <h3 className="text-2xl font-aeonik-bold text-white">Why Leave a Review?</h3>
    <p className="text-base text-gray-200 leading-relaxed">
      Reviews provide valuable insights into what kind of customer experience people can expect from 
      World Mobile. Every review is written by real customers and hosted independently on World Mobile Club. 
      Our community-powered platform ensures transparency and fairness.
    </p>
    <p className="text-base text-gray-200 leading-relaxed">
      Many users visit World Mobile Club to research brands before making a purchase. Your detailed and 
      truthful feedback can guide others in making an informed decision about their internet provider.
    </p>
  </div>

  {/* Tips for Writing a Great Review */}
  <div className="space-y-4">
    <h3 className="text-2xl font-aeonik-bold text-white">Tips for Writing a Great Review</h3>
    <div className="space-y-4">
      {/* Tip 1 */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faInfoCircle} className="text-white text-2xl" />
        <p className="text-base text-gray-200">
          <strong className="text-white">Be Specific:</strong> Include details like speed, reliability, and customer service. 
          Specific examples help others understand your experience.
        </p>
      </div>
      {/* Tip 2 */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faBullhorn} className="text-white text-2xl" />
        <p className="text-base text-gray-200">
          <strong className="text-white">Stay Honest:</strong> Share truthful feedback about what you liked 
          and where improvements could be made.
        </p>
      </div>
      {/* Tip 3 */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faCheckCircle} className="text-white text-2xl" />
        <p className="text-base text-gray-200">
          <strong className="text-white">Talk About Your Journey:</strong> Describe your experience from start to finish, 
          from setup to usage. Clear and detailed reviews are the most helpful.
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Column 2 */}
        <div className="bg-[rgba(68,61,72,0.19)] bg-opacity-90 p-6 rounded-lg shadow-lg">
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
                    className={`btn border-0 ${
                    formData.recommend === "Yes" ? "bg-[#F6642D] text-white" : "btn-outline"
                    } hover:bg-[#F6642D] w-32`}
                    onClick={() => setFormData({ ...formData, recommend: "Yes" })}
                >
                    Yes
                </button>
                <button
                    type="button"
                    className={`btn border-0 ${
                    formData.recommend === "No" ? "bg-[#F6642D] text-white" : "btn-outline"
                    } hover:bg-[#F6642D] w-32`}
                    onClick={() => setFormData({ ...formData, recommend: "No" })}
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
              className="btn w-full bg-gradient-to-r from-[#F6642D] to-[#D42E58] text-white hover:brightness-125 border-0"
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
            status.startsWith("Error")
              ? "bg-[#D42E58] text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {status.startsWith("Error") ? (
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
