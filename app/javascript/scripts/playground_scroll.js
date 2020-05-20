$(function(){
  $('#quoteInput').on('keydown', function(){
    let container = document.querySelector('.play-container') 
    let topicContain = container.clientHeight * 0.33
    // console.log(topicContain)

    let startLine = document.querySelector('#quotetopic')
    let selected = document.querySelector('.selected')
    let nextWord = selected.nextElementSibling
    // console.log(startLine.offsetTop)
    // console.log(selected.offsetTop)
    // console.log(nextWord.offsetTop)
    let gapAmount = (selected.offsetTop) - (startLine.offsetTop)
    // console.log(gapAmount)
    let gapAmount2 = gapAmount - topicContain
    // console.log(gapAmount2)

    if (gapAmount > topicContain) {
      if (selected.offsetTop < nextWord.offsetTop) {
        $('#quotetopic').css('margin-top',`-${gapAmount}px`)
      } else {
        $('#quotetopic').css('margin-top',`-${gapAmount2}px`)
      }
    } 
  })
})