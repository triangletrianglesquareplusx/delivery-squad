import { useEffect, useState } from "react";
import LifeHacksHeader from "../Components/LifeHacks/LifeHacksHeader";
import LifeHacksItem from "../Components/LifeHacks/LifeHacksItem";
import { lifeHacks } from "../Data/lifeHacksData";

export default function LifeHacks() {
  const array = [...lifeHacks];
  const [order, setOrder] = useState("");
  const [ordered, setOrdered] = useState([]);

  const onTitleOrderChange = () => {
    if (order === "aToZ") {
      setOrder("zToA");
      setOrdered(array.sort((a, b) => b.title.localeCompare(a.title)));
    } else {
      setOrder("aToZ");
      setOrdered(array.sort((a, b) => a.title.localeCompare(b.title)));
    }
  };

  const onDescriptionOrderChange = () => {
    if (order === "aToZ") {
      setOrder("zToA");
      setOrdered(
        array.sort((a, b) => b.description.localeCompare(a.description))
      );
    } else {
      setOrder("aToZ");
      setOrdered(
        array.sort((a, b) => a.description.localeCompare(b.description))
      );
    }
  };

  useEffect(() => {
    setOrdered(array);
  }, []);

  return (
    <div className="lifeHacksContainer">
      <LifeHacksHeader />
      {lifeHacks.map((el) => (
        <LifeHacksItem item={el} key={el.id} />
      ))}

      <h1>TO BE REMOVED</h1>
      <h2>LifeHacks Admin Page</h2>

      <table>
        <thead>
          <tr>
            <th onClick={onTitleOrderChange}>
              Title <span>{order}</span>
            </th>
            <th onClick={onDescriptionOrderChange}>
              Description <span>{order}</span>
            </th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          {ordered.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
