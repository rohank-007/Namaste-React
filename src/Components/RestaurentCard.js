import { CDN_URL } from "../utils/constants.js";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div className="res-Card">
      <img className="res-img" src={"CDN_URL" + cloudinaryImageId}></img>

      <div className="res-txt">
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h5>⭐{avgRating} stars</h5>
        <h5>{costForTwo}</h5>
      </div>
    </div>
  );
};

export default RestaurentCard;
