import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavContainer = styled(motion.nav)`
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
        width: 70%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        box-shadow:0 0 30px rgba(0, 0, 0, .2);
        margin-top: 1rem;
    }
    button {
        width: 30%;
        border: none;
        padding: 0.5rem 2rem;
        font-size: 1.5rem;
        cursor: pointer;
        background: #ff7676;
        color: #fff;
        box-shadow:0 0 30px rgba(0, 0, 0, .2);
    }
`


export const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
`

export const LogoImg = styled.img`
    height: 2rem;
    width: 2rem;
`
