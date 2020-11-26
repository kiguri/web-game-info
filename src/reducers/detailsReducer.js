const initialState = {
    game: {
        platforms: []
    },
    screen: {
        results: []
    },
}

const detailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_DETAILS_START': 
            return {
                ...state,
                loading: true
            }
        case 'GET_DETAILS_SUCCESS':
            return {
                ...state,
                ...action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default detailsReducer