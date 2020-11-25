
//import styles
import {
    GameContainer,
    GameH3,
    GameP,
    GameImg
} from './styles'

const Game = ({ name, released, image }) => {
    return ( 
        <GameContainer>
            <GameH3>{name}</GameH3>
            <GameP>{released}</GameP>
            <GameImg src={image} alt={name}/>
        </GameContainer>
     );
}
 
export default Game;