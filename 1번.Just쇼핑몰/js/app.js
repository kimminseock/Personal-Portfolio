
$(document).ready(function() {
    menu();
    slide();
    tab2();
    popup();
})

function menu(){
    $(".gnb>li").on({
        "mouseenter":function(){
            $(".lnb").stop().slideDown();
        },
        "mouseleave":function(){
            $(".lnb").stop().slideUp();
        }
    })
}
var curTop=0
function slideMove(){
    //위로 움직이는 함수
    //3초후에 시작!
    //위로 한칸
    //위로 한칸
    //3초뒤 원래대로 돌아오고
    curTop -= 300
    //0 -> -300 -> -600 -> 0
    if(curTop < -600){
        curTop = 0
    }
    $("#slide_contents").animate({"top":curTop})
    
        
}
function slide(){//setInterval + animate
    setInterval(slideMove,3000)
}

function tab(){
//click -> hide, show
// $(".active").on('click',function(){
//     $(".notice_list").show(),
//     $(".display_off").hide();
// })
// $(".gallery").on('click',function(){
//         $(".notice_list").hide(),
//         $(".display_off").show();
// })
    $(".tab_btn>a").eq(0).on('click',function(){
        $(".tab_contents>div").eq(1).hide(),
        $(".tab_contents>div").eq(0).show()
    })
    $(".tab_btn>a").eq(1).on('click',function(){
        $(".tab_contents>div").eq(0).hide(),
        $(".tab_contents>div").eq(1).show()
    })
}
function tab2(){
    $(".tab_btn>a").on('click',function(){
        var idx = $(this).index()
        //alert(idx)//0,1
        //$(this) - 이벤트 일어난곳
        //index() - index번호
        $(".tab_contents>div").hide()
        $(".tab_contents>div").eq(idx).show()
    })
}

function popup(){
    $(".pop").on('click',function(){
        $("#popup").show();
    })
    $("#closeBtn").on('click',function(){
        $("#popup").hide();
    })
}