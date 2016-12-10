requirejs.config({
    paths: {
        jquery: '../../jquery-1.12.4'
    }
});
require(["jquery","pic"],function($,Vpic){
    var p = ["1.jpg","2.jpg","3.jpg","4.jpg"];
    var op = {
        w:680,
        h:344,
        num:8,
        pic:p,
        path:".main"
    };
    var lp = new Vpic(op);
    lp.cc();


});