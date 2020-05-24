import consumer from "./consumer"
// import { checkCharacter } from "../scripts/playground_racing"

window.onload = function () {
  let roomElement = document.querySelector('#room-id')
  let roomId = roomElement.getAttribute('data-room-id')
  let userElement = document.querySelector('#user-id')
  let userId = Number(userElement.getAttribute('data-user-id'))
  const quoteInputRight = document.getElementById('racingQuoteInput2')
  const quoteDisplayRight = document.getElementById('racingQuoteDisplay2')

  let quoteContainer = document.querySelector('.racing-ground')
  let topicContainer = quoteContainer.clientHeight * 0.33 
  let topicStartLine = document.querySelector('#racingQuoteTopic2')
  

  consumer.subscriptions.create({ channel: "RoomChannel", room_id: roomId }, {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log('connected to ' + roomId );
      
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      // Called when there's incoming data on the websocket for this channel
      // console.log(data.content);

      quoteInputRight.innerText = data.content
      const arrayQuote = quoteDisplayRight.querySelectorAll('span');
      const arrayValue = quoteInputRight.value.split('')
      const inputIndex = quoteInputRight.value.length

      if (userId !== data.message.user_id) {
        checkCharacter(arrayQuote, arrayValue, inputIndex)
      }

      let selected = document.querySelector('.selected2')
      let nextWord = selected.nextElementSibling
      let gapAmount = (selected.offsetTop) - (topicStartLine.offsetTop)
      let gapAmount2 = gapAmount - topicContainer
  
      if (gapAmount > topicContainer) {
        if (selected.offsetTop < nextWord.offsetTop) {
          $('#racingQuoteTopic2').css('margin-top',`-${gapAmount}px`)
        } else {
          $('#racingQuoteTopic2').css('margin-top',`-${gapAmount2}px`)
        }
      } 
    }
  });
}

function checkCharacter(arrayQuote, arrayValue, inputIndex) {
  arrayQuote.forEach((characterSpan, index) => {
    let character = arrayValue[index]

    if (character == null){
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      arrayQuote[inputIndex].classList.add('selected2')
      arrayQuote[inputIndex + 1 ].classList.remove('selected2')
      arrayQuote[inputIndex - 1 ].classList.remove('selected2')
    } else if (character === characterSpan.innerText){
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
      characterSpan.classList.remove('selected2')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      characterSpan.classList.remove('selected2')
    }
  })
}
