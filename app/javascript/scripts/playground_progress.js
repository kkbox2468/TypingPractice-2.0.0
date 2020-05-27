$(function(){
  if ( $('#coding-index').length > 0 || $('#typing-index').length > 0 ){
    // article & code判斷
    eachAccracy = 0
    accracyArray = []
    for (let i = 0; i < $('.accracy').length; i++) {
      accracyArray.push($('.accracy')[eachAccracy].innerHTML)
      eachAccracy += 1
    }

    eachProgress = 0
    progressArray = []
    for (let i = 0; i < $('.progress-bar').length; i++) {
      progressArray.push($('.progress-bar')[eachProgress])
      eachProgress += 1
    }

    for (let i = 0; i < accracyArray.length; i++) {
      $(progressArray[i]).css("width", `${accracyArray[i]}%`)
    }
  }
  
  if ( $('#playground-index').length > 0 ){
    // playground判斷
    $('#typingModeBar .progress-bar').css("width", `${$(".article_progress")[0].innerText}%`)
    $('#codeModeBar .progress-bar').css("width", `${$(".code_progress")[0].innerText}%`)

  }
})