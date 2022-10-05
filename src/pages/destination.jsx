import desktopBackground from "../assets/destination/background-destination-desktop.jpg";
import tabBackground from "../assets/destination/background-destination-tablet.jpg";
import mobileBackground from "../assets/destination/background-destination-mobile.jpg";
import { useState } from "react";

function Destination({ data, classNaming }) {
  const [currentPlanet, setPlanet] = useState(0);

  return (
    <main className="destination">
      <picture className="page-background">
        <source srcSet={desktopBackground} media="(min-width: 968px)" />
        <source srcSet={tabBackground} media="(min-width: 768px)" />
        <img src={mobileBackground} alt="background" />
      </picture>
      <div className="content mx-auto max-w-7xl px-2 sm:px-12">
        <p className="cz-text-medium mt-auto font-medium text-center sm:text-start">
          <font className="text-gray-500">01</font> PICK YOUR DESTINATION
        </p>
        {data.map((planet, index) => (
          <div
            key={index}
            className={classNaming(
              currentPlanet === index ? "lg:flex" : "hidden",
              "lg:items-center lg:justify-between space-y-8 mt-12 text-center lg:text-start"
            )}
          >
            <img
              className="mx-auto lg:mx-0"
              src={planet.image}
              alt={planet.name}
            />

            <div className="max-w-2xl lg:max-w-md mx-auto lg:mx-0">
              <div className="flex space-x-6 xs:space-x-12 w-fit mx-auto lg:mx-0 justify-between text-white">
                {data.map((names, idx) => (
                  <div
                    key={idx}
                    onClick={() => setPlanet(idx)}
                    className={classNaming(
                      currentPlanet === idx
                        ? "border-solid border-b-4 border-white-500"
                        : "hover:border-solid hover:border-gray-400 hover:border-b-4",
                      "py-4 font-medium uppercase cursor-pointer"
                    )}
                    aria-current={currentPlanet === idx ? "page" : undefined}
                  >
                    {names.name}
                  </div>
                ))}
              </div>
              <h1 className="uppercase">{planet.name}</h1>
              <p className="text-xl pb-8 lg:pb-12 border-b border-gray-400">
                {planet.description}
              </p>
              <div className="md:flex space-y-4 md:space-y-0 md:space-x-12 w-fit mt-4 mx-auto lg:mx-0">
                <div className="uppercase">
                  <p className="mb-2 text-sm">Avg. distance</p>
                  <span className="text-2xl">{planet.distance}</span>
                </div>
                <div className="uppercase">
                  <p className="mb-2 text-sm">Est. Travel time</p>
                  <span className="text-2xl">{planet.travel}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Destination;
