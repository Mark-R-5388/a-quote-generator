const quoteText = document.querySelector('.quote-text')
const authorText = document.querySelector('.author-text')
const randomQuoteBtn = document.querySelector('.random-quote-button')

const QUOTEURL = 'http://quotes.stormconsultancy.co.uk/random.json'

const getQuote = async function () {
  let response = await fetch(QUOTEURL)
  let responseJSON = await response.json()
  quoteText.textContent = responseJSON.quote
  authorText.textContent = '-' + responseJSON.author
}

window.addEventListener('load', getQuote)

randomQuoteBtn.addEventListener('click', () => {
  randomQuoteBtn.classList.add('button-change')
  setTimeout(() => {
    randomQuoteBtn.classList.remove('button-change')
  }, 100)
  getQuote()
})
