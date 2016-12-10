requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(["jquery","a"],function($,Dialog){
    $("#open").on("click",function(){
        var ooo = {
            w:500,
            h:400,
            t:"啦啦啦德玛西亚",
            c:'login.html'
        };
        var dialog = new Dialog(ooo);
        dialog.open();
    })
});