import LifeHacksHeader from "../Components/LifeHacks/LifeHacksHeader";
import LifeHacksItem from "../Components/LifeHacks/LifeHacksItem";
import { lifeHacks } from "../Data/lifeHacksData";

export default function LifeHacks() {
  return (
    <div className="lifeHacksContainer">
      <LifeHacksHeader />
      {lifeHacks.map((el) => (
        <LifeHacksItem item={el} key={el.id} />
      ))}
    </div>
  );
}
