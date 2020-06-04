$(function(){
  if ( $('#coding-show').length > 0 || $('#typing-show').length > 0 || $('#customizations-show').length > 0 ){
    $('.dropbtn').on('click', function(){
      $('#label-textarea').click();
    })
    $('.dropdown-typeT').on('click', function(){
      $('#label-textarea').click();
    })
    $('.dropdown-sound').on('click', function(){
      $('#label-textarea').click();
    })
    $('.dropdown-keyboard').on('click', function(){
      $('#label-textarea').click();
    })
    $('.dropdown-color').on('click', function(){
      $('#label-textarea').click();
    })
    //字體大小
      $('.typeT-item-sm').on('click', function(e){
        $('.quote-display span').css("font-size", "2rem");
        $('#label-textarea').click();
      })
      $('.typeT-item-md').on('click', function(e){
        $('.quote-display span').css("font-size", "3rem");
        $('#label-textarea').click();
      })
      $('.typeT-item-lg').on('click', function(e){
        $('.quote-display span').css("font-size", "3.5rem");
        $('#label-textarea').click();
      })
    
    //聲音
      $('.sound-item-1').on('click', function(){
        $('#keyboard-sound').remove();
        $('.justify-content-center').append(`
          <audio id="keyboard-sound">
            <source class="keyboard-sound" src="/sound/keyboard_sound04.wav" type="audio/wav" > 
          </audio>
        `)
        $('#label-textarea').click();
      })
      $('.sound-item-2').on('click', function(){
        $('#keyboard-sound').remove();
        $('.justify-content-center').append(`
          <audio id="keyboard-sound">
            <source class="keyboard-sound" src="/sound/keyboard_sound02.wav" type="audio/wav" > 
          </audio>
        `)
        $('#label-textarea').click();
      })
      $('.sound-item-3').on('click', function(){
        $('#keyboard-sound').remove();
        $('.justify-content-center').append(`
          <audio id="keyboard-sound">
            <source class="keyboard-sound" src="/sound/keyboard_sound01.wav" type="audio/wav" > 
          </audio>
        `)
        $('#label-textarea').click();
      })
    
    
    //鍵盤形狀
    
      $('.keyboard-item-sm').on('click', function(){
        $('.key').css("border-radius", "30px")
        $('#label-textarea').click();
      })
      $('.keyboard-item-og').on('click', function(){
        $('.key').css("border-radius", "0px")
        $('#label-textarea').click();
      })
    
    //鍵盤顏色
      $('.color-item-pink').on('click', function(){
        $('body').removeClass();
        $('body').addClass("change-to-pink")
        $('#label-textarea').click();
      })
    
      $('.color-item-blue').on('click', function(){
        $('body').removeClass();
        $('body').addClass("change-to-blue")
        $('#label-textarea').click();
      })
    
      $('.color-item-green').on('click', function(){
        $('body').removeClass();
        $('body').addClass("change-to-green")
        $('#label-textarea').click();
      })
      $('.color-item-dark').on('click', function(){
        $('body').removeClass();
        $('body').addClass("change-to-dark")
        $('#label-textarea').click();
      })
  }

})