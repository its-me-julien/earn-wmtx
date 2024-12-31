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

interface GetReviewsResponse {
  reviews: Review[];
  total: number;
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

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        // Cast the API response to the expected type
        const data: GetReviewsResponse = await response.json();

        // Sanitize reviews
        const sanitizedReviews = data.reviews.map((review) => ({
          id: review.id || "",
          overallRating: Number(review.overallRating) || 0,
          serviceRating: Number(review.serviceRating) || 0,
          pricingRating: Number(review.pricingRating) || 0,
          speedRating: Number(review.speedRating) || 0,
          feedback: review.feedback || "",
          name: review.name || "Anonymous",
          city: review.city || "Unknown",
          createdAt: review.createdAt || "",
        }));

        setReviews(sanitizedReviews);
        setTotalReviews(data.total || 0);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]);
        setTotalReviews(0);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [page]);

  const totalPages = Math.ceil((totalReviews || 0) / reviewsPerPage);

  return (
    <div className="flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl space-y-8">
        <h2 className="text-xl font-aeonik-bold text-white text-center">
          Latest Broadband Reviews
        </h2>

        {loading ? (
          <p className="text-center text-white">Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="text-center text-white">No reviews available yet.</p>
        ) : (
          <>
            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="p-6 rounded-lg shadow-lg"
                  style={{ background: "rgba(55,10,81,.19)" }}
                >
                  {/* Star Rating and Name */}
                  <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`mask mask-star-2 ${
                            i < (Number(review.overallRating) || 0) ? "bg-[#F6642D]" : "bg-gray-500"
                          }`}
                        ></span>
                      ))}
                    </div>
                    <p className="text-sm font-aeonik-bold text-white">
                      {review.name || "Anonymous"}{" "}
                      <span className="font-aeonik-regular text-gray-300">
                        (City: {review.city || "Unknown"})
                      </span>
                    </p>
                  </div>

                  {/* Feedback */}
                  <blockquote className="mt-4 text-sm font-aeonik-regular text-gray-300 italic border-l-4 pl-4 border-[#F6642D]">
                    {review.feedback}
                  </blockquote>

                  {/* Ratings */}
                  <div className="mt-6 space-y-2">
                    <p className="text-sm font-aeonik-regular text-gray-300">
                      <span className="font-aeonik-bold text-white">Service:</span>{" "}
                      {(Number(review.serviceRating) || 0).toFixed(1)}/5
                    </p>
                    <p className="text-sm font-aeonik-regular text-gray-300">
                      <span className="font-aeonik-bold text-white">Pricing:</span>{" "}
                      {(Number(review.pricingRating) || 0).toFixed(1)}/5
                    </p>
                    <p className="text-sm font-aeonik-regular text-gray-300">
                      <span className="font-aeonik-bold text-white">Speed:</span>{" "}
                      {(Number(review.speedRating) || 0).toFixed(1)}/5
                    </p>
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
    </div>
  );
};

export default LatestBroadbandReviews;
