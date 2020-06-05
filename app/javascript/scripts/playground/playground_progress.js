$(function(){
  if ( $('#coding-index').length > 0 || $('#typing-index').length > 0 || $('#customizations-index').length > 0 ){
    // article & code判斷
    eachAccracy = 0
    accracyArray = []
    for (let i = 0; i < $('.accracy').length; i++) {
      accracyArray.push($('.accracy')[eachAccracy].innerHTML)
      eachAccracy += 1
    }
    // eachProgress = 0
    // progressArray = []
    // for (let i = 0; i < $('.progress-bar').length; i++) {
    //   progressArray.push($('.progress-bar')[eachProgress])
    //   eachProgress += 1
    // }
    // console.log(progressArray)

    let n = 1
    for (let i = 0; i < accracyArray.length; i++) {

      let fullStars = Number(accracyArray[i])
      function giveFullStar() {
        $(`#lessonBar${n}`).append(`<img src="/icon/star-full.png" alt="..." >`)  
      }
      let stars = 5 - Number(accracyArray[i])
      function giveStar() {
        $(`#lessonBar${n}`).append(`<img src="/icon/star-emtpy.png" alt="..." >`)  
      }
      
      if (fullStars > 0){
        for (let n = 0; n < fullStars; n++) {
          giveFullStar();
        }
      }
      if (stars > 0){
        for (let n = 0; n < stars; n++) {
          giveStar();
        }
      }
      n += 1
    }
  }
  
  if ( $('#playground-index').length > 0 ){
    // playground判斷
    $('#typingModeBar .progress-bar').css("width", `${$(".article_progress")[0].innerText}%`)
    $('#lessonBar .progress-bar').css("width", `${$(".code_progress")[0].innerText}%`)
  }
})