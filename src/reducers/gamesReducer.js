const initialState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searched: [],
}

const gamesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_GAMES_SUCCESS':
            return {
                ...state,
                ...action.payload,
                loading: false
            }
        case 'FETCH_SEARCH':
            return {
                ...state,
                ...action.payload
            }
        case 'CLEAR_SEARCH':
            return {
                ...state,
                searched: []
            }
        default:
            return state
    }
}

export default gamesReducer