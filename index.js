const quoteText = document.querySelector('.quote-text')
const authorText = document.querySelector('.author-text')
const randomQuoteBtn = document.querySelector('.random-quote-button')

const getQuote = async function () {
  let response = await fetch('https://type.fit/api/quotes')
  let responseJSON = await response.json()
  let randomNumber = Math.floor(Math.random() * 25)

  quoteText.textContent = responseJSON[randomNumber].text
  authorText.textContent = '-' + responseJSON[randomNumber].author
}

window.addEventListener('load', getQuote)

randomQuoteBtn.addEventListener('click', () => {
  randomQuoteBtn.classList.add('button-change')
  setTimeout(() => {
    randomQuoteBtn.classList.remove('button-change')
  }, 100)
  getQuote()
})
