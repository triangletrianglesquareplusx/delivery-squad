import ControlButton from "../utilities/ControlButton";
import { IoLogoGooglePlaystore } from "react-icons/io5";
export default function HeroSection() {
  return (
    <div
      className={`font-inter flex justify-between items-center max-w-8xl p-3 mx-10 border border-black h-80`}
    >
      <div>
        <div>
          <div className={`flex flex-row gap-2 md:flex-col`}>
            <h1 className={`text-4xl font-bold`}>Navigate to the</h1>
            <h1 className={`text-4xl font-bold`}>
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
        <div></div>
      </div>
    </div>
  );
}
