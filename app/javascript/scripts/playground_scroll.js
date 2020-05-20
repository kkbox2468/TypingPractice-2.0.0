$(function(){
  console.log('let\'s d it!')

  $('#quoteInput').on('keydown', function(){
    let clinth = document.querySelector('.play-container')
    let clinth12 = clinth.clientHeight * 0.33
    console.log(clinth12)

    let startLine = document.querySelector('#quotetopic')
    let selected = document.querySelector('.selected')
    let nextWord = selected.nextElementSibling
    console.log(startLine.offsetTop)
    console.log(selected.offsetTop)
    console.log(nextWord.offsetTop)
    let gapAmount = (selected.offsetTop) - (startLine.offsetTop)
    console.log(gapAmount)
    let gapAmount2 = gapAmount - clinth12
    console.log(gapAmount2)

    if (gapAmount > clinth12) {
      if (selected.offsetTop < nextWord.offsetTop) {
        console.log('換行啦')
        $('#quotetopic').css('margin-top',`-${gapAmount}px`)
      } else if (selected.offsetTop < nextWord.offsetTop) {
        $('#quotetopic').css('margin-top',`-${gapAmount2}px`)
      }
      else {
        console.log('不要動')
      }
    } 
  })
})
