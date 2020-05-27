$(function(){
  if ( $('#coding-index').length > 0 || $('#typing-index').length > 0 ){

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
    console.log(accracyArray)
    console.log(progressArray)


    for (let i = 0; i < accracyArray.length; i++) {
      $(progressArray[i]).css("width", `${accracyArray[i]}%`)
    }
  }
})