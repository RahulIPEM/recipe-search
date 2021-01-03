import React from 'react';

export default function RecipeCard({
  image,
  label,
  url,
  source,
  ingredientLines,
}) {
  return (
    <>
      <div className="recipe-outer-card">
        <div className="recipe-card">
          <img src={image} alt={label} />
          <h3>{label}</h3>
          <a href={url} target="_blank" rel="noreferrer">
            See full recipe at: {source}
          </a>
          <h4>{ingredientLines.length} Ingredients</h4>
          {ingredientLines.map((ingredient, index) => {
            return <span key={index}>{ingredient}</span>;
          })}
        </div>
      </div>
    </>
  );
}
