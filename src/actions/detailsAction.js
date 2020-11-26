import axios from 'axios'

import {
    gameDetailsURL,
    gameScreenshotURL
} from '../api'

export const loadGameDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: 'GET_DETAILS_START'
        })

        const [gameDetails, screenShot] = await Promise.all([
            axios.get(gameDetailsURL(id)), 
            axios.get(gameScreenshotURL(id))
        ])
        
        dispatch({
            type: 'GET_DETAILS_SUCCESS',
            payload: {
                game: gameDetails.data,
                screen: screenShot.data
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}