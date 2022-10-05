import desktopBackground from "../assets/technology/background-technology-desktop.jpg";
import tabBackground from "../assets/technology/background-technology-tablet.jpg";
import mobileBackground from "../assets/technology/background-technology-mobile.jpg";
import { useState } from "react";

function Technologies({ data, classNaming }) {
  const [currentCrew, setCrew] = useState(0);

  return (
    <main className="crew">
      <picture className="page-background">
        <source srcSet={desktopBackground} media="(min-width: 968px)" />
        <source srcSet={tabBackground} media="(min-width: 768px)" />
        <img src={mobileBackground} alt="background" />
      </picture>
      <div className="content mx-auto max-w-7xl px-2 sm:px-12">
        <p className="cz-text-medium mt-auto font-medium text-center sm:text-start uppercase">
          <font className="text-gray-500">03</font> space launch 101
        </p>
        {data.map((tech, index) => (
          <div
            key={index}
            className={classNaming(
              currentCrew === index ? "grid lg:grid-cols-9 gap-4" : "hidden",
              "lg:items-center lg:justify-between space-y-8 lg:space-y-0 text-center lg:text-start"
            )}
          >
            <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 w-fit mt-12 lg:mt-0 mx-auto lg:mx-0 justify-between">
              {data.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCrew(idx)}
                  className={classNaming(
                    currentCrew === idx
                      ? "bg-gray-100 text-black"
                      : "border-gray-500 hover:border-gray-300",
                    "flex border-solid border-2 items-center justify-center text-lg lg:text-xl font-bold w-10 h-10 lg:w-20 lg:h-20 rounded-full cursor-pointer"
                  )}
                  aria-current={currentCrew === idx ? "page" : undefined}
                >
                  {idx + 1}
                </div>
              ))}
            </div>

            <div className="max-w-2xl lg:max-w-lg mx-auto mt-8 lg:col-span-5 lg:mt-0 lg:mx-0">
              <p className="uppercase">The terminlogies...</p>
              <h1 className="uppercase">{tech.name}</h1>
              <p className="text-md md:text-lg pb-8 lg:pb-0">
                {tech.description}
              </p>
            </div>

            <picture className="row-start-1 row-end-3 lg:row-end-1 lg:col-start-7 lg:col-end-10 w-full h-full">
              <source
                srcSet={tech.images.portrait}
                media="(min-width: 1024px)"
              />
              <img
                className="w-full h-full mx-auto lg:mx-0"
                src={tech.images.landscape}
                alt={tech.name}
              />
            </picture>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Technologies;
