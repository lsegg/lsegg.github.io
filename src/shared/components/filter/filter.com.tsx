import React, { useId } from "react";
import "./filter.scss";

interface FilterComProps {
  filter: string;
  onFilterChange: (value: string) => void;
  options: string[];
  legend?: string;
}

export const FilterCom: React.FC<FilterComProps> = ({
  filter,
  onFilterChange,
  options,
  legend = "Filter by category",
}) => {
  // Portfolio and Blog both render a filter on the home page, so ids and the
  // radio group name have to be unique per instance.
  const groupId = useId();

  return (
    <fieldset className="Filter">
      <legend className="isVisuallyHidden">{legend}</legend>
      <div className="Filter-track">
        {options.map((option) => {
          const inputId = `${groupId}-${option}`;
          const isActive = filter === option;

          return (
            <label
              key={option}
              className={`Filter-label micro-label ${
                isActive ? "isActive" : ""
              }`}
              htmlFor={inputId}
            >
              <input
                type="radio"
                className="Filter-input isVisuallyHidden"
                value={option}
                name={groupId}
                id={inputId}
                checked={isActive}
                onChange={() => onFilterChange(option)}
              />
              <span className="Filter-label-text">
                {option.replace(/-/g, " ")}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};
