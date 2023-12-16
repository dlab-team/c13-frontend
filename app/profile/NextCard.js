import React from "react";

const NextCourseCard = ({ name, onSelect, selected }) => {
  return (
    <div
      className={`col-md-6 mx-auto mt-5 mx-5 siguiente-curso py-2 ${
        selected ? "clicked" : ""
      }`}
      onClick={() => onSelect(name)}
    >
      <input type="radio" name="next-course" value="course-name" />
        <g clipPath="url(#clip0_883_171)">
          <circle cx="10" cy="10" r="9.5" fill="#729E2E" stroke="#729E2E" />
          <circle cx="10.5" cy="10.5" r="7" fill="white" stroke="#729E2E" />
        </g>
        <defs>
          <clipPath id="clip0_883_171">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="m-2">{name}</div>
    </div>
  );
};

export default NextCourseCard;
