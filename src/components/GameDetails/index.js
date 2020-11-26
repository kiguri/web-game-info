import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
//styles
import {
    DetailsContainer,
    DetailsWrap,
    Stats,
    Info,
    Platforms,
    Media,
    Description,
    Img
} from './styles'
import { motion } from 'framer-motion'
import { resizeImg } from '../../utils'

//images
import playstation from '../../img/playstation.svg'
import apple from '../../img/apple.svg'
import steam from '../../img/steam.svg'
import nintendo from '../../img/nintendo.svg'
import xbox from '../../img/xbox.svg'
import gamepad from '../../img/gamepad.svg'
import starEmpty from '../../img/star-empty.png'
import starFull from '../../img/star-full.png'

const GameDetails = ({ pathId }) => {
    const { game, screen, loading } = useSelector(state => state.details)

    const history = useHistory()

    const exitDetailHandler = e => {
        if (e.target.classList.contains('details')) {
            document.body.style.overflow = 'auto'
            history.push('/')
        }
    }

    const getPlatform = (platform) => {
        switch(platform) {
            case 'PlayStation 4' :
                return playstation
            case 'Xbox One' :
                return xbox
            case 'PC' :
                return steam
            case 'Nintendo Switch' :
                return nintendo
            case 'iOS' :
                return apple
            default:
                return gamepad
        }
    }

    const renderStars = () => {
        const stars = []
        const rating = Math.floor(game.rating)
        for (let i = 1; i <=5; i++) {
            if (i <= rating) {
                stars.push(<img alt='star' key={i} src={starFull} />)
            } else {
                stars.push(<img alt='star' key={i} src={starEmpty} />)
            }
        }
        return stars
    }

    return ( 
        <>
            {!loading &&
            (
            <DetailsContainer className='details' onClick={exitDetailHandler}>
                <DetailsWrap layoutId={pathId}>
                    <Stats>
                        <div>
                            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                            <p>Rating: {game.rating}</p>
                            {renderStars()}
                        </div>
    
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms.map(data => (
                                    <img 
                                        key={data.platform.id} 
                                        src={getPlatform(data.platform.name)} 
                                        alt={data.platform.name}
                                    />
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
    
                    <Media>
                        <Img 
                            layoutId={`image ${pathId}`} 
                            src={resizeImg(game.background_image, 1280)} 
                            alt={game.name} />
                    </Media>
    
                    <Description>
                        <p>{game.description}</p>
                    </Description>
    
                    <div>
                        {screen.results.map(screen => (
                            <Img key={screen.id} src={resizeImg(screen.image, 1280)} alt={`${game.name}-${screen.id}`} />
                        ))}
                    </div>
                </DetailsWrap>
            </DetailsContainer>  
            )}
        </>
     );
}
 
export default GameDetails;