import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          EXPERIENCE & CERTIFICATION
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience, certification and the roles I have
          taken in various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="relative flex flex-col sm:flex-row items-center mb-24"
          >
            {/* Timeline Circle aligned on center line */}
            {/* Timeline Circle (mobile: above content, desktop: beside vertical line) */}
            <div className="absolute sm:left-[calc(50%-2rem)] left-1/2 sm:top-0 -top-10 transform -translate-x-1/2 sm:translate-x-0 w-16 h-16 bg-white border-4 border-[#8245ec] rounded-full z-20 flex items-center justify-center">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0" />

            {/* Content box with space so it doesn’t overlap */}
            <div
              className={`relative w-full sm:w-1/2 p-6 sm:p-8 bg-gray-900 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] z-10 ${
                index % 2 === 0 ? "sm:ml-auto sm:pl-24" : "sm:mr-auto sm:pr-24"
              }`}
            >
              {/* Role, Company, Date, etc. */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {experience.role}
                </h3>
                <h4 className="text-sm text-gray-300">{experience.company}</h4>
                <p className="text-sm text-gray-500">{experience.date}</p>
              </div>
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-white px-3 py-1 text-sm rounded-lg mr-2 mb-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-white bg-[#8245ec] hover:bg-purple-700 font-semibold py-2 px-4 rounded transition-transform duration-200 transform hover:scale-105"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
