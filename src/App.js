import { Route } from 'react-router-dom'
//Components and pages
import Home from './pages/Home'
import GlobalStyles from './GlobalStyles'

function App() {
    return (
        <div>
            <GlobalStyles />
            <Route path={['/', '/game/:id']} component={Home} />
        </div>
    )
}

export default App;
