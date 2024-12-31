"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import JoinDiscussion from "../../components/pages/broadband-reviews/discussions";
import MetaFields from "../../components/pages/broadband-reviews/metafields";
import PostReview from "../../components/pages/broadband-reviews/post-review";
import Latestreviews from "../../components/pages/broadband-reviews/latestreviews";
{/*import ReviewSummary from "../../components/pages/broadband-reviews/ReviewSummary";*/}

const BroadbandReviewsPage = () => {
  const [summaryData, setSummaryData] = useState({
    totalReviews: 1,
    averageRating: 5,
    ratingsBreakdown: {
      overall: 5,
      service: 5,
      pricing: 5,
      speed: 5,
    },
  });
  const [loadingSummary, setLoadingSummary] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      setLoadingSummary(true);
      try {
        const response = await fetch("/.netlify/functions/getReviewSummary", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ collection: "broadband_review" }),
        });

        const data = await response.json();
        if (response.ok) {
          setSummaryData({
            totalReviews: data.totalReviews,
            averageRating: data.averageOverallRating,
            ratingsBreakdown: data.ratingsBreakdown,
          });
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Error fetching review summary:", error);
      } finally {
        setLoadingSummary(false);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000] text-white">
      {/* Header */}
      <Header />

      {/* Meta Fields */}
      <MetaFields />

      {/* Main Content */}
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto space-y-16">
          {/* Page Header */}
          <header className="text-center max-w-3xl mx-auto px-4 space-y-6">
            <h1
              id="world-mobile-reviews-header"
              className="text-5xl font-aeonik-bold text-white leading-tight"
            >
              Real Reviews from{" "}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                World Mobile Broadband Customers
              </span>
            </h1>
            <p className="text-lg text-gray-300">
              Wondering if World Mobile Broadband is right for you? Explore real customer reviews and read honest opinions about speeds, reliability, and value to make the best choice for your internet needs.
            </p>
          </header>

          {/* Review Summary */}
         {/* <section id="review-summary" aria-labelledby="review-summary-title">
            <h2 id="review-summary-title" className="sr-only">
              Customer Review Summary
            </h2>
            {loadingSummary ? (
              <p className="text-center text-white">Loading summary...</p>
            ) : (
              <ReviewSummary
                totalReviews={summaryData.totalReviews}
                averageRating={summaryData.averageRating}
                ratingsBreakdown={summaryData.ratingsBreakdown}
              />
            )}
          </section>*/}


          {/* Latest Reviews */}
          <section id="latest-reviews" aria-labelledby="latest-reviews-title">
            <h2 id="latest-reviews-title" className="sr-only">
              Latest Customer Reviews
            </h2>
            <Latestreviews />
          </section>

          {/* Post New Review */}
          <section id="post-review" aria-labelledby="post-review-title">
            <h2 id="post-review-title" className="sr-only">
              Post a New Review
            </h2>
            <PostReview />
          </section>

          {/* Join Discussion Section */}
          <section id="join-discussion" aria-labelledby="join-discussion-title" className="space-y-8">
            <h2 id="join-discussion-title" className="sr-only">
              Join the Discussion
            </h2>
            <JoinDiscussion />
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BroadbandReviewsPage;
