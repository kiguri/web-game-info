import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GameContainer = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 30px rgba(78, 57, 57, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
`

export const GameImg = styled.img`
    width: 100%;
    height: 40vh;
    object-fit: cover;
    display: block;
`