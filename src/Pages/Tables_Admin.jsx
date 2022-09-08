import React, { useState } from "react";
import { Table, Space, Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import EditModal from "../Components/HackathonArticles/ItemsHackathon/EditModal";
import NewItemModal from "../Components/HackathonArticles/ItemsHackathon/NewItemModal";
import SearchTable from "../Utilities/SearchTable";
//import mockData from "../Assets/mockHackathon.json"; //only for test purposes
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { useEffect } from "react";

function Tables() {
  const columns = [
    {
      title: "Hackathon",
      dataIndex: "hackathon",
      width: 100,
      sorter: (a, b) => a.hackathon.localeCompare(b.hackathon),
    },
    {
      title: "Duration (Hours)",
      dataIndex: "duration",
      sorter: (a, b) => a.duration - b.duration,
    },
    {
      title: "Conducted by",
      dataIndex: "conducted",
      sorter: (a, b) => a.conducted.localeCompare(b.conducted),
    },
    {
      title: "On Duty",
      dataIndex: "duty",
      sorter: (a, b) => a.duty.localeCompare(b.duty),
    },
    {
      title: "Food",
      dataIndex: "food",
      sorter: (a, b) => a.food.localeCompare(b.food),
    },
    {
      title: "Judges",
      dataIndex: "judges",
      sorter: (a, b) => a.judges.localeCompare(b.judges),
    },
    {
      title: "Previous Venue",
      dataIndex: "prevVenue",
      sorter: (a, b) => a.prevVenue.localeCompare(b.prevVenue),
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Action",
      key: "action",
      render: (_, entry) => (
        <Space size="middle">
          <EditModal
            id={entry.key}
            hackathon={entry.hackathon}
            duration={entry.duration}
            conducted={entry.conducted}
            duty={entry.duty}
            food={entry.food}
            judges={entry.judges}
            prevVenue={entry.prevVenue}
            description={entry.description}
            updateParentState={updateHackathonData}
          />
          <Popconfirm
            title="Attention! This is not revertable! Continue?"
            onConfirm={() => deletePressed(entry.key)}
          >
            <a href="#/">Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [initialState, setInitialState] = useState([]); //duplicate State for search function

  useEffect(() => {
    getHackathons();

    //addData(); //carefully! This adds the whole mockData to the firebase. Only for test purposes
  }, []);

  /*
  function addData() {
    mockData.map(async (item) => {
      await addDoc(collection(db, "INSERTCOLLECTION"), {
        hackathon: item.hackathon,
        duration: item.duration,
        conducted: item.conducted,
        duty: item.duty,
        food: item.food,
        judges: item.judges,
        prevVenue: item.prevVenue,
        description: item.description,
      });
    });
  }
*/

  function getHackathons() {
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
        console.log("hackmap:", hacks);
        setData(hacks);
        setInitialState(hacks);
      })
      .catch((error) => console.log(error.message));
  }

  async function deletePressed(key) {
    console.log(key, " deleted");
    await deleteDoc(doc(db, "hackthons", key));
    getHackathons();
  }

  async function updateHackathonData(params) {
    const hackathonRef = doc(db, "hackthons", params.id);

    await updateDoc(hackathonRef, {
      hackathon: params.hackathon,
      duration: params.duration,
      conducted: params.conducted,
      judges: params.valueJudges === 1 ? "Yes" : "No",
      duty: params.valueDuty === 1 ? "Yes" : "No",
      food: params.food,
      prevVenue: params.prevVenue,
      description: params.description,
    });
    getHackathons();
  }

  /*
  const updateHackathonData = (params) => {
    setData((current) =>
      current.map((obj) => {
        if (obj.key === params.id) {
          return {
            ...obj,
            hackathon: params.hackathon,
            duration: params.duration,
            conducted: params.conducted,
            food: params.food,
            prevVenue: params.prevVenue,
            description: params.description,
            judges: params.valueJudges === 1 ? "Yes" : "No",
            duty: params.valueDuty === 1 ? "Yes" : "No",
          };
        }
        return obj;
      })
    );
  };

*/

  async function addNewHackathon(params) {
    await addDoc(collection(db, "hackthons"), {
      hackathon: params.hackathon,
      duration: params.duration,
      conducted: params.conducted,
      judges: params.valueJudges === 1 ? "Yes" : "No",
      duty: params.valueDuty === 1 ? "Yes" : "No",
      food: params.food,
      prevVenue: params.prevVenue,
      description: params.description,
    });
    getHackathons();
  }

  /*
  const addNewHackathon = (params) => {
    const obj = {
      key: params.id,
      hackathon: params.hackathon,
      duration: params.duration,
      conducted: params.conducted,
      food: params.food,
      prevVenue: params.prevVenue,
      description: params.description,
      judges: params.valueJudges === 1 ? "Yes" : "No",
      duty: params.valueDuty === 1 ? "Yes" : "No",
    };

    setData((current) => [...current, obj]);
  };
*/

  const updateParentData = (childData) => {
    setData(childData);
    //updateHackathonData(childData)
  };

  return (
    <div className=" mx-28">
      <div className=" flex justify-between">
        <NewItemModal
          addNewHackathon={addNewHackathon}
          style={{ width: "30px" }}
        />

        <div className=" w-80">
          <SearchTable
            updateParentData={updateParentData}
            initialState={initialState}
          />
        </div>
      </div>

      <Table columns={columns} dataSource={data} bordered />
    </div>
  );
}

export default Tables;
