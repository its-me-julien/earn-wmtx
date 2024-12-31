import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import JoinDiscussion from '../../components/pages/broadband-reviews/discussions';
import MetaFields from '../../components/pages/broadband-reviews/metafields';
import PostReview from '../../components/pages/broadband-reviews/post-review';

const BroadbandReviewsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
      {/* Header and Meta Fields */}
      <Header />
      <MetaFields />

      {/* Main Content */}
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">
          {/* Page Header */}
          <header
            className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4"
            aria-labelledby="world-mobile-reviews-header"
          >
            <h1
              id="world-mobile-reviews-header"
              className="text-5xl font-aeonik-bold mb-6 text-white text-center px-4 md:px-6"
            >
              Real Reviews from{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                World Mobile Broadband Customers
              </span>
            </h1>
            <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              Wondering if World Mobile Broadband is right for you? Explore real customer reviews and read honest opinions about speeds, reliability, and value to make the best choice for your internet needs.
            </p>
          </header>

          {/* Post New Review */}
          <section id="post-review">
            <PostReview />
          </section>

          {/* Join Discussion Section */}
          <section
            aria-labelledby="join-discussion-section"
            className="space-y-8"
          >
            <h2 id="join-discussion-section" className="sr-only">
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
