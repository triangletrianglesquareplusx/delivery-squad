import ControlButton from "../utilities/ControlButton";

export default function HeroSection() {
  return (
    <div
      className={`font-inter flex justify-center items-center border border-black h-80`}
    >
      <div>
        <div>
          <h1 className={`text-4xl font-bold`}>Navigate to the</h1>
          <h1 className={`text-4xl font-bold`}>
            <span className={`text-primaryRed`}>Atlas</span> for VIT
          </h1>
          <p className={`text-sm`}>All in one resource guide for VIT</p>
        </div>
        <div className={`mt-5`}>
          <ControlButton
            name={"Download App Now"}
            className={
              "px-6 py-3 bg-primaryRed rounded-lg shadow-md text-white text-sm font-medium"
            }
          />
        </div>
      </div>

      <div></div>
    </div>
  );
}
