import React from 'react';

export const RecipeSearchBar = ({
  searchText,
  searchRecipe,
  setSearchText,
}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        name="search"
        placeholder="Enter to search..."
        className="search-bar-input"
        defaultValue={searchText || ''}
        onChange={e => setSearchText(e.target.value)}
      />
    </div>
  );
};
