import { useState } from 'react'
//redux & routes
import { fetchSearch } from '../../actions/gamesAction'
import { useDispatch } from 'react-redux'

import {
    NavContainer,
    Logo,
    LogoImg
} from './styles'

import logo from '../../img/logo.svg'

const Nav = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        dispatch(fetchSearch(searchText))
        setSearchText('')
    }

    const clearSearched = () => {
        dispatch({
            type: 'CLEAR_SEARCH'
        })
    }

    return ( 
        <NavContainer>
            <Logo onClick={clearSearched}>
                <LogoImg src={logo} alt='logo'/>
                <h1>Kiguri</h1>
            </Logo>
            <form onSubmit={submitHandler}>
                <input 
                    value={searchText} 
                    type='text' 
                    onChange={e => setSearchText(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
        </NavContainer>
     );
}
 
export default Nav;