$(function(){
  if ( $('#welcome-index').length > 0 ){
    let typed = new Typed('#typed', {
      strings: ['^1000 faster!', '^1000 better!','^1000 more!'],
      typeSpeed:90,
      backSpeed:90,
      loop:true
    });
  }
})