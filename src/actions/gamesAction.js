import axios from 'axios'

import { 
    popularGamesURL, 
    upcomingGamesURL,
    newGamesURL,
    searchURL
} from '../api'

export const loadGames = () => async (dispatch) => {
    try {
        dispatch({
            type: 'FETCH_GAMES'
        })
        const [popularGamesData, upcomingGamesData, newGamesData] = await Promise.all([
            axios.get(popularGamesURL()), 
            axios.get(upcomingGamesURL()), 
            axios.get(newGamesURL())
        ])

        dispatch({
            type: 'FETCH_GAMES_SUCCESS',
            payload: {
                popularGames: popularGamesData.data.results,
                upcomingGames: upcomingGamesData.data.results,
                newGames: newGamesData.data.results
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const fetchSearch = (gameName) => async (dispatch) => {
    try {
        const searchGames = await axios.get(searchURL(gameName))

        dispatch({
            type: 'FETCH_SEARCH',
            payload: {
                searched: searchGames.data.results
            }
        })
    } catch (error) {
        console.log(error)
    }
}
