$(function(){

  $(".tab1").on('click',function(){
    $(".t1").show();
    $(".t2").hide();
    $(".tab1").css({
      backgroundColor:'rgb(14, 73, 151)',
      color:'#fff'
    });
    $(".tab2").css({
      backgroundColor:'#fff',
      color:'#333'
    });
  });
  
  $(".tab2").on('click',function(){
    $(".t2").show();
    $(".t1").hide();
    $(".tab2").css({
      backgroundColor:'rgb(14, 73, 151)',
      color:'#fff'
    });
    $(".tab1").css({
      backgroundColor:'#fff',
      color:'#333'
    });
    
  });


  $(".click").on('click',function(){
    $(".popup").show();
  });

  $(".close").on('click',function(){
    $(".popup").hide();
  });



});