define(['jquery'],function($){
    function Dialog(ooo){
        this.defaultS = {
            w:400,
            h:400,
            t:"啦啦啦",
            c:''
        };
        $.extend(this.defaultS,ooo);
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
    }

    Dialog.prototype.open = function(){
        this.$container.append(this.$mask).append(this.$box).css({
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        });
        this.$mask.css({
            width: '100%',
            height: '100%',
            position: 'relative'
        });
        this.$box.css({
            width: this.defaultS.w,
            height: this.defaultS.h,
            marginLeft: -this.defaultS.w/2,
            marginTop: -this.defaultS.h / 2,
            position: 'absolute',
            top: '50%',
            left: '50%'
        }).append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close)
            .css({
            width: '100%',
            height: 30,
            background: '#000000',
            lineHeight: '30px',
            color: '#fff'
            });
        this.$item.html(this.defaultS.t).css({
            float: 'left'
        });
        this.$close.css({
            float:'right',
            cursor:'pointer'
        });
        this.$content.html(this.defaultS.c).css({
            width:"100%",
            height:270,
            background:"#eeeeee"

        });
        if(this.defaultS.c){
            this.$content.load(this.defaultS.c);                        //加载html文件
        }
        $("body").append(this.$container);
        var that = this;
        this.$close.on("click", function(){
            that.close();
        });
    };
    Dialog.prototype.close = function(){
        $(this.$container).remove();
    };
    return Dialog;
});