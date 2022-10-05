import desktopBackground from "../assets/crew/background-crew-desktop.jpg";
import tabBackground from "../assets/crew/background-crew-tablet.jpg";
import mobileBackground from "../assets/crew/background-crew-mobile.jpg";
import { useEffect, useState } from "react";

function Crew({ data, classNaming }) {
  const [currentCrew, setCrew] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCrew((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [currentCrew]);

  return (
    <main className="crew">
      <picture className="page-background">
        <source srcSet={desktopBackground} media="(min-width: 968px)" />
        <source srcSet={tabBackground} media="(min-width: 768px)" />
        <img src={mobileBackground} alt="background" />
      </picture>
      <div className="content mx-auto max-w-7xl px-2 sm:px-12">
        <p className="cz-text-medium mt-auto font-medium text-center sm:text-start uppercase">
          <font className="text-gray-500">02</font> meet your crew
        </p>
        {data.map((crew, index) => (
          <div
            key={index}
            className={classNaming(
              currentCrew === index
                ? "flex flex-col-reverse md:flex-col lg:flex-row"
                : "hidden",
              "lg:items-center lg:justify-between space-y-8 lg:space-y-0 text-center lg:text-start"
            )}
          >
            <div className="max-w-2xl lg:max-w-lg mx-auto mt-8 lg:mt-0 lg:mx-0">
              <p className="cz-text-medium font-medium uppercase">
                {crew.role}
              </p>
              <h1 className="uppercase">{crew.name}</h1>
              <p className="text-md md:text-lg pb-8 lg:pb-12">{crew.bio}</p>
              <div className="flex space-x-4 w-fit mx-auto mt-8 lg:mx-0 justify-between">
                {data.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCrew(idx)}
                    className={classNaming(
                      currentCrew === idx
                        ? "bg-gray-100"
                        : "bg-gray-500 hover:bg-gray-400",
                      "w-3 h-3 rounded-full cursor-pointer"
                    )}
                    aria-current={currentCrew === idx ? "page" : undefined}
                  ></div>
                ))}
              </div>
            </div>

            <img
              className="w-2/4 lg:max-w-md mx-auto lg:mx-0"
              src={crew.image}
              alt={crew.name}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Crew;
