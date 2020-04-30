import React from 'react'

const Result = ({ updateInfo }) => (
  <div className="resultsBoard">
    <div className="resultDrink">
      <h2>{updateInfo.singleCocktail.strDrink}</h2>
      <img src={updateInfo.singleCocktail.strDrinkThumb} alt={updateInfo.singleCocktail.strDrink} />
    </div>
    <div className="resultMovie">
      <h2>{updateInfo.singleMovie.Title}</h2>
      <img src={updateInfo.singleMovie.Poster} alt={updateInfo.singleMovie.Title} />
    </div>
    <div className="resultBook">
      <h2>{updateInfo.singleBook ? updateInfo.singleBook.volumeInfo.title : ''}</h2>
      <img src={updateInfo.singleBook ? updateInfo.singleBook.volumeInfo.imageLinks.thumbnail : ''} alt={updateInfo.singleBook ? updateInfo.singleBook.volumeInfo.title : ''} />
    </div>
  </div>
)

export default Result