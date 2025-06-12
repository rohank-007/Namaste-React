import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";

import Shimmer from "./shimmer";

const Body = () => {
  const [listofRestaurent, setlistofRestaurent] = useState([]);

  const [filteredlistofRestaurent, setfilteredlistofRestaurent] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");

    const json = await data.json();

    setlistofRestaurent(json?.recipes);
    setfilteredlistofRestaurent(json?.recipes);
  };

  return listofRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurent = listofRestaurent.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredlistofRestaurent(filteredRestaurent);
              setsearchText("");
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter"
          onClick={() => {
            const filteredList = listofRestaurent.filter(
              (value) => value.rating >= 4.5
            );
            setlistofRestaurent(filteredList);
          }}
        >
          Filter Top Rated
        </button>
      </div>

      <div className="restaurant-container">
        {filteredlistofRestaurent.map((resValue) => {
          return <RestaurentCard key={resValue.id} resData={resValue} />;
        })}
      </div>
    </div>
  );
};

export default Body;
