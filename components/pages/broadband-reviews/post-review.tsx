'use client';

import { useState } from 'react';

const CreateReviewForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('/.netlify/functions/submitReview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Review submitted successfully!');
        setTitle('');
        setContent('');
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
      <h1 className="text-4xl font-bold text-center mb-8">Create a New Review</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg p-8 max-w-xl mx-auto space-y-6"
      >
        <div>
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter a title for your review"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input input-bordered w-full text-black"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-lg font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Write your review here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="textarea textarea-bordered w-full text-black h-32"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] hover:brightness-125 text-white"
        >
          Submit Review
        </button>
      </form>
      {status && (
        <p className="mt-4 text-center font-semibold">
          {status.startsWith('Error') ? (
            <span className="text-red-500">{status}</span>
          ) : (
            <span className="text-green-500">{status}</span>
          )}
        </p>
      )}
    </div>
  );
};

export default CreateReviewForm;
