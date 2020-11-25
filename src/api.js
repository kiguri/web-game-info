//Base url
const baseURL = 'https://api.rawg.io/api/'

//Current date
const currentYear = new Date().getFullYear()
const currentMonth = (new Date().getMonth() < 9) ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1
const currentDay = (new Date().getDate() < 10 ) ? `0${new Date().getDate()}` : new Date().getDate()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`


//popular games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
//upcoming games
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
//new games
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${baseURL}${popularGames}`
export const upcomingGamesURL = () => `${baseURL}${upcomingGames}`
export const newGamesURL = () => `${baseURL}${newGames}`



