$(function(){

//字體大小
  $('.typeT-item-sm').on('click', function(){
    $('.quote-display span').css("font-size", "2rem");
  })
  $('.typeT-item-md').on('click', function(){
    $('.quote-display span').css("font-size", "3rem");
  })
  $('.typeT-item-lg').on('click', function(){
    $('.quote-display span').css("font-size", "3.5rem");
  })

//聲音
  $('.sound-item-1').on('click', function(){
    $('#keyboard-sound').remove();
    $('.justify-content-center').append(`
      <audio id="keyboard-sound">
        <source class="keyboard-sound" src="/sound/keyboard_sound04.wav" type="audio/wav" > 
      </audio>
    `)
  })
  $('.sound-item-2').on('click', function(){
    $('#keyboard-sound').remove();
    $('.justify-content-center').append(`
      <audio id="keyboard-sound">
        <source class="keyboard-sound" src="/sound/keyboard_sound02.wav" type="audio/wav" > 
      </audio>
    `)
  })
  $('.sound-item-3').on('click', function(){
    $('#keyboard-sound').remove();
    $('.justify-content-center').append(`
      <audio id="keyboard-sound">
        <source class="keyboard-sound" src="/sound/keyboard_sound01.wav" type="audio/wav" > 
      </audio>
    `)
  })


//鍵盤形狀

  $('.keyboard-item-sm').on('click', function(){
    $('.key').css("border-radius", "30px")
  })
  $('.keyboard-item-og').on('click', function(){
    $('.key').css("border-radius", "0px")
  })

//鍵盤顏色
  $('.color-item-pink').on('click', function(){
    $('body').removeClass();
    $('body').addClass("change-to-pink")
  })

  $('.color-item-blue').on('click', function(){
    $('body').removeClass();
    $('body').addClass("change-to-blue")
  })

  $('.color-item-green').on('click', function(){
    $('body').removeClass();
    $('body').addClass("change-to-green")
  })
})