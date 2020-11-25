import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from './actions/gamesAction'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch]);
    return (
        <div>
            <h1>Hello Ignite</h1>
        </div>
    )
}

export default App;
