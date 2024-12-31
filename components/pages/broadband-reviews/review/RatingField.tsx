'use client';

import React from 'react';

interface RatingFieldProps {
  label: string;
  name: string;
  value: number;
  onChange: (name: string, value: number) => void;
}

const RatingField: React.FC<RatingFieldProps> = ({ label, name, value, onChange }) => {
  const handleRatingChange = (rating: number) => {
    onChange(name, rating);
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <input
            key={star}
            type="radio"
            name={name}
            className="mask mask-star-2 bg-orange-400"
            checked={value === star}
            onChange={() => handleRatingChange(star)}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingField;
