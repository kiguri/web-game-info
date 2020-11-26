import styled from 'styled-components'
import { motion } from 'framer-motion'

export const DetailsContainer = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;

    &::-webkit-scrollbar{
            width: 0.5rem;
        }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track{
        background-color: #fff;
    }
`

export const DetailsWrap = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: #fff;
    position: absolute;
    left: 10%;
    color: #222;
`

export const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Info = styled(motion.div)`
    text-align: center;
`

export const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    margin-left: 3rem;
`

export const Media = styled(motion.div)`
    margin-top: 5rem;
`

export const Description = styled(motion.div)`
    margin: 5rem 0;
`

export const Img = styled.img`
    width: 100%;
`