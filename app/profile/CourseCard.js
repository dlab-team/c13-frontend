import React from "react";

const CourseCard = ({ name, complete, total, backgroundImage }) => {
  const percentage = ((complete / total) * 100).toFixed(2) || 0;
  console.log("Percentage:", percentage); // Agregamos un console.log
  const completionStatus =
    percentage == 100 ? "con-completed" : "con-incomplete";
  console.log("Completion Status:", completionStatus); // Agregamos un console.log

  return (
    <div
      className={`col-md-6 mx-auto mt-5 mt-md-0 course-card ${name.toLowerCase()} `}
    >
      <div
        className={`py-5 border border-secondary course-card-inner ${name.toLowerCase()}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="diagonal">
          <div className={`circle ${name.toLowerCase()} ${completionStatus}`}>
            <span>{`${Math.round(percentage)}%`}</span>
          </div>
          {name && (
            <div className="course-name ">
              <span>{name}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
