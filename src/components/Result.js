import React from 'react'


const Result = ({ updateInfo }) => (


  <div className="resultsBoard">
    <div className="resultDrink">
      <h2>{updateInfo.singleCocktail.strDrink}</h2>
      <img src={updateInfo.singleCocktail.strDrinkThumb} alt={updateInfo.singleCocktail.strDrink} />
      <h3>{updateInfo.cocktailInfo ? updateInfo.cocktailInfo.drinks[0].strInstructions : ''}</h3>
    </div>
    <div className="resultMovie">
      <h2>{updateInfo.singleMovie.Title}</h2>
      <img src={updateInfo.singleMovie.Poster} alt={updateInfo.singleMovie.Title} />
      <h3>{updateInfo.movieInfo ? updateInfo.movieInfo.Plot : ''}</h3>
    </div>
    <div className="resultBook">
      <h2>{updateInfo.singleBook ? updateInfo.singleBook.volumeInfo.title : ''}</h2>
      <img src={updateInfo.singleBook ? updateInfo.singleBook.volumeInfo.imageLinks.thumbnail : ''} alt={updateInfo.singleBook ? updateInfo.singleBook.volumeInfo.title : ''} />
      <h3>{updateInfo.singleBook ? updateInfo.singleBook.volumeInfo.description : ''}</h3>
    </div>
    <div className="tweet">
      <h2>Your tweet</h2>
      <p>{updateInfo.singleBook ? updateInfo.tweets[Math.floor(Math.random() * updateInfo.tweets.length)] : ''}<span>{updateInfo.hashtags ? ` #${updateInfo.hashtags[0].word},  ${updateInfo.readingHashtags[Math.floor(Math.random() * updateInfo.readingHashtags.length)]}, #${updateInfo.hashtags[1].word}, ${updateInfo.readingHashtags[Math.floor(Math.random() * updateInfo.readingHashtags.length)]}, #${updateInfo.hashtags[2].word}, ${updateInfo.readingHashtags[Math.floor(Math.random() * updateInfo.readingHashtags.length)]}` : ''}
      </span></p>

    </div>
  </div>
)

export default Result