import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg} />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">Dummy text is to be put here.</p>
        <a className="view-btn" href="#!">
          View Recipe
        </a>
      </div>
    </div>
  );
}
