$(function(){
  if ( $('#coding-show').length > 0 || $('#typing-show').length > 0 ){

    $('#quoteInput').on('keydown', function(){
      let container = document.querySelector('.play-container') 
      let topicContain = container.clientHeight * 0.33
  
      let startLine = document.querySelector('#quotetopic')
      let selected = document.querySelector('.selected')
      let nextWord = selected.nextElementSibling
      let gapAmount = (selected.offsetTop) - (startLine.offsetTop)
      let gapAmount2 = gapAmount - topicContain
  
      if (gapAmount > topicContain) {
        if (selected.offsetTop < nextWord.offsetTop) {
          $('#quotetopic').css('margin-top',`-${gapAmount}px`)
        } else {
          $('#quotetopic').css('margin-top',`-${gapAmount2}px`)
        }
      } 
    })
  }
})