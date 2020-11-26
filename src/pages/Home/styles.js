import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ListGameContainer = styled(motion.div)`
    padding: 0 5rem;
`

export const ListGameH2 = styled.h2`
    padding: 5rem 0;
`

export const ListGameWrap= styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    
`
