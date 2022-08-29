export default function Hero() {
  return (
    <>
      <section id="home" className=" pt-24" data-aos="fade-up">
        <div className="container">
          <div className="flex flex-wrap">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </section>
    </>
  );
}

function LeftSide() {
  return (
    <>
      <div className="w-full self-center text-left px-4 lg:w-1/2">
        <h1 className=" text-base font-semibold text-primary md:text-xl lg:text-2xl ">
          Hello Mate 👏, i'am
          <span className="block font-bold  text-4xl mt-1 text-dark lg:text-5xl">
            Sofyan Ardiansyah
          </span>
          <span className="text-base font-semibold text-secondary">
            sofyanardianysah@gmail.com
          </span>
        </h1>

        <p className="font-medium my-10 md:text-xl">
          {/* Learning web development is easy and fun right,{" "} */}
          Fullstack Developer
          {/* <span className="font-semibold text-dark">right!</span>{" "} */}
        </p>

        <a href="#contact" className="btn-primary text-center inline">
          Contact Me
        </a>
      </div>
    </>
  );
}

function RightSide() {
  return (
    <>
      <div className="w-full self-end px-4 lg:w-1/2">
        <div className="mt-10 relative">
          <img
            src="sofyan2.png"
            className=" max-w-full mx-auto max-h-[500px] lg:-mt-12 rounded-full"
            alt="Sofyan ardiansyah"
          />
          <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              width={480}
              height={480}
            >
              <path
                fill="#0EA5E9"
                d="M70.1,-22.1C79.3,5.5,67.2,40.6,42.8,58.1C18.5,75.6,-18,75.3,-42.2,57.9C-66.3,40.4,-78,5.6,-68.9,-21.8C-59.8,-49.3,-29.9,-69.5,0.3,-69.6C30.5,-69.7,60.9,-49.7,70.1,-22.1Z"
                transform="translate(100 100)"
                scale={1.1}
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
