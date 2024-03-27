import { useEffect, useState } from "react";
import CustomImage from "./CustomImage";

export default function HeroSection() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What are we about?</h1>
        <p className="info">
          This is a place where you can please your soul and tummy with
          delecious food recipes of all cuisines. And our service is absolutely
          free. So start exploring now.
        </p>
        <button className="btn">Explore Now</button>
      </div>
      <div className="col gallery">
        {popular.map((recipe, index) => (
          <CustomImage key={index} imgSrc={recipe.image} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}
