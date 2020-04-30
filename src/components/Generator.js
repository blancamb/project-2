import React from 'react'
import axios from 'axios'

class Generator extends React.Component {

  state = {
    allSpirits: ['Rum', 'Gin', 'Vermouth', 'Scotch', 'Vodka', 'Coffee liqueur', 'Bourbon', 'Tequila', 'Kahlua', 'Sambuca', 'Whiskey'],
    movieWord: '',
    selectedSpirit: '',
    allCocktails: {},
    singleCocktail: {},
    allMovies: [],
    singleMovie: {},
    allBooks: {},
    singleBook: null

  }

  async findTheCocktail() {

    const resCocktails = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.selectedSpirit}`)
    this.setState({ allCocktails: resCocktails.data })
    console.log(this.state.allCocktails)

    const resMovies = await axios.get(`http://www.omdbapi.com/?s=${this.state.movieWord}&apikey=21bb5b6c`)
    this.setState({ allMovies: resMovies.data })
    console.log("single movie", this.state.singleMovie)

    const resBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${this.state.movieWord}&key=AIzaSyCScg4gVkYgMBbiT570cWxN7mc8zGgGwmg`)
    this.setState({ allBooks: resBooks.data })
    console.log("single book", this.state.singleBook)


    this.getSingleCocktail()
    this.getSingleMovie()
    this.getSingleBook()
  }


  handleSelect = e => {
    const selectedSpirit = e.target.value
    this.setState({ selectedSpirit })
  }

  handleInput = e => {
    const movieWord = e.target.value
    this.setState({ movieWord })
  }

  handleClick = () => {

    console.log(this.state.selectedSpirit)
    console.log(this.state.selectedSpirit)
    console.log("all movies", this.state.allMovies)
    this.findTheCocktail()
  }

  getSingleCocktail = () => {
    const singleCocktail = this.state.allCocktails.drinks[Math.floor(Math.random() * this.state.allCocktails.drinks.length)]
    this.setState({ singleCocktail })
  }


  getSingleMovie = () => {
    const singleMovie = this.state.allMovies.Search[Math.floor(Math.random() * this.state.allMovies.Search.length)]
    this.setState({ singleMovie })
  }

  getSingleBook = () => {
    const singleBook = this.state.allBooks.items[Math.floor(Math.random() * this.state.allBooks.items.length)]
    console.log('single book function:', singleBook)
    this.setState({ singleBook })
  }

  getDetailsFromCocktail = ({ singleCocktail }) => {
    return <div>
      <h2>{singleCocktail.strDrink}</h2>
    </div>
  }

  render() {
    return (
      <>
        <h1>GENERATOR PAGE</h1>
        <select onChange={this.handleSelect}
          selectedvalue="selected">
          <option value="selected" selected disabled>Choose a Spirit:</option>
          {this.state.allSpirits.map(spirit => {
            return <option key={spirit}>{spirit}</option>
          })
          }
        </select>
        <input onChange={this.handleInput}
          type="text" placeholder="type a word" >
        </input>
        <button onClick={this.handleClick}>Generate Results</button>
        <div className="resultsBoard">
          <div className="resultDrink">
            <h2>{this.state.singleCocktail.strDrink}</h2>
            <img src={this.state.singleCocktail.strDrinkThumb} alt={this.state.singleCocktail.strDrink} />
          </div>
          <div className="resultMovie">
            <h2>{this.state.singleMovie.Title}</h2>
            <img src={this.state.singleMovie.Poster} alt={this.state.singleMovie.Title} />
          </div>
          <div className="resultBook">
            <h2>{this.state.singleBook ? this.state.singleBook.volumeInfo.title : ''}</h2>
            <img src={this.state.singleBook ? this.state.singleBook.volumeInfo.imageLinks.thumbnail : ''} alt={this.state.singleBook ? this.state.singleBook.volumeInfo.title : ''} />
          </div>
        </div>

      </>

    )
  }
}



export default Generator

