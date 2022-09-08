import React from "react";
import { Input } from "antd";

const { Search } = Input;


function SearchTable(props) {

  const onSearch = (value) => {

    if (value === "") {
      props.updateParentData(props.initialState);
    } else {
      // eslint-disable-next-line
      const newData = props.initialState.filter((obj) => {
        for (const item in obj) {
          if (!obj.hasOwnProperty(item)) continue;
          if (obj[item].toString().toLowerCase().includes(value.toLowerCase())) {
            return obj;
          }
        }

      });
      props.updateParentData(newData)
    }
  };

  return (
    <Search placeholder="search in table" onSearch={onSearch} enterButton />
  );
}

export default SearchTable;
