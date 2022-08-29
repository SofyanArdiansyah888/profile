export default function Experience() {
  return (
    <>
      <section id="experience" className="pt-32 pb-16 " data-aos="fade-down">
        <div className="container">
          <div className="w-full px-4 ">
            <Title />
          </div>

          {/*  CARDS */}
          <div className="w-full md:p-16 flex flex-wrap justify-center ">
            <ol className="items-center lg:flex">
              <li className="relative mb-6 lg:mb-0">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-3 h-3 text-blue-600 dark:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Semen Bosowa Maros
                  </h3>
                  <time className="font-semibold block my-1 text-sm  leading-none text-gray-400 dark:text-gray-500">
                    Fullstack Developer
                    <p className="mt-4 font-normal">February 2020 - Present</p>
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Creating web, android and ios application that connected to
                    the SAP server as a data service.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 lg:mb-0">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white  shrink-0">
                    <svg
                      className="w-3 h-3 text-blue-600 dark:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>

                <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Japanese International School
                  </h3>
                  <time className="font-semibold block mb-2 text-sm  leading-none text-gray-400 dark:text-gray-500">
                    Web Developer
                    <p className="mt-4 font-normal">
                      {" "}
                      December 2018 - February 2020
                    </p>
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Maintaning, fixing bugs and add new feature for web
                    application.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 lg:mb-0">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-3 h-3 text-blue-600 dark:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Vifa Digital Pro
                  </h3>
                  <time className="font-semibold block my-1 text-sm  leading-none text-gray-400 dark:text-gray-500">
                    Android Developer
                    <p className="mt-4 font-normal ">
                      July 2015 - December 2018
                    </p>
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Creating and Maintaning android application depends on
                    client requirements
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

function Title() {
  return (
    <>
      <div className="max-w-xl mx-auto text-center ">
        <h4 className="title">Experience</h4>
        <h2 className="subtitle">Working Experience</h2>
        <p className="description"></p>
      </div>
    </>
  );
}
