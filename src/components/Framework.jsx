import * as Icon from "../icons";
export default function Framework() {
  return (
    <>
      <section
        id="framework"
        className="pt-32 pb-16 bg-slate-500"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="px-4 w-full">
            {/* TEXT */}
            <div className=" mx-auto text-center ">
              <h4 className="title"> Frameworks</h4>

              <p className="font-bold text-white text-4xl my-4">
                Languages, Tools & Frameworks
              </p>

              <p className="font-medium  text-white tracking-wide leading-7">
                Let's see my journey in programming, frameworks, and other
                toolings.
              </p>
            </div>

            <div className="w-full  pt-8">
              <div className="flex md:w-2/3 mx-auto gap-4">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card() {
  const className = {
    card: "w-full p-8  rounded-3xl",
    cardItem:
      " items-center p-4 bg-white rounded-2xl border border-gray-200  flex-col justify-start   ",
    orderList: "relative border-l border-gray-200 dark:border-gray-700 p-4",
  };
  return (
    <>
      <div className={className.card}>
        <ol className={className.orderList}>
          <li className="mb-10 ml-6">
            <Icon.Calendar />

            <div className={className.cardItem}>
              <time className="mb-1 text-sm font-semibold text-dark md:order-last md:mb-0 ml-2">
                November 2015 - 2017
              </time>
              <div className="flex space-x-6  overflow-auto  mt-4 py-4">
                <Icon.CSharp/>
                <Icon.Android />
                <Icon.Php />
                <Icon.Mysql />
                <Icon.Javascript />
              </div>
            </div>
          </li>

          <li className="mb-10 ml-6">
            <Icon.Calendar />

            <div className={className.cardItem}>
              <time className="mb-1 text-sm font-semibold text-dark md:order-last md:mb-0 ml-2">
                March 2017 - 2019
              </time>
              <div className="flex space-x-6 overflow-auto  mt-4 py-4">
                <Icon.Bootstrap />
                <Icon.Laravel />
                <Icon.Typescript />
                <Icon.Angular />
                <Icon.Ionic />
              </div>
            </div>
          </li>

          <li className="mb-10 ml-6">
            <Icon.Calendar />

            <div className={className.cardItem}>
              <time className="mb-1 text-sm font-semibold text-dark md:order-last md:mb-0 ml-2">
                December 2019 - 2021
              </time>
              <div className="flex space-x-6 overflow-auto  mt-4 py-4">
                <Icon.Postgre />
                <Icon.Redis />
                <Icon.Git />
                <Icon.RabbitMQ />
              </div>
            </div>
          </li>

          <li className="ml-6">
            <Icon.Calendar />

            <div className={className.cardItem}>
              <time className="mb-1 text-sm font-semibold text-dark md:order-last md:mb-0 ml-2">
                June 2021 - 2022
              </time>
              <div className="flex space-x-6 overflow-auto mt-4 py-4">
                <Icon.Jira />
                <Icon.Bitbucket />
                <Icon.Node />
                <Icon.Mongo />
                <Icon.React />
                <Icon.NextJS />
                <Icon.Redux />
                <Icon.Tailwind />
                <Icon.GraphQL />
                <Icon.Electron />
                <Icon.NestJS />
              </div>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}

