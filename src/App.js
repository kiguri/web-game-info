import { Route } from 'react-router-dom'
//Components and pages
import Home from './pages/Home'
import Nav from './components/Nav'
//styles
import GlobalStyles from './GlobalStyles'

function App() {
    return (
        <div>
            <GlobalStyles />
            <Nav />
            <Route path={['/', '/game/:id']} component={Home} />
        </div>
    )
}

export default App;
