$(function(){
  if ( $('#coding-show').length > 0 || $('#typing-show').length > 0 ){

    const RNADOM_QUOTE_API_URL = 'https://api.quotable.io/random'
    const quoteDisplayElement = document.getElementById('quoteDisplay')
    const quoteInputElement = document.getElementById('quoteInput')
    const quotetopicElement = document.getElementById('quotetopic')
    const wpmElement = document.getElementById('wpm')
      
    
    /* 監聽input中的改變 */ 
    // quoteInputElement.addEventListener('input', () => {
    //   console.log('changed');
    // })
    /* 監聽鍵盤事件 */
    // window.addEventListener('keypress', function (e) {
    //   console.log(e.keyCode);
    // })
    
    /* 封鎖滑鼠事件 */
    // let blockArea = document.querySelector('body')
    // blockArea.addEventListener('click', (e) => {
    //   e.stopPropagation();
    //   e.preventDefault();
    // })
    // blockArea.addEventListener('mouseup', (e) => {
    //   e.stopPropagation();
    //   e.preventDefault();
    // })
    // blockArea.addEventListener('mousedown', (e) => {
    //   e.stopPropagation();
    //   e.preventDefault();
    // })
  
    /* 比對input內的文字，來標注正確與錯誤提示 */ 
    let textAmount = 0;
    let startType = 0;
  
    let correct = true;
    let rightCounter = 0;
    let wrongCounter = 0;
  
    /* 過濾存到資料庫之字母 */ 
    function filterLetters(arrayLetter) {
    
      let permittedLetter = [];
    
      arrayLetter.forEach((letter) => { 
        letter = letter.toLowerCase();
        if (letter.match(/[a-z]/)) {
          permittedLetter.push(letter);
        }
      })
    
      return [...new Set(permittedLetter)].sort();
    }
  
    function getresult(contentTest) {
      // 秒數
      let resultTime = document.querySelector('#seconds').innerText
      let catchResultTime = document.querySelector('#time')
      catchResultTime.value = parseFloat(resultTime)
  
      // 字數
      let resultType = quotetopicElement.getElementsByTagName('span').length
      let catchReslutType = document.querySelector('#letter_count')
      catchReslutType.value =  parseFloat(resultType)
    
      // 速度
      //存到資料庫不能是瞬時速度
      // let resultWpm = document.querySelector('#wpm').innerText
              
      let catchResultWpm = document.querySelector('#speed')
      catchResultWpm.value =  parseFloat((resultType/5)/(resultTime/60)).toFixed(1)
      
      // 錯誤字母
      let  resultInCorrentWord = []
      let incorrects = document.querySelectorAll('#quotetopic .incorrect')
      incorrects.forEach(($dom) => { resultInCorrentWord.push($dom.innerText) })
        
      let catchResultInCorrentWord = document.querySelector('#wrong_letter')
      catchResultInCorrentWord.value = filterLetters(resultInCorrentWord) || ""
    
      // 錯誤字數
      let catchResultInCorrentWordCount = document.querySelector('#wrong_letter_count')
      catchResultInCorrentWordCount.value = resultInCorrentWord.length 
        
      // 準確度
      let corrects = document.querySelectorAll('#quotetopic .correct')
      let correctRate = (corrects.length / contentTest)
      let catchResultAccuracy = document.querySelector('#accuracy')
      catchResultAccuracy.value = parseFloat(correctRate * 100).toFixed(1) || 0
    };

    if(((quoteInputElement.value).length) <= 0){
      quotetopicElement.querySelectorAll('span')[0].classList.add('selected')
    }

    quoteInputElement.addEventListener('input', () => {   
      if (startType === 0) {
        startTimer();
        getWpm();
      }
      startType++;
        
      const arrayQuote = quoteDisplayElement.querySelectorAll('span');
      const arrayValue = quoteInputElement.value.split('')
      const inputIndex = quoteInputElement.value.length
      // let keyNumber = window.keyCode
      // console.log(inputIndex)
      // console.log(arrayQuote[inputIndex])
      // console.log(arrayQuote[1]);

      arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index] 

        if (character == null) {
          characterSpan.classList.remove('correct')
          characterSpan.classList.remove('incorrect', 'showWrong')
          arrayQuote[inputIndex].classList.add('selected')
          arrayQuote[inputIndex + 1 ].classList.remove('selected')
          arrayQuote[inputIndex - 1 ].classList.remove('selected')
          correct = false

        } else if (character === characterSpan.innerText){
          characterSpan.classList.add('correct')
          characterSpan.classList.remove('incorrect', 'showWrong')
          rightCounter++;  
    
        } else {
          // inCorrentWordArr.length=0
          characterSpan.classList.remove('correct')
          characterSpan.classList.add('incorrect', 'showWrong')
          wrongCounter++;
          correct = false
        }
      })
        
      if (event.data !== null) {
        textAmount++;
        // console.log(event.data);
        // console.log(`按鍵次數: ${textAmount}`);
      } 
        
      //印出正確與錯誤次數
      // console.log(`正確次數: ${rightCounter}`);
      // console.log(`錯誤次數: ${wrongCounter}`);
    
      //計算wpm
      // if (secElement.innerText % 5 === 0) {
      //   let wpm = Math.floor((textAmount / 0.5));
      //   wpmElement.innerText = `${wpm}wpm`
      //   console.log(`-------------${wpm}------------`);
      //   return textAmount = 0
      // }
    
      /* console輸入結果 */
    
      // const quoteInputElement = document.getElementById('quoteInput')
      let inputValue = quoteInputElement.value
  
      // console.log(`輸入的內容:${inputValue}`)
  
      let inputValueLength = inputValue.length 
      // console.log(`已輸入字數：${inputValueLength}`)  
      
      const contentTest = (quotetopicElement.getElementsByTagName('span').length) 
      // console.log(`題目字數:${contentTest}`) 
  
      const countDownResult = contentTest - inputValueLength //還差幾個字完成
      // console.log(`還差${countDownResult}` )
    
      const timeSum = document.getElementById('seconds').innerText   //花費時間、秒數
        
      getresult(contentTest);
      if (countDownResult === 0) {     
        /* 送出成績 */
        $('input[name="submit_result"]').click();
        stopTimer();
      } 
    })
    
    /*  抓取隨機英文段落作為題目 */
    function getRandomQuote() {
      return  fetch(RNADOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
    }
    
    /* 下面這段可以在console中印出抓到的api content內容 */ 
    // async function getNextQuote() {
    //   const quote = await getRandomQuote()
    //   console.log(quote);
    // }
    // getNextQuote()
    
    /* 把quote內容文字一個一個分開，加上span塞回畫面中 */ 
    async function renderNextQuote() {
      const quote = await getRandomQuote()
      quoteDisplayElement.innerHTML = ''
      //將quote內容逐字分開
      quote.split('').forEach(character => {
        const characterSpan = document.createElement('span');
        // characterSpan.classList.add('selected')
        characterSpan.innerText = character;
        quoteDisplayElement.appendChild(characterSpan);
      });
      quoteInputElement.value = null
      startTimer();
    }
    
    let startTime
    let timer = null
    // const minElement = document.getElementById('minutes')
    const secElement = document.getElementById('seconds')
    const millisecElement = document.getElementById('millisec')
    
    function startTimer() {
      // minElement.innerText = '0'
      secElement.innerText = '0'
      // millisecElement.innerText = '0'
      startTime = new Date() //這會把時間設為current time
      timer = setInterval(() => {
        secElement.innerText = getTimerTime()
          
        // millisecElement.innerText = getTimeMillisec()
        /* 想要做歸零功能但不work */
        // if (secElement.innerText === 3){
        //   secElement.innerText = null;
        // } else {
        // secElement.innerText = getTimerTime()
        // }
        // timer.innerText = getTimerTime() //為什麼這行timer也抓得到secElement?
      }, 1000)
    }

    function stopTimer(){
      window.clearInterval(timer)
    }
  
    function getTimerTime() {
      return `${Math.floor((new Date() - startTime) / 1000)}`
    }
  
    // function getTimeMillisec() {
    //   return `${Math.floor(new Date().getMilliseconds() / 10)}毫秒`
    // } 毫秒的資料暫時不用所以先註解
  
    /* 鍵盤音效 */
    function playSound() {
      const sound = document.getElementById('keyboard-sound')
      // if (!sound) return ;//stop the function from running all together
      sound.currentTime = 0; //rewind to the start 
      sound.play();
    }
  
    let wpm = 0
      
    function getWpm() {
      const ＷpmFactor = 0.83
      var a = setInterval(() => {
        wpm = Math.floor((textAmount / ＷpmFactor));
        wpmElement.innerText = `${wpm}`
        // console.log(`-------------${wpm}------------`);
        return textAmount = 0
      }, 10000);
    }
  
    //計算wpm
    // if (secElement.innerText % 5 === 0) {
    //   let wpm = Math.floor((textAmount / 0.5));
    //   wpmElement.innerText = `${wpm}wpm`
    //   console.log(`-------------${wpm}------------`);
    //   return textAmount = 0
    // }
  
    // renderNextQuote()
    // setTimeout(function(){ renderNextQuote(); }, 3000);
    
    window.addEventListener('keydown', playSound);
    
   //---------- keyboard -------------//
    
    window.addEventListener('keydown', function(e){   
      // console.log('e.code')
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    //  取得按鍵對應的元素
      key.classList.add('playing');  //為該元素增加 class
      if (e.keyCode === 9){
        e.preventDefault();  //阻止tab發生原生功能 
      }
    })
  
    window.addEventListener('keyup', function(e){
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    //  取得按鍵對應的元素
      key.classList.remove('playing');//為該元素移除 class
      if (e.keyCode === 9){
        e.preventDefault();  //阻止tab發生原生功能 
      }     
    });
  }
})