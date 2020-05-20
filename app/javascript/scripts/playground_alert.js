$(document).ready(function(){
  $('#new_user_article').submit('turbolinks:load', function(e){
    Swal.fire({
      icon: 'success',
      text: '完成！繼續挑戰？',
      footer: '<a href="/stats">成績分析</a>',
      confirmButtonText: '來吧！',
      cancelButtonColor: '#aaaaaa'
    }).then(() => {
      window.location.replace('/playground/typing')
    })
  })
})

