import React from "react";
import "../index.css";
import ReverseArticle from "../Components/ReverseArticle.jsx";
import Article from "../Components/Article.jsx";
import ToTopButton from "../Components/ToTopButton.jsx";

function Body() {
  return (
    <div className=" bg-backWhite  h-full w-screen pt-20 pb-64 ">
      <h1 className=" font-Inter font-semibold text-4xl text-black w-1/1 pb-4">
        Hackathons
      </h1>
      <div className=" flex w-screen justify-center pb-6">
        <div className=" bg-lineOrange w-4/12 sm:w-2/12 xl:w-1/12 h-1.5 rounded-md"></div>
      </div>
      <div className="flex w-screen justify-center pb-20">
        <p className=" text-lineOrange font-normal text-base mx-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>
      <Article />
      <ReverseArticle />
      <Article />
      <ReverseArticle />
      <Article />
      <ReverseArticle />
      <ToTopButton />
    </div>
  );
}

export default Body;
