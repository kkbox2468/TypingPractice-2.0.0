import consumer from "./consumer"
import { checkCharacter } from "../packs/playground_racing"

window.onload = function () {
  let roomElement = document.querySelector('#room-id')
  let roomId = roomElement.getAttribute('data-room-id')
  let userElement = document.querySelector('#user-id')
  let userId = Number(userElement.getAttribute('data-user-id'))
  const quoteInputRight = document.getElementById('racingQuoteInput2')
  const quoteDisplayRight = document.getElementById('racingQuoteDisplay2')
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
      /**/
      // var quoteInputRight = document.querySelector('#quoteInput2');
      // let quoteDisplay2 = document.querySelector('#quoteDisplay2')
      quoteInputRight.innerText = data.content
      const arrayQuote = quoteDisplayRight.querySelectorAll('span');
      const arrayValue = quoteInputRight.value.split('')
      const inputIndex = quoteInputRight.value.length

      if (userId !== data.message.user_id) {
        checkCharacter(arrayQuote, arrayValue, inputIndex)
        // console.log('Hero ID -' + data.message.hero_id);
      }
    }
  });
}


