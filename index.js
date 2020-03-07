console.log('INFO: Reading index.js');

console.log('INFO: Getting access to elements');

console.log('INFO: Configuring event handlers');

const jokeURI = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'

// fetch information
const getJoke = async () => {
  try {
    const response = await fetch(jokeURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj}`)
    const joke = obj.value.joke || 'No joke for you.'
    return joke
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithJoke = async (event) => {
  try {
    document.querySelector('#jokeresult').innerHTML = ''
    const answer = await getJoke()
    document.querySelector('#jokeresult').innerHTML = answer
  } catch (error) { console.error(error) }
}

console.log('INFO: Done loading, waiting for an event'); 

document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
  })