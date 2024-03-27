import { useEffect, useState } from "react";

export default function ImprovedSkills() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  const list = [
    "Get ranked",
    "Get cooking tips",
    "Learn new recipes",
    "Experiment with food",
    "Write your own recipes",
    "Know nutrition facts",
  ];
  return (
    <div className="section improve-skills">
      <div className="col img">
        {popular.map((recipe) => {
          return <img src={recipe.image} alt={recipe.title} />;
        })}
      </div>
      <div className="col typography">
        <h1 className="title">Improve your cullinary skills.</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn">Signup Now</button>
      </div>
    </div>
  );
}
