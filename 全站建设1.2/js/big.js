/**
 * Created by lenovo on 2016/11/5.
 */
$(function(){
    var a=3;
    var $index=0;
    var b=0;
    var f=0;
    $("#s-color span").on("click",function(){
        a++;
        $index=$(this).index();
        $(this).addClass("s").siblings().removeClass("s");
        $("#com-small-pic div").eq($index).css("z-index",a);
        $("#tab-pic div").eq($index).show().siblings().hide();
        $("#color").text($(this).text());
        b=0;

    });
    $("#tab-pic div span").on("click", function () {
        b=$(this).index();
        $("#com-small-pic div").eq($index).children().eq(b).show().siblings().hide();

    });
    $("#com-small-pic").on("mousemove",function(e){
        e = e||window.event;
        var y= e.pageY-162;
        var x= e.pageX-parseInt($("#works").css("margin-left"))-250;
        if(y<0){
            y=0;
        }
        else if(y>= $("#com-small-pic").height()-$("#drag").height()){
            y=$("#com-small-pic").height()-$("#drag").height();
        }
        if(x<0)x=0;
        else if(x>=$("#com-small-pic").height()-$("#drag").height()){
            x=$("#com-small-pic").height()-$("#drag").height();
        }
        $("#drag").show().css("top", y).css("left", x);
        var bigx=-x/($("#com-small-pic").height()-$("#drag").height())*($("#big-pic div").eq($index).children().eq(b).width()-$("#big-pic").width());
        var bigy=-y/($("#com-small-pic").height()-$("#drag").height())*($("#big-pic div").eq($index).children().eq(b).width()-$("#big-pic").width());
        $("#big-pic").show();
        $("#big-pic div").eq($index).show().siblings().hide().end().children().eq(b).show().css({
            "left":bigx,
            "top":bigy
        }).siblings().hide();

        return false;
    });
    $("#com-small-pic").on("mouseleave", function () {
        $("#drag").hide();
        $("#big-pic").hide();
    });

    $("select").on("change",function(){
        $("#money").text($("select").val()*200);
    });

    $("#tab-size li").on("click",function(){
        $(this).children().addClass("s").end().siblings().children().removeClass("s");
        $("#size").text($(this).children().text());
    });

    $("#fen li").hover(function () {
        f=$(this).index();
        $("#fen li:lt("+(f+1)+")").css("background-position-y",-96);
        $("#fen li:gt("+f+")").css("background-position-y",0);
    },function(){
        $("#fen li").css("background-position-y","");
    });
    $("#fen li").on("click", function () {
        $("#fen li").off("mouseleave");
        alert('您的评分是'+(f+1)+'分');
        $("#fen li:lt("+(f+1)+")").css("background-position-y",-16);
        var p=f+1;
        $("#fen li").on("mouseleave",function(){
            $("#fen li:lt("+p+")").css("background-position-y",-16);
            $("#fen li:gt("+(p-1)+")").css("background-position-y",0);
        })
    });

    $("#xxk ul li").on("click",function(){
        $(this).addClass("sss").siblings().removeClass("sss");
        $("#xxk div").eq($(this).index()).show().siblings("div").hide();
    })
});