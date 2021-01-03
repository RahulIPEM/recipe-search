import React from 'react';
import Ingredient from './Ingredient';
import Nutrient from './Nutrient';

export default function RecipeCard({
  image,
  label,
  url,
  source,
  totalNutrients,
  ingredients,
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
          <div style={{ overflow: 'auto' }}>
            <h4>{ingredients.length} Ingredients</h4>
            {ingredients.map((ingredient, index) => {
              return <Ingredient key={index} {...ingredient} />;
            })}
          </div>
          <div>
            <h4>Nutrients</h4>
            {totalNutrients
              ? Object.values(totalNutrients).map((nutrient, index) => {
                  return <Nutrient key={index} {...nutrient} />;
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
