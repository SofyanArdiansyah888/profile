import { useState } from "react";
import portfolio from "../portfolio.json";

const portofolioData = portfolio.data;
export default function Portfolio() {
  const [portfolios, setPortFolios] = useState(filterPortofolio("website"));
  const [type, setType] = useState("website");
  function filterClick(type) {
    let temp = filterPortofolio(type);
    setPortFolios(temp);
    setType(type);
  }

  function filterPortofolio(type) {
    return portofolioData.filter((item) => {
      return item.type === type;
    });
  }

  return (
    <>
      <section
        id="portfolio"
        className="pt-32 pb-16 bg-slate-100"
        data-aos="fade-up"
      >
        <div className="">
          <div className="w-full px-4 ">
            <Title />

            {/* BUTTONS  */}
            <div className="flex max-w-xl mx-auto mb-16 gap-3 justify-center  mt-8 ">
              <div
                className={`btn-primary ${type === "website" ? "active" : ""}`}
                onClick={() => filterClick("website")}
              >
                Web
              </div>
              <div
                className={`btn-primary ${type === "android" ? "active" : ""}`}
                onClick={() => filterClick("android")}
              >
                Android
              </div>
              <div
                className={`btn-primary ${type === "ios" ? "active" : ""}`}
                onClick={() => filterClick("ios")}
              >
                IOS
              </div>
            </div>
          </div>

          {/*  CARDS */}
          <div className="w-full px-4 flex flex-wrap justify-center gap-6 ">
            {portfolios.map(({ title, description, src, link,icons }) => {
              return (
                <Card
                  title={title}
                  description={description}
                  src={src}
                  link={link}
                  key={title}
                  icons={icons}
                />
              );
            })}
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
        <h4 className="title">Portfolio</h4>
        <h2 className="subtitle">My Projects</h2>
        <p className="description">
          Let's see some projects that already worked on.
        </p>
      </div>
    </>
  );
}

function Card({ title, description, src, link,icons }) {
  return (
    <>
      <div className="w-full pb-6  lg:w-1/4 md:w-1/2 bg-white rounded-2xl relative ">
        <a href={link} target="_blank" rel="noreferrer">
          <div className="bg-transparent overflow-hidden ">
            <img
              src={src}
              alt={title}
              className="rounded-t-xl max-h-[16rem] min-w-full"
              width={"w-full"}
            />
          </div>

          <h3 className="font-semibold text-xl text-dark mt-5 mb-3 mx-6">
            {title}
          </h3>
        </a>

        <hr className="mb-3" />
        <p className="description mx-6 mb-8 ">{description}</p>
        <div className="flex flex-row gap-2  mr-4 bottom-2 absolute right-0 ">
          {/* <Icon.Bootstrap />
          <Icon.Wordpress /> */}
        </div>
        
      </div>
    </>
  );
}
