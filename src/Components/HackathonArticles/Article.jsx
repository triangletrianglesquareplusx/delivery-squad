import React from "react";
import blog from "../../Assets/hackathon-article.png";

function Article(props) {
  return (
    <div className="container sm:h-96 max-w-5xl mb-20 mx-auto">
      <div className="flex flex-nowrap flex-col pb-10 sm:flex-row sm:mx-5">
        <div className="w-1/1 sm:w-4/12 mx-5 pt-2 mr-8">
          <img
            src={blog}
            alt="blog placeholder"
            width="360px"
            style={{ borderRadius: "0.5rem" }}
          />
        </div>
        <div className="flex flex-nowrap flex-col w-1/1 sm:w-8/12 mt-5 sm:mt-0 ">
          <div className=" text-design font-inter font-bold text-xl sm:text-3xl  h-2/12 mb-4">
            {props.hackathon}
          </div>
          <div className="flex flex-nowrap h-1/3 flex-col sm:flex-row mx-5 sm:mx-0">
            <div className="w-full sm:w-1/2">
              <div className="flex flex-nowrap  space-x-1">
                <p className="font-inter font-bold text-sm text-design text-left leading-8">
                  Duration:
                </p>
                <p className="font-monteserat font-normal text-sm text-textGrey text-left leading-8">
                  {props.duration} Hours
                </p>
              </div>

              <div className="flex flex-nowrap space-x-1 ">
                <p className="font-inter font-bold text-sm text-design text-left leading-8">
                  Cunducted by:
                </p>
                <p className="font-monteserat font-normal text-sm text-textGrey text-left leading-8">
                  {props.conducted}
                </p>
              </div>

              <div className="flex flex-nowrap space-x-1">
                <p className="font-inter font-bold text-sm text-design text-left leading-8">
                  On Duty:
                </p>
                <p className="font-monteserat font-normal text-sm text-textGrey text-left leading-8">
                  {props.duty}
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-nowrap space-x-1">
                <p className="font-inter font-bold text-sm text-design text-left leading-8">
                  Food:
                </p>
                <p className="font-monteserat font-normal text-sm text-textGrey text-left leading-8">
                  {props.food}
                </p>
              </div>

              <div className="flex flex-nowrap space-x-1">
                <p className="font-inter font-bold text-sm text-design text-left leading-8">
                  Judges:
                </p>
                <p className="font-monteserat font-normal text-sm text-textGrey text-left leading-8">
                  {props.judges}
                </p>
              </div>

              <div className="flex flex-nowrap space-x-1">
                <p className="font-inter font-bold text-sm text-design text-left leading-8">
                  Previous Venue:
                </p>
                <p className="font-monteserat font-normal text-sm text-textGrey text-left leading-8">
                  {props.prevVenue}
                </p>
              </div>
            </div>
          </div>
          <div className=" h-2/6 mx-5 sm:mx-0">
            <div className="flex flex-col mt-6 ">
              <p className="font-inter font-bold text-sm text-design text-left leading-8">
                Description
              </p>
              <p className="font-monteserat font-normal text-sm text-textGrey text-left leading-5 w-full mr-2">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
