import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative flex flex-col sm:flex-row items-center mb-24"
          >
            {/* Timeline Circle (mobile: above, desktop: center line aligned) */}
            <div className="absolute sm:left-[calc(50%-2rem)] left-1/2 sm:top-0 -top-10 transform -translate-x-1/2 sm:translate-x-0 w-16 h-16 bg-white border-4 border-[#8245ec] rounded-full z-20 flex items-center justify-center">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content box with spacing */}
            <div
              className={`relative w-full sm:w-1/2 p-6 sm:p-8 bg-gray-900 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] z-10 mt-12 sm:mt-0 ${
                index % 2 === 0 ? "sm:ml-auto sm:pl-24" : "sm:mr-auto sm:pr-24"
              }`}
            >
              {/* Degree, School Name, Date */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-sm text-gray-300">{edu.school}</h4>
                <p className="text-sm text-gray-500">{edu.date}</p>
              </div>

              {/* Grade */}
              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>

              {/* Description */}
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
