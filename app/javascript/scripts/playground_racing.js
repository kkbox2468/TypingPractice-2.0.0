import Swal from "sweetalert2";

$(function(){
  if ( $('#rooms-show').length > 0 ){
    console.log('Rooms-Show');
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
    /* select for player status */
    let readyBox = document.querySelector('#check_content')
    let readyBtnHost = document.querySelector('.ready-btn-host')
    let readySubmit = document.querySelector('input[name="check-left"]')
    let guestCheck = document.querySelector('#guest-check')
    let hostCheck = document.querySelector('#check_content')
    let checkPage = document.querySelector('.check-group')
    let startHandler = false
    //const csrfToken = document.querySelector('[name=csrf-token]').content
    //const url = "http://localhost:3000/messages"

    /* select for correct character amount */
    let hostCorrectAmount = document.querySelector('#hostCorrect')
    let timeCounterView = document.querySelector('#timeCounter')
    

    /* preloader */
    let preloader = document.querySelector('.preloader')
    let preloaderBar = document.querySelector('.single9')
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 2500);
    setTimeout(() => {
      preloader.classList.add('backward');
      preloaderBar.classList.add('backward')
    }, 4200);

    if(((quoteInputLeft.value).length) <= 0){
      quoteDisplayLeft.querySelectorAll('span')[0].classList.add('selected')
    }

    quoteInputLeft.addEventListener('input', () => {

      let arrayQuote = quoteDisplayLeft.querySelectorAll('span');
      let arrayValue = quoteInputLeft.value.split('')
      let inputIndex = quoteInputLeft.value.length
      
      checkCharacter(arrayQuote, arrayValue, inputIndex)
      let correctChracters = document.querySelectorAll('#racingQuoteTopic .correct');
      console.log(correctChracters);
      hostCorrectAmount.innerText = correctChracters.length
      submitBtnLeft.click() //sent message to backend and broadcast to Action Cable
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
      this.classList.toggle('ready')
      readyBtnHost.classList.toggle('active')
      if (readyBtnHost.innerText === "No") {
        readyBtnHost.innerText = "Yes"
      } else {
        readyBtnHost.innerText = "No"
      }
      readySubmit.click();
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
          endGame()
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
    /* When two players are ready then start the game. */
    let readyHandlerVal = setInterval( function () {
      if ( hostCheck.checked === true && guestCheck.checked === true) {
        checkPage.classList.add('fade-out')
        setTimeout(() => {
          checkPage.classList.add('backward')
          startHandler = true
          return startHandler
        }, 1000);
        clearInterval(readyHandlerVal);

        let countDown = 60
        setTimeout(() => {
          let downCounter = setInterval(() => {
            countDown -= 1
            timeCounterView.innerText = countDown
            console.log(countDown);
            if (countDown === 0) {
              console.log('ZERO');
              clearInterval(downCounter);
              endGame()
            }
          }, 1000);
        }, 1000);
      }
    }, 1000);
    /* When two players are focus on the textarea. */
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
    function endGame() {
      Swal.fire({
        title: '遊戲結束！',
      }).then(() => {
        window.location.replace('/playground/racing')
      })
    }
  }
})
