const searchGame = document.querySelector('.searchGame')
const searchedGames = document.querySelector('.searchedGames')

const eventSearchGame = (data) => {
  searchGame.addEventListener('keyup', (event) => {
    const gameArray = []
    data.map(e => {
      const inputValue = event.target.value
      const nameOfGame = e.name
      const regExpName = RegExp(inputValue, 'gi')
      const findGame = regExpName.test(nameOfGame)
      if (findGame && inputValue) {
        gameArray.push(e.name)
      }
    })
    const newGameArray = [...new Set(gameArray)]
    const innerToDiv = []
    newGameArray.map(e => innerToDiv.push(`<h1>${e}</h1>`))
    searchedGames.innerHTML = innerToDiv.join('')
  })
}


const getData = async () => {
  const resolveData = await fetch('https://api.rawg.io/api/games?page=1')
  const data = await resolveData.json()
  console.log(data.results)
  eventSearchGame(data.results)
}


(() => {
  getData()
})()
