import React from 'react'
import axios from 'axios'
import Form from '../components/Form'
import Result from '../components/Result'

class Generator extends React.Component {

  state = {
    allSpirits: ['Rum', 'Gin', 'Vermouth', 'Scotch', 'Vodka', 'Coffee liqueur', 'Bourbon', 'Tequila', 'Kahlua', 'Sambuca', 'Whiskey'],
    movieWord: '',
    selectedSpirit: '',
    allCocktails: {},
    singleCocktail: {},
    cocktailInfo: null,
    allMovies: [],
    singleMovie: {},
    movieInfo: null,
    allBooks: {},
    singleBook: null,
    tweets: ['Best book ever! Check this one out!', 'Great evening with an even greater book', 'Love to read, reading is life!', 'This is on my must-read list guys'],
    hashtags: null,
    readingHashtags: ['#readingisliving', '#bibliophile', '#fuckwithbrains', '#quarantinereading', '#bookaddict', '#ireadanything']

  }

  async findTheCocktail() {
    try {
      const resCocktails = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.selectedSpirit}`)
      this.setState({ allCocktails: resCocktails.data })

      const resMovies = await axios.get(`http://www.omdbapi.com/?s=${this.state.movieWord}&apikey=21bb5b6c`)
      this.setState({ allMovies: resMovies.data })
      console.log("single movie", this.state.singleMovie)

      const resBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${this.state.movieWord}&key=AIzaSyCScg4gVkYgMBbiT570cWxN7mc8zGgGwmg`)
      this.setState({ allBooks: resBooks.data })
      console.log("single book", this.state.singleBook)

     


      this.getSingleCocktail()
      this.getSingleMovie()
      this.getSingleBook()
this.getHashtag()
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  getHashtag = async () => {
    const resHashtag = await axios.get(`https://api.datamuse.com/words?rel_trg=${this.state.movieWord}`)
    console.log('hastag', resHashtag.data)
    this.setState({ hashtags: resHashtag.data })
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
    console.log("all movies", this.state.allMovies)
    this.findTheCocktail()

  }

  getSingleCocktail = () => {
    const singleCocktail = this.state.allCocktails.drinks[Math.floor(Math.random() * this.state.allCocktails.drinks.length)]
    this.setState({ singleCocktail })
    const num = parseInt(this.state.singleCocktail.idDrink)
    this.resCocktailId(singleCocktail, num)
  }

  resCocktailId = async (singleCocktail, num) => {

    const resCocktailId = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${num}`)
    console.log(resCocktailId)
    this.setState({ cocktailInfo: resCocktailId.data })
    console.log('rest of the cocktail info', this.state.cocktailInfo)
    // console.log('single cocktail:', this.state.singleCocktail.idDrink)

  }


  getSingleMovie = () => {
    const singleMovie = this.state.allMovies.Search[Math.floor(Math.random() * this.state.allMovies.Search.length)]
    this.setState({ singleMovie })
    this.resMovieId()
  }

  resMovieId = async () => {
    const resMovieId = await axios.get(`http://www.omdbapi.com/?i=${this.state.singleMovie.imdbID}&apikey=21bb5b6c`)
    console.log('movie info', resMovieId)
    console.log('data info', resMovieId.data)
    this.setState({ movieInfo: resMovieId.data })


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
        <Form
          handleSelect={this.handleSelect}
          handleInput={this.handleInput}
          updateInfo={this.state}
          handleClick={this.handleClick}
        />

        <Result
          updateInfo={this.state}
        />
      </>

    )
  }
}



export default Generator

