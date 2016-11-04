/**
 * Created by lenovo on 2016/11/2.
 */
$(function() {
    var $pic=$("#pic");
    var a = 0;
    var $index = $("#pic img").index();
    $("#pic img").eq(0).clone().appendTo("#pic");
    $("#right").on("click", function () {
        if(!$pic.is(":animated")){
            if($index==4){
                $pic.css("left",0);
                $index=0;
            }
            console.log(parseInt($pic.css("left")));
            $index++;
            a = -573 * $index;
            $("#pic").animate({
                left: a
            }, 800,function(){
                if(a==-2292){
                    $pic.css("left",0);
                    $index=0;
                }
            });
        }
    });
    $("#left").on("click", function () {
        if(!$pic.is(":animated")){
            if($index==0){
                $pic.css("left",-2292);
            }
            console.log(parseInt($pic.css("left")));
            $index--;
            if($index==-1){
                $index=3;
            }
            a = -573 * $index;
            $pic.animate({
                left: a
            }, 800,function(){
                if(a==0){
                    $pic.css("left",-2292);
                    $index=4;
                }
            });
        }
    });
    var timer = setInterval(function () {
        $("#right").trigger("click");
    },1000);
    $("#banner-work").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function () {
            $("#right").trigger("click");
        },1000);
    })
});

