import './App.css';
import React, { useState, useEffect } from 'react';
import Queue from './utils/Queue';
import { RecipeSearchBar } from './Components/RecipeSearchBar';
import RecipesList from './Components/RecipesList';
import useDebounce from './utils/useDebounce';

export default function App() {
  const [searchText, setSearchText] = useState(null);
  const [recipesData, setrecipesData] = useState(null);
  const [queue, setQueue] = useState(new Queue());
  const { elements } = queue;

  // Now we call our hook, passing in the current searchText value.
  // The hook will only return the latest value (what we passed in)
  // if it's been more than given time since it was last called.
  // Otherwise, it will return the previous value of searchText.
  // The goal is to only have the API call fire when user stops typing
  // so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchText, 300);

  // Here's where the API call happens
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        console.log(queue.length());
        if (queue.length() < 5) {
          queue.enqueue(searchText);
        } else {
          queue.dequeue();
          queue.enqueue(searchText);
        }
        const url = `https://api.edamam.com/search?q=${searchText}&app_id=98534992&app_key=72e20d877a6f28df4fa2937761879020`;
        fetch(url)
          .then(res => res.json())
          .then(res => setrecipesData(res));
      }
    },
    // Our useEffect function will only execute if this value changes
    [debouncedSearchTerm]
  );

  return (
    <div className="App">
      <RecipeSearchBar searchText={searchText} setSearchText={setSearchText} />
      <div className="side-content">
        <h3>Search history:</h3>
        {elements &&
          elements.map((element, index) => {
            return <p key={index}>{element}</p>;
          })}
      </div>
      <div className="main-content">
        {recipesData ? (
          <RecipesList searchText={searchText} recipesData={recipesData} />
        ) : null}
      </div>
    </div>
  );
}
