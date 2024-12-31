"use client";

import React from "react";

interface RatingsBreakdown {
  overall: number;
  service: number;
  pricing: number;
  speed: number;
}

interface ReviewSummaryProps {
  totalReviews: number | undefined;
  averageRating: number | undefined;
  ratingsBreakdown: RatingsBreakdown | undefined;
}

const ReviewSummary: React.FC<ReviewSummaryProps> = ({
  totalReviews = 0,
  averageRating = 0,
  ratingsBreakdown = { overall: 0, service: 0, pricing: 0, speed: 0 },
}) => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Service",
      "name": "World Mobile Broadband",
    },
    "ratingValue": averageRating.toFixed(1),
    "reviewCount": totalReviews,
    "ratingBreakdown": [
      {
        "name": "Overall",
        "rating": ratingsBreakdown.overall.toFixed(1),
      },
      {
        "name": "Service",
        "rating": ratingsBreakdown.service.toFixed(1),
      },
      {
        "name": "Pricing",
        "rating": ratingsBreakdown.pricing.toFixed(1),
      },
      {
        "name": "Speed",
        "rating": ratingsBreakdown.speed.toFixed(1),
      },
    ],
  };

  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-lg border border-[#5A2FBA]">
        {/* Output Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-xl font-aeonik-bold text-white text-center">
            {totalReviews} Reviews - Excellent
          </h2>
          <p className="text-sm font-aeonik-regular text-gray-300 text-center mt-2">
            {"★".repeat(Math.round(averageRating))} - {averageRating.toFixed(1)}
          </p>
        </div>

        {/* Metrics */}
        <div className="space-y-6">
          {Object.entries(ratingsBreakdown).map(([metric, rating]) => (
            <div key={metric}>
              <p className="text-sm font-aeonik-regular text-gray-300 capitalize">
                {metric}
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-full h-2 rounded bg-gray-800 overflow-hidden">
                  <div
                    className="h-2"
                    style={{
                      background: "linear-gradient(to right, #F6642D, #D42E58, #5A2FBA)",
                      width: `${(rating / 5) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-aeonik-bold text-white">{rating.toFixed(1)}/5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
