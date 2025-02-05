import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";
const FeaturedProperties = () => {

  const {data,loading,error} = useFetch("https://hotel-booking-2-dlce.onrender.com/api/hotels?featured=true&limit=4");

  console.log("check this",data)
  return (
    <div className="fp">
      {loading ? "loading" : (<>
      {data.map((item =>(
      <div className="fpItem" key={item._id}>
        <img
          src={item.photos[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div>
      )))}
      </>)}
    </div>
  );
};

export default FeaturedProperties;