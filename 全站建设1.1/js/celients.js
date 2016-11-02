/**
 * Created by lenovo on 2016/11/2.
 */
$(function(){
    var a=0;
   $("#cltright").on("click", function () {
       if(! $("#cltpic").is(":animated")){
           a-=238.5;
           $("#cltpic").animate({
               left: a
           },1000,function(){
               if(a==-954){
                   $("#cltpic").css("left",0);
                   a=0;
               }
           });
       }
   });
    $("#cltleft").on("click", function () {
        if(!$("#cltpic").is(":animated")){
            if(parseInt( $("#cltpic").css("left"))==0){
                $("#cltpic").css("left",-954);
                a=-954;
            }
            a+=238.5;
            $("#cltpic").animate({
                left: a
            },1000,function(){
                if(a==0){
                    $("#cltpic").css("left",-954);
                    a=-954;
                }
            });
        }
    });
});