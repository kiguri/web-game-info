import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../../actions/gamesAction'
//Import components
import Game from '../../components/Game'
import GameDetails from '../../components/GameDetails'
//Import styles
import {
    ListGameContainer,
    ListGameH2,
    ListGameWrap
} from './styles'
//Import motion
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

const Home = () => {

    //get current location
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]
    
    const dispatch = useDispatch()
    const { popularGames, newGames, upcomingGames} = useSelector(state => state.games)
    
    //FETCH DATA
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch]);

    return ( 
        <ListGameContainer>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>
                    {pathId && <GameDetails pathId={pathId} />}
                </AnimatePresence>

                <ListGameH2>Upcoming Games</ListGameH2>
                <ListGameWrap>
                    {upcomingGames.map(game => (
                        <Game 
                            key={game.id}
                            name={game.name} 
                            id={game.id}
                            released={game.released}
                            image={game.background_image}
                        />
                    ))}
                </ListGameWrap>

                <ListGameH2>Popular Games</ListGameH2>
                <ListGameWrap>
                    {popularGames.map(game => (
                        <Game 
                            key={game.id}
                            name={game.name} 
                            id={game.id}
                            released={game.released}
                            image={game.background_image}
                        />
                    ))}
                </ListGameWrap>

                <ListGameH2>New Games</ListGameH2>
                <ListGameWrap>
                    {newGames.map(game => (
                        <Game 
                            key={game.id}
                            name={game.name} 
                            id={game.id}
                            released={game.released}
                            image={game.background_image}
                        />
                    ))}
                </ListGameWrap>
            </AnimateSharedLayout>
        </ListGameContainer>
     );
}
 
export default Home;