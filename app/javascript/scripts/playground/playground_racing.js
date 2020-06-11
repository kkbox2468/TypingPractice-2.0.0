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

    /* select for textarea label */
    let coverLabel = document.querySelector('#label-textarea')
    let quoteFocus = document.querySelector('#racingQuoteDisplay')
    
    /* select for player status */
    let readyBox = document.querySelector('#check_content')
    let readyBtnHost = document.querySelector('.ready-btn-host')
    let readySubmit = document.querySelector('input[name="check-left"]')
    let guestCheck = document.querySelector('#guest-check')
    let hostCheck = document.querySelector('#check_content')
    let checkPage = document.querySelector('.check-group')
    let startHandler = false


    /* select for correct character amount */
    let hostCorrectAmount = document.querySelector('#hostCorrect')
    let guestCorrectAmount = document.querySelector('#guestCorrect')

    let timeCounterView = document.querySelector('#timeCounter')
    let counterZone = document.querySelector('#counterZone')
    let recordPoints = document.querySelector('#records_accuracy')
    let recoudSubmit = document.querySelector('input[name="record-submit"]')
    
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

    readyBox.addEventListener('input', function () {
      this.classList.toggle('ready')
      readyBtnHost.classList.toggle('active')
      if (readyBtnHost.innerText === "Ready") {
        readyBtnHost.innerText = "Yes"
      } else {
        readyBtnHost.innerText = "Ready"
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
        let correctChracters = document.querySelectorAll('#racingQuoteTopic .correct');
        hostCorrectAmount.innerText = correctChracters.length
        recordPoints.value = correctChracters.length
        recoudSubmit.click()
        submitBtnLeft.click() //sent message to backend and broadcast to Action Cable
        
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

      let hostPoint = Number($('#hostCorrect')[0].innerText)
      let guestPoint = Number($('#guestCorrect')[0].innerText)
      let hostWidth = Math.floor((hostPoint/(hostPoint+guestPoint))*100)
      let guestWidth = Math.floor((guestPoint/(hostPoint+guestPoint))*100)

      if(hostWidth > 70 ){
        hostWidth = 70
        guestWidth = 30
      }
      if(guestWidth > 70 ){
        hostWidth = 30
        guestWidth = 70
      }
      $('.host').attr('style', `width:${hostWidth}%`)
      $('.guest').attr('style', `width:${guestWidth}%`)
    })

    /* When two players are ready then start the game. */
    let readyHandlerVal = setInterval( function () {
      if ( hostCheck.checked === true && guestCheck.checked === true) {
        checkPage.classList.add('fade-out')
        setTimeout(() => {
          checkPage.classList.add('backward')
          startHandler = true
        }, 1000);
        clearInterval(readyHandlerVal);

        let startDownCounter = document.createElement('h5')
        startDownCounter.setAttribute('id', 'startCounter')
        counterZone.append(startDownCounter)
        let startCounterView = document.querySelector('#startCounter')
        let startCount = 3
        let starterVal = setInterval(() => {
          startCounterView.innerText = startCount
          startCount -= 1
          if (startCount <= -1) {
            clearInterval(starterVal);
            startCounterView.innerText = "START!!!"
            setTimeout(() => {
              startCounterView.remove()
            }, 1000);
          }
        }, 1000);

        let countDown = 60
        setTimeout(() => {
          let downCounter = setInterval(() => {
            countDown -= 1
            timeCounterView.innerText = countDown
            // console.log(countDown);
            if (countDown === 0) {
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
        setTimeout(() => {
          coverLabel.classList.remove('d-none')
          quoteFocus.classList.add('focused')
          focusInput(quoteInputLeft);
        }, 2500);
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
      let hostCorrectNumber = Number(hostCorrectAmount.innerText)
      let guestCorrectNumber = Number(guestCorrectAmount.innerText)
      let userLeft = document.querySelector('#userLeft').innerText
      let userRight = document.querySelector('#userRight').innerText
      let winner 
      
      if (hostCorrectNumber > guestCorrectNumber) {
        winner = userLeft
      } else {
        winner = userRight
      }
      Swal.fire({
        title: '遊戲結束！',
        html: '<h1> Winner is : ' + winner + '</h1>',
      }).then(() => {
        window.location.replace('/playground/racing')
      })
    }

    function showCombo() {
      let correctLength = $('.selected').prevUntil($('.incorrect')).length

      if (correctLength < 5){
        $('.combo-count').css('animation-name', '')
        $('#combo-count').empty();
      }
      else if (correctLength >= 5){
        $('.combo-count').css('animation-name', '')
        $('#combo-count').empty();
        $('#combo-count').append(`
          ${correctLength}COMBO!
        `)
        setTimeout(() => {
          $('.combo-count').css('animation-name', 'combo')
        }, 0)
      }
    }

    function competition(){
      let ball =  $('#myPoint')
      let hostPoint = Number($('#hostCorrect')[0].innerText)
      let guestPoint = Number($('#guestCorrect')[0].innerText)
      let ballSet = -(hostPoint - guestPoint)/5

      if (ballSet) {
        ball.css('margin-left', `${ballSet}rem`)
      }
    }

    /* Show user combo count if user key in correct 5 times. */
    window.addEventListener('keyup', function(){
      showCombo();
    })

    setInterval(function(){
      competition();
    },1000)
  }
})

