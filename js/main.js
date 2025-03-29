  document.querySelector('button').addEventListener('click', function() {
    fetchAndTranslate()
  } )

function fetchAndTranslate(){
  const zenQoutesUrl = `https://api.allorigins.win/raw?url=https://zenquotes.io/api/random/&timestamp=${new Date().getTime()}`
  const yodaUrl = `https://api.funtranslations.com/translate/yoda.json` 
  https://api.allorigins.win/raw?url=https://coffee.alexflipnote.dev/jacVUEOMMhk_coffee.png


  document.querySelector('h2').classList.remove('fade-in');

setTimeout(function(){
  document.querySelector('h2').classList.add('fade-in');
},1);



  fetch(zenQoutesUrl)  
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       const quoteText = data[0].q
       const quoteAuthor = data[0].a  
  

      return fetch(`${yodaUrl}?text=${encodeURIComponent(quoteText)}`)
      .then(res => res.json()) // parse response as JSON
      .then(yodaData => {
        console.log(yodaData)
      document.querySelector('h2').innerHTML = `"${yodaData.contents.translated}" - ${quoteAuthor}`
    });
  })    
   
      .catch(err => {
          console.log(`error ${err}`)

          
      })
    }



// fetchAndTranslate().then(translatedQuotes => {
//   document.querySelector("button").addEventListener("click",displayRandomQuote(translatedQuotes))
// })

// function fetchAndTranslate() {
//   const zenQoutesUrl = `https://api.allorigins.win/raw?url=https://zenquotes.io/api/random/`
//   const yodaUrl = `https://api.funtranslations.com/translate/yoda.json` 

//   fetch(zenQoutesUrl)
//   .then(res => res.json)
//   .then(data => {
//     console.log(data)
//   })
// }