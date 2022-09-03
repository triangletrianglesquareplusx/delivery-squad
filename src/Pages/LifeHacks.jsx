import { useEffect, useState } from "react";
import LifeHacksHeader from "../Components/LifeHacks/LifeHacksHeader";
import LifeHacksItem from "../Components/LifeHacks/LifeHacksItem";
import { lifeHacks } from "../Data/lifeHacksData";
import { db } from "../Firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";

export default function LifeHacks() {
  const [order, setOrder] = useState("");
  const [ordered, setOrdered] = useState([]);
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setOrdered(data);
    }
  }, [data]);

  const fetchData = async () => {
    try {
      const results = [];
      const querySnapshot = await getDocs(collection(db, "lifehacks"));
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, data: doc.data() });
      });
      setData(results);
      setOrdered(data);
      setIsLoading(false);
    } catch (err) {
      console.log("error", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onOrderChange = (type) => {
    if (order === "aToZ") {
      setOrder("zToA");
      setOrdered(
        ordered.sort((a, b) => b.data[type].localeCompare(a.data[type]))
      );
    } else {
      setOrder("aToZ");
      setOrdered(
        ordered.sort((a, b) => a.data[type].localeCompare(b.data[type]))
      );
    }
  };

  const onDeleteData = async (id) => {
    await deleteDoc(doc(db, "lifehacks", id));
    fetchData();
  };

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
            <th onClick={() => onOrderChange("title")}>Title</th>
            <th onClick={() => onOrderChange("description")}>Description</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && <span>Loading</span>}
          {!isLoading &&
            data.length > 0 &&
            data.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.data.title}</td>
                  <td>{el.data.description}</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={() => onDeleteData(el.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
