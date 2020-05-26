import Swal from "sweetalert2";

$(function(){
  if ( $('#racing-index').length > 0 ){
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
      let endPage = document.createElement('div')
      endPage.className = "end-page"
    
      let readyBox = document.querySelector('#check_content')
      let readySubmit = document.querySelector('input[name="check-left"]')
      let guestCheck = document.querySelector('#guest-check')
      let hostCheck = document.querySelector('#check_content')
      let checkPage = document.querySelector('.check-group')
      let startHandler = false
      //const csrfToken = document.querySelector('[name=csrf-token]').content
      //const url = "http://localhost:3000/messages"
    
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
    
      readyBox.addEventListener('input', function () {
        //console.log(this.checked); //return true or false
        // console.log(readySubmit);
        this.classList.toggle('ready')
        readySubmit.click();
    
        if (this.className.includes('ready')) {
          console.log('REady');
        }
        /*
        if (this.checked) {
          Rails.ajax({
            url: "http://localhost:3000/messages/new",
            type: 'GET',
            // data: 'A', //I got some problem here...why can't I pass data with 
            success: resp => {
              console.log(resp);
            },
            error: err => {
              console.log(err);
            }
          })
        }*/
      })
    
    
    
    
    
      /* hightlight characters */
      quoteInputLeft.addEventListener('input', () => {
        if (startHandler === true) {
          
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
          /* 播放鍵盤音效 */
          window.addEventListener('keydown', playSound);
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
    
      let myVal = setInterval( function () {
        if ( hostCheck.checked === true && guestCheck.checked === true) {
          checkPage.classList.add('fade-out')
          setTimeout(() => {
            checkPage.classList.add('backward')
            startHandler = true
            return startHandler
            
          }, 1000);
          clearInterval(myVal);
        }
      }, 1000);
    
      let startVal = setInterval(() => {
        if (startHandler === true) {
          focusInput(quoteInputLeft);
          clearInterval(startVal);
        }
      }, 1000);
    
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
    
    function focusInput(quoteInputLeft) {
      quoteInputLeft.focus();
    }

  }
})
