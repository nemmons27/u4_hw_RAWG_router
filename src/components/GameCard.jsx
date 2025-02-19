import { Link } from 'react-router-dom'
import axios from 'axios'

const GameCard = ({game}) => {
  console.log(game)
  return game ? (
    <div className="card game-card" onClick={game.id.onClick}>
      <div className="img-wrapper">
        <img src={game.background_image} alt={game.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{game.name}</h3>
      </div>
      <Link to="/games">
        <button className='backButton'> Back </button>
      </Link>
    </div>
  ) : null
}

export default GameCard
