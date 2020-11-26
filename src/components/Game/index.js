
import { Link } from 'react-router-dom'
//Redux
import { useDispatch } from 'react-redux'
import { loadGameDetails } from '../../actions/detailsAction'
//import styles
import {
    GameContainer,
    GameImg
} from './styles'

import { resizeImg } from '../../utils'

const Game = ({ name, released, image, id }) => {
    const dispatch = useDispatch()

    const loadGameDetailsHandler = () => {
        document.body.style.overflow = 'hidden'
        dispatch(loadGameDetails(id))
    }

    return ( 
        <GameContainer onClick={loadGameDetailsHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <GameImg src={resizeImg(image, 640)} alt={name}/>
            </Link>
        </GameContainer>
     );
}
 
export default Game;