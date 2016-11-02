/**
 * Created by lenovo on 2016/11/2.
 */
$(function(){
    $("#search input").on("focus",function(){
        if(this.value==this.defaultValue){
            this.value="";
        }
    }).on("keypress",function(e){
        if(e.keyCode==13){
            alert(this.value);
        }
    }).on("blur", function () {
        if(this.value==""){
            this.value=this.defaultValue;
        }
    });

    $("#search span").on("click", function () {
        alert( $("#search input").val());
    })
});