$(document).ready(function(){

  $('#achievement').on('submit', function(e){
    let doneAt = document.querySelector('#time').value
    let doneWpm = document.querySelector('#speed').value
    let previousUrl = document.referrer

    Swal.fire({
      icon: 'success',
      title: '完成！繼續挑戰？',
      animation: 'pop',
      html: '<div class=user-score>你使用了'+ doneAt +'秒鐘，打字速度'+ doneWpm +'WPM！</div>',
      footer: '<a href="/stats">成績分析</a>',
      confirmButtonText: '來吧！',
      cancelButtonColor: '#aaaaaa'
    })
    .then(() => {
      window.location.replace(`${previousUrl}`);
    })
  })

})

