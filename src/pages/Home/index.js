import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../../actions/gamesAction'
//Import components
import Game from '../../components/Game'
import GameDetails from '../../components/GameDetails'
import Spinner from '../../components/Spinner'
//Import styles
import { ListGameContainer, ListGameH2, ListGameWrap } from './styles'
//Import motion
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { fadeIn } from '../../animation'

const Home = () => {

    //get current location
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]
    
    const dispatch = useDispatch()
    const { popularGames, newGames, upcomingGames, searched, loading } = useSelector(state => state.games)
    
    //FETCH DATA
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch]);

    return ( 
        <ListGameContainer variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type='crossfade'>
                {loading && <Spinner /> }

                <AnimatePresence>
                    {pathId && <GameDetails pathId={pathId} />}
                </AnimatePresence>

                {searched.length > 0 && (
                    <>
                        <ListGameH2>Search results: </ListGameH2>
                        <ListGameWrap>
                            {searched.map(game => (
                                <Game 
                                    key={game.id}
                                    name={game.name} 
                                    id={game.id}
                                    released={game.released}
                                    image={game.background_image}
                                />
                            ))}
                        </ListGameWrap>
                    </>
                )}

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