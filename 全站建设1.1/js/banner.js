/**
 * Created by lenovo on 2016/11/2.
 */
//$(function(){
//    var a=0;
//    $("#right").on("click",function(){
//        a++;
//        if(a==4){
//            a=0;
//        }
//        $("#pic img").eq(a).show().siblings().hide();
//    });
//    $("#left").on("click",function(){
//        a--;
//        if(a==-1){
//            a=3;
//        }
//        $("#pic img").eq(a).show().siblings().hide();
//    });
//});


//ÎÞ·ì»¬¶¯
//$(function() {
//    var a = 0;
//    var $index = $("#pic img").index();
//    $("#right").on("click", function () {
//        $index++;
//        a = -573 * $index;
//        $("#pic").animate({
//            left: a
//        }, 1000,function(){
//            if(a==-2292){
//                $("#pic").css("left",0);
//                $index=0;
//            }
//        });
//    });
//    $("#left").on("click", function () {
//        $index--;
//        a = -573 * $index;
//        $("#pic").animate({
//            left: a
//        }, 1000,function(){
//            if(a==0){
//                $("#pic").css("left",-2292);
//                $index=4;
//            }
//        });
//    });
//});

$(function() {
    var $pic=$("#pic");
    var a = 0;
    var $index = $("#pic img").index();
    $("#pic img").eq(0).clone().appendTo("#pic");
    $("#right").on("click", function () {
        if(!$pic.is(":animated")){
            $index++;
            a = -573 * $index;
            $("#pic").animate({
                left: a
            }, 1000,function(){
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
            $index--;
            if($index==-1){
                $index=3;
            }
            a = -573 * $index;
            $pic.animate({
                left: a
            }, 1000,function(){
                if(a==0){
                    $pic.css("left",-2292);
                    $index=4;
                }
            });
        }
    });
});

