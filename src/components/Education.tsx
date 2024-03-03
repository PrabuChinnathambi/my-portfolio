import React from "react";
import VerticalLinearStepper from "./Stepper";

const Education = () => {
  return (
    <div data-aos-delay="300" data-aos="fade-up" data-aos-duration="1000">
      <h1>Education</h1>
      <div className="flex flex-col gap-2">
        {/* <VerticalLinearStepper /> */}
        <div className="flex flex-col gap-1">
          <h2>Sankara College of Science and Commerce</h2>
          <div className="flex flex-row align-middle items-center gap-5 ">
            <h3>BSc Information Technology ( Bharathiyar University ) :</h3>
            <span>2016 - 2019</span>
          </div>
          <p>
            I've delved into fundamental software subjects like Java, C++, HTML,
            CSS, Data Structures, DBMS, and OS. Besides, I've pursued courses in
            Python, ASP.NET, React, and Full Stack Development. Furthermore,
            I've undertaken projects utilizing Python. My exploration of
            software spans various languages and frameworks, enhancing my
            proficiency. The breadth of my studies includes both foundational
            and advanced concepts. Through practical applications and
            coursework, I've honed my skills extensively. Each endeavor has
            contributed to my holistic understanding of software development.
            I'm eager to continue expanding my knowledge and tackling new
            challenges in the field.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2> High School</h2>
          <h3>Computer Science Group</h3>
          <span>2014 - 2016</span>
          <p>
            I've focused on computer-related subjects in my studies, alongside
            major subjects like Physics, Chemistry, and Mathematics.
            Additionally, I've actively participated in division-level hockey
            matches. Balancing academic pursuits with sports has been integral
            to my development. Through this diverse engagement, I've gained
            valuable skills and experiences. I'm grateful for the opportunities
            that have shaped me into a well-rounded individual
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2> Higher Secondary School</h2>
          <h3>State Borard</h3>
          <span>2013 - 2014</span>
          <p>
            I've diligently followed the state board syllabus, with a primary
            focus on mathematics and science. This has provided me with a solid
            foundation in the basics of these subjects. Every moment of my
            academic journey has been enjoyable and enriching. Additionally,
            I've proudly earned a district-level hockey winner certificate,
            showcasing my dedication beyond academics. Balancing both studies
            and sports has been fulfilling, contributing to a well-rounded
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
