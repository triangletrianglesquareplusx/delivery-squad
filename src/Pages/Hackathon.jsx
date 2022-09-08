import React from "react";
import "../index.css";
import '../App.css';
import ReverseArticle from "../Components/HackathonArticles/ReverseArticle.jsx";
import Article from "../Components/HackathonArticles/Article.jsx";
import BacktoTopButton from '../Utilities/BacktoTopButton/BacktoTopButton.jsx'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { useState, useEffect } from "react";

function Hackathon() {
  const [hackathon, setHackathon] = useState([]);
  const articleOrder = [];

  useEffect(() => {
    getHackathons();
  }, []);

  async function getHackathons() {
    const hackathonCollectionRef = collection(db, "hackthons");
    getDocs(hackathonCollectionRef)
      .then((response) => {
        const hacks = response.docs.map((doc) => ({
          key: doc.id,
          hackathon: doc.data().hackathon,
          duration: doc.data().duration,
          conducted: doc.data().conducted,
          food: doc.data().food,
          prevVenue: doc.data().prevVenue,
          description: doc.data().description,
          judges: doc.data().judges,
          duty: doc.data().duty,
        }));
        setHackathon(hacks);
      })
      .catch((error) => console.log(error.message));
  }

  hackathon.forEach((element, index) => {
    if (index % 2) {
      articleOrder.push(
        <ul key={index}>
          <ReverseArticle
            hackathon={element.hackathon}
            duration={element.duration}
            conducted={element.conducted}
            food={element.food}
            prevVenue={element.prevVenue}
            description={element.description}
            judges={element.judges}
            duty={element.duty}
          />
        </ul>
      );
    } else {
      articleOrder.push(
        <ul key={index}>
          <Article
            hackathon={element.hackathon}
            duration={element.duration}
            conducted={element.conducted}
            food={element.food}
            prevVenue={element.prevVenue}
            description={element.description}
            judges={element.judges}
            duty={element.duty}
          />
        </ul>
      );
    }
  });

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
      {articleOrder}
      <BacktoTopButton />
    </div>
  );
}

export default Hackathon;
