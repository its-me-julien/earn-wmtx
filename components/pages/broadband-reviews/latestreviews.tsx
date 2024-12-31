'use client';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface Review {
  id: string;
  overallRating: number;
  serviceRating: number;
  pricingRating: number;
  speedRating: number;
  feedback: string;
  name: string;
  city: string;
  createdAt: string;
}

const LatestBroadbandReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/.netlify/functions/getReviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ collection: 'broadband_review', limit: 5 }),
        });
        const data = await response.json();
        if (response.ok) {
          setReviews(data.reviews);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading reviews...</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-center text-white">No reviews available yet.</p>;
  }

  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-2xl font-aeonik-bold text-white mb-6">Latest Broadband Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg space-y-3"
          >
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faStar} className="text-[#F6642D]" />
              <p className="text-white text-lg font-semibold">
                {review.name || 'Anonymous'} ({review.city || 'Unknown City'})
              </p>
            </div>
            <p className="text-gray-300 text-sm">
              <FontAwesomeIcon icon={faQuoteLeft} className="mr-2" />
              {review.feedback}
            </p>
            <div className="flex space-x-4 text-sm">
              <p className="text-gray-400">Overall Rating: {review.overallRating}/5</p>
              <p className="text-gray-400">Service: {review.serviceRating}/5</p>
              <p className="text-gray-400">Pricing: {review.pricingRating}/5</p>
              <p className="text-gray-400">Speed: {review.speedRating}/5</p>
            </div>
            <p className="text-gray-500 text-xs">Submitted on: {new Date(review.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBroadbandReviews;
