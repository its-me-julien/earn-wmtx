"use client";

import React, { useEffect, useState } from "react";

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
  const [page, setPage] = useState(1);
  const [totalReviews, setTotalReviews] = useState(0);

  const reviewsPerPage = 10;

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await fetch("/.netlify/functions/getReviews", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            collection: "broadband_review",
            limit: reviewsPerPage,
            offset: (page - 1) * reviewsPerPage,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          setReviews(data.reviews);
          setTotalReviews(data.total || 0);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [page]);

  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-2xl font-bold text-white mb-6">Latest Broadband Reviews</h2>

      {loading ? (
        <p className="text-center text-white">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-center text-white">No reviews available yet.</p>
      ) : (
        <>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gradient-to-r from-[#5A2FBA] to-[#F6642D] p-6 rounded-lg shadow-lg space-y-4 hover:shadow-xl transition-shadow"
              >
                {/* Overall Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="rating rating-sm">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          className={`mask mask-star-2 bg-[#F6642D]`}
                          readOnly
                          checked={i < review.overallRating}
                        />
                      ))}
                    </div>
                    <span className="text-white text-sm font-semibold">{review.overallRating}/5</span>
                  </div>
                  <p className="text-gray-200 text-sm font-medium">
                    {review.name || "Anonymous"} <span className="text-gray-400">({review.city || "Unknown City"})</span>
                  </p>
                </div>

                {/* Feedback */}
                <blockquote className="text-white text-sm italic border-l-4 border-[#F6642D] pl-4">
                  {review.feedback}
                </blockquote>

                {/* Ratings Breakdown */}
                <div className="flex flex-wrap items-center space-x-4 text-xs font-semibold text-white">
                  <div className="badge badge-outline bg-gray-800 text-white px-4 py-2">
                    Service: {review.serviceRating}/5
                  </div>
                  <div className="badge badge-outline bg-gray-800 text-white px-4 py-2">
                    Pricing: {review.pricingRating}/5
                  </div>
                  <div className="badge badge-outline bg-gray-800 text-white px-4 py-2">
                    Speed: {review.speedRating}/5
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`btn btn-sm ${page === i + 1 ? "btn-active" : ""}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LatestBroadbandReviews;
