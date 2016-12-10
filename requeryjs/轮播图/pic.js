define(["jquery"],function($){
    function Vpic(op){
        this.vop = {
            num:0,
            w:500,
            h:400,
            t:1000,
            pic:"",
            path:"body"
        };
        $.extend(this.vop,op);
        this.$box = $("<div class='box'></div>");
        this.$content = $("<div class='content'></div>");
        this.$btn = $("<div class='btn'><span class='prev'>&lt;</span><span class='next'>&gt;</span></div>");
    }
    Vpic.prototype.cc = function(){
        for(var i=0;i<this.vop.pic.length;i++){
            this.$content.append($('<img src='+this.vop.pic[i]+' />'))
        }
        this.$box.append(this.$content).append(this.$btn);
        $(this.vop.path).append(this.$box);
        this.$box.css({
            position:"absolute",
            overflow:"hidden",
            width:this.vop.w,
            height:this.vop.h
        }).children(".content").css({
            position:"absolute",
            top:0,
            left:0
        })
            .children().css({
            float:"left"
        });
        this.$btn.css({
            position:"absolute",
            bottom:10,
            left:10
        });
        $("span",this.$btn).css({
            marginRight:5,
            lineHeight:"20px",
            textAlign:"center",
            color:"#fff",
            background:'black',
            width:20,
            height:20,
            float:'left'
        });
        var that = this;

    };
    return Vpic;
});