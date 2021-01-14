const bubble = document.getElementById('setup')
const punchlineDiv = document.getElementById('punchline')
const punchlineBtn = document.getElementById('punchlineBtn')
const newJokeBtn = document.getElementById('newJokeBtn')
let punchline 

newJokeBtn.addEventListener('click', getJoke)
punchlineBtn.addEventListener('click', getPunchline)

function getPunchline() {
    punchlineDiv.classList.add('bubble')
    punchlineDiv.innerHTML = punchline
    punchlineBtn.classList.toggle('hidden')
    newJokeBtn.classList.toggle('hidden')
}

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    const joke = await jokePromise.json()

    punchlineDiv.innerHTML = ''
    bubble.innerHTML = joke[0].setup
    punchline = joke[0].punchline

    punchlineDiv.classList.remove('bubble')
    punchlineBtn.classList.toggle('hidden')
    newJokeBtn.classList.toggle('hidden')
}

getJoke()