import React from 'react';
import RecipeCard from './RecipeCard';

export default function RecipesList({ searchText, recipesData }) {
  const { hits } = recipesData;
  return (
    <>
      <div className="search-title">
        <p>
          {searchText
            ? `Showing recipes search result for: ${searchText}`
            : null}
        </p>
      </div>
      {hits ? (
        hits.map((hit, index) => {
          return <RecipeCard key={index} {...hit.recipe} />;
        })
      ) : (
        <div>No recipes..!</div>
      )}
    </>
  );
}
