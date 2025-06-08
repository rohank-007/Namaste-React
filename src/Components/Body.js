import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

import { useState } from "react";

const Body = () => {
  const [listofRestaurent, setlistofRestaurent] = useState(resList);
  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter"
          onClick={() => {
            const filteredList = listofRestaurent.filter(
              (value) => value.info.avgRating >= 4
            );
            setlistofRestaurent(filteredList);
          }}
        >
          Filter Top Rated
        </button>
      </div>

      <div className="restaurant-container">
        {listofRestaurent.map((resValue) => {
          return <RestaurentCard key={resValue.info.id} resData={resValue} />;
        })}
      </div>
    </div>
  );
};

export default Body;
