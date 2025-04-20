import React from "react";
import "./filter.scss";

interface FilterComProps {
  filter: string;
  onFilterChange: (value: string) => void;
  options: string[];
}

export const FilterCom: React.FC<FilterComProps> = ({
  filter,
  onFilterChange,
  options,
}) => {
  return (
    <div
      className="Filter title-medium-semibold"
      role="group"
      aria-label="Toggle filter"
    >
      {options.map((option) => (
        <label key={option} className="Filter-label" htmlFor={option}>
          <input
            type="radio"
            className="Filter-input"
            value={option}
            name={option}
            id={option}
            checked={filter === option}
            onChange={() => onFilterChange(option)}
          />
          {option.replace(/-/g, " ").toUpperCase()}
        </label>
      ))}
    </div>
  );
};
