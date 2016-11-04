/**
 * Created by lenovo on 2016/11/3.
 */
$(function(){
    $("#color-div span").on("click",function(){
        $(this).addClass("s"+($(this).index()+1)).siblings().removeClass();
        $("#ul").removeClass().addClass("mc"+$(this).index());
        $("#h1").removeClass().addClass("mc"+$(this).index());
    });
    $("#search").on("focus",function(){
        if(this.value==this.defaultValue){
            this.value="";
        }
    });
    $("#search").on("blur",function(){
        if(this.value==""){
            this.value=this.defaultValue;
        }
    });
    $("#search").on("keypress",function(){
        if(event.keyCode==13){
            alert(this.value);
        }
    });
    $("#ul li").on("mouseover", function () {
        $(this).children(".menu-child").show().end().siblings().children(".menu-child").hide();
    }).on("mouseout",function(){
        $("#ul li").children(".menu-child").hide();
    });
    var a= 5;
    var $index=0;
    $("#long-ul li").on("mouseenter",function(e){
        changeImg($(this).index());
       // return false;
    });
    var timer = setInterval(function(){
        $index++;
        if($index==5) $index=0;
        changeImg($index);
       // console.log($index);
    },1000);

    $("#works-pic").on("mouseover",function(){
        console.log(timer+"rrr");

        clearInterval(timer);
    });
    $("#works-pic").on("mouseout",function(){

        timer = setInterval(function(){
            $index++;
            if($index==5) $index=0;
            changeImg($index);
        },1000);
    });
    $("#pic2-ul1 ul li").on("mouseover",function(){
        var $index=$(this).index();
            $("#gogogo ul").animate({
                left:-$index*790
            })
    })
    function changeImg(idx){
        $("#long-ul li").eq(idx).addClass("blue").siblings().removeClass("blue");
        a++;
        $("#long-pic img").eq(idx).css("z-index",a).css("opacity",0).stop().animate({
            opacity:1
        },600);
        //e.stopPropagation();
    }
});