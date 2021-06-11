import React, { useState, useEffect } from 'react';
import ImageCard from './Components/ImageCard';
import ImageSearch from './Components/ImageSearch';
import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchedMeal, setSearchedMeal] = useState('');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`)
      .then(res => res.json())
      .then(data => {
        setImages(data.meals);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [searchedMeal]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setSearchedMeal(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.idMeal} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;