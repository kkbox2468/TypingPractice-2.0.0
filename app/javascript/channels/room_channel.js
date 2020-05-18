import consumer from "./consumer"

window.onload = function () {
  let roomElement = document.querySelector('#room-id')
  let roomId = roomElement.getAttribute('data-room-id')
  let userElement = document.querySelector('#user-id')
  let userId = Number(userElement.getAttribute('data-user-id'))

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
      console.log(data.content);
      var quoteInputRight = document.querySelector('#quoteInput2');
      let quoteDisplay2 = document.querySelector('#quoteDisplay2')
      quoteInputRight.innerText = data.content
      const arrayQuote = quoteDisplay2.querySelectorAll('span');
      const arrayValue = quoteInputRight.value.split('')
      const inputIndex = quoteInputRight.value.length

      if (userId !== data.message.user_id) {
        checkCharacter(arrayQuote, arrayValue, inputIndex)
        // console.log('Hero ID -' + data.message.hero_id);
      } else {
      }
    }
  });

  var quoteInputLeft = document.querySelector('#quoteInput');
  var submitBtnLeft = document.querySelector('input[name="left_input"]')
  let quoteDisplay1 = document.querySelector('#quoteDisplay')
  quoteInputLeft.addEventListener('input', () => {
    const arrayQuote = quoteDisplay1.querySelectorAll('span');
    const arrayValue = quoteInputLeft.value.split('')
    const inputIndex = quoteInputLeft.value.length
    checkCharacter(arrayQuote, arrayValue, inputIndex)
    submitBtnLeft.click()
  })
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
}


