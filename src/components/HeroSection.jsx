import ControlButton from "../utilities/ControlButton";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import ProductCard from "../utilities/ProductCard";

export default function HeroSection() {
  return (
    <div
      className={`font-inter flex justify-around items-center w-8xl p-3 h-80 border border-black`}
    >
      <div>
        <div>
          <div className={`flex flex-row gap-2 md:flex-col`}>
            <h1 className={`text-6xl font-bold`}>Navigate to the</h1>
            <h1 className={`text-6xl font-bold`}>
              <span className={`text-primaryRed`}>Atlas</span> for VIT
            </h1>
          </div>

          <p className={`text-sm`}>All in one resource guide for VIT</p>
        </div>
        <div className={`mt-5`}>
          <div className={`flex items-center`}>
            <IoLogoGooglePlaystore className={`absolute text-white ml-3`} />
            <ControlButton
              name={"Download App Now"}
              className={
                "px-9 py-2 bg-primaryRed rounded-lg shadow-md text-white text-sm font-medium"
              }
            />
          </div>
        </div>
      </div>
      <div>
        {/*This is where the four images will be */}
        <div className={`flex flex-row gap-4`}>
          <ProductCard
            className={"w-6/12"}
            alt={"rih"}
            src={
              "https://static.independent.co.uk/2022/05/19/21/People_Rihanna_ASAP_Rocky_25326.jpg?quality=50&width=640&auto=webp"
            }
          />
          <ProductCard
            className={"w-4/12"}
            alt={"building"}
            src={
              "https://www.burohappold.com/wp-content/uploads/2020/02/experts-in-tall-buildings-burohappold_getty.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}
