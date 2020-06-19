import consumer from "./consumer"

$(function(){

  if ( $('#rooms-show').length > 0 ){

    let roomElement = document.querySelector('#room-id')
    let roomId = roomElement.getAttribute('data-room-id')
    let userElement = document.querySelector('#user-id')
    let userId = Number(userElement.getAttribute('data-user-id'))
    let userNameRight = document.querySelector('#userRight')
    /* select for highlight characters */
    let quoteInputRight = document.getElementById('racingQuoteInput2')
    let quoteDisplayRight = document.getElementById('racingQuoteDisplay2')
    /* select for topic scroll */
    let quoteContainer = document.querySelector('.racing-ground')
    let topicContainer = quoteContainer.clientHeight * 0.33 
    let topicStartLine = document.querySelector('#racingQuoteTopic2')
    /* select for ready check */
    let guestCheck = document.querySelector('#guest-check')
    /* select for records */
    let guestCorrect = document.querySelector('#guestCorrect')
    /* sweet alert for leave battle */
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    let gameStartStatus = false

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

        /* check players status */
        if (data.check) {
          if (userId !== data.user_id) {
            userNameRight.innerText = data.user_name
            guestCheck.click();
            readyBtnGuest.classList.toggle('active')
            if (readyBtnGuest.innerText === "Not ready") {
              readyBtnGuest.innerText = "Is Ready"
              $('.ready-title-guest').empty();
              $('#guest-name').append(
                '<small>Your competitor : </small><br>' + data.user_name 
              )
            } else {
              readyBtnGuest.innerText = "Not ready"
              $('#guest-name').empty();
              $('.ready-title-guest').append(`
                Wait for competitor...
              `)
            }
          }
        }

        if (data.type == "records") {
          if (userId !== data.user_id) {
            guestCorrect.innerText = data.accuracy
          }
        }

        /* render messages to other player's screen */
        if (data.message) {
          gameStartStatus = true
          if (userId !== data.message.user_id) {
            quoteInputRight.innerText = data.content
            let arrayQuote = quoteDisplayRight.querySelectorAll('span');
            let arrayValue = quoteInputRight.value.split('')
            let inputIndex = quoteInputRight.value.length
            checkCharacter(arrayQuote, arrayValue, inputIndex)
            if (inputIndex === arrayQuote.length) {
              Swal.fire({
                title: 'GAME OVER!',
              }).then(() => {
                window.location.replace('/playground/racing')
              })
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
        }
        if (gameStartStatus !== true && data.leave) {
          swalWithBootstrapButtons.fire({
            title: 'Your competitor has been leaved',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Stay',
            cancelButtonText: 'Leave',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
              location.reload();
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              history.go(-1)
            }
          })
        } 
      }
    });
  }
})

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

