import React from "react";
// bg-[#306398]

const Certification = () => {
  const certificationText = "";

  return (
    <div className="min-h-screen bg-[#306398] pt-10 flex flex-col items-center justify-center overflow-x-hidden">
        <div className="flex flex-col w-full rounded-3xl my-auto gap-8 md:gap-12 md:gap-x-20 text-[#f0ede6]">
          <h1 className="text-4xl font-bold flex justify-center">
            Certification
          </h1>

          <div className="flex flex-col w-full md:grid md:grid-cols-2 grid-flow-row justify-center p-8 md:p-16 gap-6">
            <div className="transition-opacity flex text-center flex-col">
              <h1 className="xl:text-3xl text-2xl font-bold hover:scale-110 transition ease-in-out">
                <a href="/A.pdf">CompTIA A+</a>
              </h1>
              <p className="xl:text-l italic font-mono">CompTIA</p>
              <p className="xl:text-l italic font-mono">Issued Sept 2024</p>
            </div>

            <div className="transition-opacity flex text-center flex-col ">
              <h1 className="xl:text-3xl text-2xl font-bold hover:scale-110 transition ease-in-out">
                <a href="/itf.pdf">CompTIA ITF+</a>
              </h1>
              <p className="xl:text-l italic font-mono">CompTIA</p>
              <p className="xl:text-l italic font-mono">Issued Aug 2024</p>
            </div>

            <div className="transition-opacity flex text-center flex-col ">
              <h1 className="xl:text-3xl text-2xl font-bold hover:scale-110 transition ease-in-out">
              <a href="/codepath.pdf">Intro to Cybersecurity</a>
            </h1>
            <p className="xl:text-l italic font-mono">CodePath</p>
            <p className="xl:text-l italic font-mono">Issued Nov 2023</p>
            </div>

            <div className="transition-opacity flex text-center flex-col ">
              <h1 className="xl:text-3xl text-2xl font-bold hover:scale-110 transition ease-in-out">
              <a href="https://www.coursera.org/account/accomplishments/certificate/LLKGHLNZEY4S">
                Assets, Threats, and Vulnerabilities
              </a>
            </h1>
            <p className="xl:text-l italic font-mono">Google</p>
            <p className="xl:text-l italic font-mono">Issued Oct 2024</p>

            </div>

            <div className="transition-opacity flex text-center flex-col ">
              <h1 className="xl:text-3xl text-2xl font-bold hover:scale-110 transition ease-in-out">
              <a href="https://www.coursera.org/account/accomplishments/verify/ZDKATMUUJLPS">
                Linux and SQL
              </a>
            </h1>
            <p className="xl:text-l italic font-mono">Google</p>
            <p className="xl:text-l italic font-mono">Issued Oct 2024</p>

            </div>

            <div className="transition-opacity flex text-center flex-col ">
              <h1 className="xl:text-3xl text-2xl font-bold hover:scale-110 transition ease-in-out">
              <a href="https://www.coursera.org/account/accomplishments/certificate/8Z96ZSSTBFEY">
                Networks and Network Security
              </a>
            </h1>
            <p className="xl:text-l italic font-mono">Google</p>
            <p className="xl:text-l italic font-mono">Issued Sept 2024</p>

            </div>

            <div className="transition-opacity flex text-center flex-col ">
              <h1 className="xl:text-3xl text-2xl font-bold hover:scale-110 transition ease-in-out">
              <a href="https://www.coursera.org/account/accomplishments/certificate/8A32QN8WWG82">
                Foundations of Cybersecurity
              </a>
            </h1>
            <p className="xl:text-l italic font-mono">Google</p>
            <p className="xl:text-l italic font-mono">Issued Sept 2024</p>

            </div>

            <div className="transition-opacity flex text-center flex-col ">
              <h1 className="xl:text-3xl text-2xl font-bold hover:scale-110 transition ease-in-out">
              <a href="https://www.coursera.org/account/accomplishments/certificate/R63Q6JYKBARD">
                Play It Safe: Manage Security Risks
              </a>
            </h1>
            <p className="xl:text-l italic font-mono">Google</p>
            <p className="xl:text-l italic font-mono">Issued Aug 2024</p>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Certification;
