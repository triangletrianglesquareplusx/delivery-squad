import React from "react";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import RestaurantCards from "../../Data/RestaurantData.json";
import BacktoTopButton from "../../Utilities/BacktoTopButton/BacktoTopButton";

function Restaurants() {
  // const [RestaurantCards, setCards] = useState([]);

  // useEffect(() => {
  //   fetch("../Data/RestaurantsData.json")
  //   .then((res) => res.json())
  //   .then((data) => setCards(data));

  // }, []);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between w-4/5 ml-20 mt-14 restaurants-container">
        {RestaurantCards.map((card) => (
          <RestaurantCard data={card} key={card.id} />
        ))}
      </div>
      <BacktoTopButton />
    </>
  );
}

export default Restaurants;
