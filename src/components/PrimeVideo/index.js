// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionCategory = 'ACTION'
const comedyCategory = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionList = moviesList.filter(
    each => each.categoryId === actionCategory,
  )

  const comedyList = moviesList.filter(
    each => each.categoryId === comedyCategory,
  )

  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video"
      />
      <div className="movies-container">
        <h1 className="action-movies">Action Movies</h1>
        <MoviesSlider moviesList={actionList} />
        <h1 className="action-movies">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyList} />
      </div>
    </div>
  )
}
export default PrimeVideo
