
import { Link } from 'react-router-dom'
//Redux
import { useDispatch } from 'react-redux'
import { loadGameDetails } from '../../actions/detailsAction'
//import styles
import { GameContainer, GameImg } from './styles'

import { motion } from 'framer-motion'
import { resizeImg } from '../../utils'
import { popup } from '../../animation'

const Game = ({ name, released, image, id }) => {
    const dispatch = useDispatch()
   
    const loadGameDetailsHandler = () => {
        document.body.style.overflow = 'hidden'
        dispatch(loadGameDetails(id))
    }


    return ( 
        <GameContainer 
            layoutId={id.toString()} 
            onClick={loadGameDetailsHandler}
            variants={popup}
            initial='hidden'
            animate='show'
        >
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${id.toString()}`} >{name}</motion.h3>
                <p>{released}</p>
                <GameImg 
                    layoutId={`image ${id.toString()}`} 
                    src={resizeImg(image, 640)} 
                    alt={name}
                />
            </Link>
        </GameContainer>
     );
}
 
export default Game;