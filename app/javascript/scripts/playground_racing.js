
document.addEventListener("DOMContentLoaded", function() {

  const quoteDisplayLeft = document.getElementById('racingQuoteDisplay')
  const quoteDisplayRight = document.getElementById('racingQuoteDisplay2')
  const quoteInputLeft = document.getElementById('racingQuoteInput')
  const quoteInputRight = document.getElementById('racingQuoteInput2')
  const quotetopicLeft = document.getElementById('racingQuoteTopic')
  const quotetopicRight = document.getElementById('racingQuoteTopic2')
  const submitBtnLeft = document.querySelector('input[name="left_input"]')

  /* 播放鍵盤音效 */
  window.addEventListener('keydown', playSound);

  quoteInputLeft.addEventListener('input', () => {
    const arrayQuote = quoteDisplayLeft.querySelectorAll('span');
    const arrayValue = quoteInputLeft.value.split('')
    const inputIndex = quoteInputLeft.value.length
    checkCharacter(arrayQuote, arrayValue, inputIndex)
    submitBtnLeft.click()
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
// export { checkCharacter }
