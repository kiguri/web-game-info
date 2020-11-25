import axios from 'axios'

import { 
    popularGamesURL, 
    upcomingGamesURL,
    newGamesURL 
} from '../api'

export const loadGames = () => async (dispatch) => {
    try {
        const [popularGamesData, upcomingGamesData, newGamesData] = await Promise.all([
            axios.get(popularGamesURL()), 
            axios.get(upcomingGamesURL()), 
            axios.get(newGamesURL())
        ]);

        dispatch({
            type: 'FETCH_GAMES',
            payload: {
                popular: popularGamesData.data.results,
                upcoming: upcomingGamesData.data.results,
                newGames: newGamesData.data.results
            }
        })
    } catch (error) {
        console.log(error)
    }
}