$(document).ready(function(){

  $('#new_user_article').submit('turbolinks:load', function(e){
    let doneAt = document.querySelector('#user_article_time').value
    let doneWpm = document.querySelector('#user_article_speed').value

    Swal.fire({
      icon: 'success',
      title: '完成！繼續挑戰？',
      animation: 'pop',
      // text: `${doneAt}`,
      html: '<div class=user-score>你使用了'+ doneAt +'秒鐘，打字速度'+ doneWpm +'WPM！</div>',
      footer: '<a href="/stats">成績分析</a>',
      confirmButtonText: '來吧！',
      cancelButtonColor: '#aaaaaa'
    }).then(() => {
      window.location.replace('/playground/typing')
    })
  })

})

