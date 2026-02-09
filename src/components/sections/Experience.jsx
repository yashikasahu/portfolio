import { PiCertificateLight } from "react-icons/pi";
import { RiCheckboxCircleLine } from "react-icons/ri";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
            My Professional Journey
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Tracing my path through the roles that have shaped my skills and expertise.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-gray-300" />

          <div className="flex flex-col gap-16">

            {/* ITEM 1 */}
            <div className="relative flex items-center md:justify-normal group md:odd:flex-row-reverse">

              {/* Icon */}
              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 hover:bg-green-300 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center z-10">
                <a href="https://pwskills.com/learn/certificate/2fec4a0a-8fc7-4ae5-9ce7-1e12723d967d/"><PiCertificateLight /> </a>
              </div>

              {/* Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg w-[85%] md:w-[45%] ml-auto md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto">
                <h3 className="text-xl font-bold hover:text-blue-400 text-gray-900"><a href="https://pwskills.com/learn/certificate/2fec4a0a-8fc7-4ae5-9ce7-1e12723d967d/">Data Science Masters</a></h3>
                <p className="font-medium text-gray-700 mb-1">PW Skills</p>
                <p className="text-sm text-gray-500 mb-3">JULY 2024 - MAy 2025</p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <RiCheckboxCircleLine className="mt-1" />
                    Developed and maintained several full-stack web applications.
                  </li>
                </ul>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="relative flex items-center md:justify-normal group md:odd:flex-row-reverse">

              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 bg-black hover:bg-green-300 text-white w-10 h-10 rounded-full flex items-center justify-center z-10">
                <a href="https://www.coursera.org/account/accomplishments/verify/MKQ2MUEK2OGA"><PiCertificateLight /></a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg w-[85%] md:w-[45%] ml-auto md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto">
                <h3 className="text-xl font-bold text-gray-900 hover:text-blue-400"><a href="https://www.coursera.org/account/accomplishments/verify/MKQ2MUEK2OGA">Data Analytics</a></h3>
                <p className="font-medium text-gray-700 mb-1">Google</p>
                <p className="text-sm text-gray-500 mb-3">July 2025</p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <RiCheckboxCircleLine className="mt-1" />
                    Helped finding and fixing bugs in a real-life production environment.
                  </li>
                </ul>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="relative flex items-center md:justify-normal group md:odd:flex-row-reverse">

              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 bg-black hover:bg-green-300 text-white w-10 h-10 rounded-full flex items-center justify-center z-10">
                <a href="https://www.coursera.org/account/accomplishments/verify/5GZ7764K5SG0"><PiCertificateLight /> </a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg w-[85%] md:w-[45%] ml-auto md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto">
                <h3 className="text-xl font-bold text-gray-900 hover:text-blue-400"> <a href="https://www.coursera.org/account/accomplishments/verify/5GZ7764K5SG0">Data Science</a></h3>
                <p className="font-medium text-gray-700 mb-1">IBM</p>
                <p className="text-sm text-gray-500 mb-3">JULY 2025</p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <RiCheckboxCircleLine className="mt-1" />
                    Deployed several project on AWS Cloud learned about several AWS Cloud tools.
                  </li>
                </ul>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="relative flex items-center md:justify-normal group md:odd:flex-row-reverse">

              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 bg-black hover:bg-green-300 text-white w-10 h-10 rounded-full flex items-center justify-center z-10">
                <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_yBpvPPPEE4T8Mqqac_1755440511784_completion_certificate.pdf"><PiCertificateLight /> </a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg w-[85%] md:w-[45%] ml-auto md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto">
                <h3 className="text-xl font-bold text-gray-900 hover:text-blue-400"> <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_yBpvPPPEE4T8Mqqac_1755440511784_completion_certificate.pdf">Deloitte Data Analytics Job Simulation</a></h3>
                <p className="font-medium text-gray-700 mb-1">Forage</p>
                <p className="text-sm text-gray-500 mb-3">AUGUST 2025</p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <RiCheckboxCircleLine className="mt-1" />
                    Deployed several project on AWS Cloud learned about several AWS Cloud tools.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
