type RatingFieldProps = {
  label: React.ReactNode;
  name: string;
  value: number;
  onChange: (name: string, value: number) => void;
};

const RatingField: React.FC<RatingFieldProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-sm text-white">{label}</div>
      <div className="rating flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <input
            key={star}
            type="radio"
            name={name}
            className="mask mask-star-2 bg-[#F6642D]"
            value={star}
            checked={value === star}
            onChange={() => onChange(name, star)}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingField;
