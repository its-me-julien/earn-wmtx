"use client";

import React, { useEffect, useState } from "react";

interface RatingsBreakdown {
  service: number;
  pricing: number;
  speed: number;
}

interface ReviewSummaryData {
  totalReviews: number;
  averageOverallRating: number;
  ratingsBreakdown: RatingsBreakdown;
}

const ReviewSummary: React.FC = () => {
  const [data, setData] = useState<ReviewSummaryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviewSummary = async () => {
      try {
        const response = await fetch("/.netlify/functions/getReviewSummary", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ collection: "broadband_review" }),
        });

        const result = await response.json();
        if (response.ok) {
          setData(result);
        } else {
          console.error(result.error);
        }
      } catch (error) {
        console.error("Error fetching review summary:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewSummary();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading review summary...</p>;
  }

  if (!data) {
    return <p className="text-center text-white">No data available.</p>;
  }

  return (
    <div className="bg-gradient-to-r from-[#5A2FBA] to-[#F6642D] p-6 rounded-lg shadow-lg space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <span className="bg-blue-100 text-blue-800 text-lg font-semibold p-2 rounded-full">
            {data.averageOverallRating.toFixed(1)}
          </span>
          <p className="font-medium text-white">Excellent</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <p>{data.totalReviews} reviews</p>
          <a href="#reviews" className="text-blue-400 hover:underline">
            Read all reviews
          </a>
        </div>
      </div>

      {/* Ratings Breakdown */}
      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(data.ratingsBreakdown).map(([category, rating]) => (
          <div key={category}>
            <p className="text-sm font-medium text-gray-200 capitalize">{category}</p>
            <div className="flex items-center space-x-2">
              <div className="w-full bg-gray-800 rounded h-2">
                <div
                  className="bg-blue-600 h-2 rounded"
                  style={{ width: `${(rating / 5) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-white">{rating.toFixed(1)}/5</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSummary;
