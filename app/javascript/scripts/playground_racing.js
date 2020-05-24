import Swal from "sweetalert2";

document.addEventListener("DOMContentLoaded", function() {

  /* select for highlight characters */
  let quoteDisplayLeft = document.getElementById('racingQuoteDisplay')
  let quoteInputLeft = document.getElementById('racingQuoteInput')
  let submitBtnLeft = document.querySelector('input[name="left_input"]')
  
  /* select for topic scroll */
  let quoteContainer = document.querySelector('.racing-ground')
  let topicContainer = quoteContainer.clientHeight * 0.33 // ask what is 0.33?
  let topicStartLine = document.querySelector('#racingQuoteTopic')
  
  /* select for ending page */
  let pageBody = document.querySelector('body')
  let endPage = document.createElement('div')
  endPage.className = "end-page"

  /* 播放鍵盤音效 */
  window.addEventListener('keydown', playSound);

  quoteInputLeft.addEventListener('input', () => {

    let arrayQuote = quoteDisplayLeft.querySelectorAll('span');
    let arrayValue = quoteInputLeft.value.split('')
    let inputIndex = quoteInputLeft.value.length

    checkCharacter(arrayQuote, arrayValue, inputIndex)
    submitBtnLeft.click()
    if (inputIndex === arrayQuote.length) {
      // pageBody.appendChild(endPage)
      Swal.fire({
        title: '遊戲結束！',
      }).then(() => {
        window.location.replace('/playground/racing')
      })
    }
  })

  /* topic area scroll */
  quoteInputLeft.addEventListener('keydown', () => {
    let selected = document.querySelector('.selected')
    let nextWord = selected.nextElementSibling
    let gapAmount = (selected.offsetTop) - (topicStartLine.offsetTop)
    let gapAmount2 = gapAmount - topicContainer

    if (gapAmount > topicContainer) {
      if (selected.offsetTop < nextWord.offsetTop) {
        $('#racingQuoteTopic').css('margin-top',`-${gapAmount}px`)
      } else {
        $('#racingQuoteTopic').css('margin-top',`-${gapAmount2}px`)
      }
    } 
  })


  function playSound() {
    const sound = document.getElementById('keyboard-sound')
    sound.currentTime = 0; //rewind to the start 
    sound.play();
  }

});
function checkCharacter(arrayQuote, arrayValue, inputIndex) {
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]

    if (character == null){
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      arrayQuote[inputIndex].classList.add('selected')
      arrayQuote[inputIndex + 1 ].classList.remove('selected')
      arrayQuote[inputIndex - 1 ].classList.remove('selected')
    } else if (character === characterSpan.innerText){
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
    }
  })
}
