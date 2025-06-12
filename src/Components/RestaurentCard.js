import { CDN_URL } from "../utils/constants.js";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, rating, image, reviewCount, caloriesPerServing } =
    resData;

  return (
    <div className="res-Card">
      <img className="res-img" src={image}></img>

      <div className="res-txt">
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h5>⭐{rating} stars</h5>
        <h5>♨caloriesPerServing: {caloriesPerServing}</h5>
        <h5>Reviews: {reviewCount}</h5>
      </div>
    </div>
  );
};

export default RestaurentCard;
