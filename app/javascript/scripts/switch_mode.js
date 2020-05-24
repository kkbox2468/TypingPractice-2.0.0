/* 色彩模式切換測試
  let checkBox = document.querySelector('#mode')
  let cards = [...document.querySelectorAll('.card')]
  let cardBodys = [...document.querySelectorAll('.card-body')]
  let cardButtons = [...document.querySelectorAll('.btn')]
  let webBody = document.querySelector('body')
  checkBox.addEventListener('change', function () {
    cardButtons.forEach((e) => {
      modeHandler(e);
    })
    cards.forEach((e) => {
      modeHandler(e);
    })
    cardBodys.forEach((e) => {
      modeHandler(e);
    })

    webBody.classList.toggle('dark-mode')
  })
  function modeHandler(e) {
    e.classList.toggle('dark-mode')
  }
  */