$(function(){
  if ($('#room-show').length > 0 ){

    // const RNADOM_QUOTE_API_URL = 'https://api.quotable.io/random'
    // const quoteDisplayElement = document.getElementById('quoteDisplay')
    // const quoteInputElement = document.getElementById('quoteInput')
    const racingtopic = document.getElementById('racingQuoteTopic')
    const racingDisplay = document.getElementById('racingQuoteDisplay')
    const racingInput = document.getElementById('racingQuoteInput')
    const wpmElement = document.getElementById('wpm')
    
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
      let resultTime = document.querySelector('#timeCounter').innerText
      let catchResultTime = document.querySelector('#time')
      catchResultTime.value = parseFloat(resultTime)
  
      // 字數
      let resultType = quotetopicElement.getElementsByTagName('span').length
      let catchReslutType = document.querySelector('#letter_count')
      catchReslutType.value = parseFloat(resultType)
    
      // 速度

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
        
      const arrayQuote = racingQuoteInput.querySelectorAll('span');
      const arrayValue = racingInput.value.split('')
      const inputIndex = quoteInputElement.value.length
      // let keyNumber = window.keyCode
      // console.log(inputIndex)
      // console.log(arrayQuote[inputIndex])
      // console.log(arrayQuote[1]);

      arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index] 
  }
})