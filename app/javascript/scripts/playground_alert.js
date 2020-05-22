$(document).ready(function(){

  // if($('.flash')){

  //   Swal.fire({
  //     icon: 'success',
  //     title: '完成！繼續挑戰？',
  //     animation: 'pop',
  //     html: '<div class=user-score>你使用了'+ doneAt +'秒鐘，打字速度'+ doneWpm +'WPM！</div>',
  //     footer: '<a href="/stats">成績分析</a>',
  //     confirmButtonText: '來吧！',
  //     cancelButtonColor: '#aaaaaa'
  //   }).then(() => {
  //     window.location.replace('/playground/typing')
  //   })
  // }


  $('.flash').on('turbolinks:load', function(e){
    let doneAt = document.querySelector('#user_article_time').value
    let doneWpm = document.querySelector('#user_article_speed').value
    debugger

    Swal.fire({
      icon: 'success',
      title: '完成！繼續挑戰？',
      animation: 'pop',
      html: '<div class=user-score>你使用了'+ doneAt +'秒鐘，打字速度'+ doneWpm +'WPM！</div>',
      footer: '<a href="/stats">成績分析</a>',
      confirmButtonText: '來吧！',
      cancelButtonColor: '#aaaaaa'
    }).then(() => {
      window.location.replace('/playground/typing')
    })
    
  })
})

