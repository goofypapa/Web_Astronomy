/*控制页面的高度*/
document.documentElement.style.fontSize = innerWidth/16+'px';
onresize = function(){
    document.documentElement.style.fontSize = innerWidth/16+'px';
};
var docuHeight = document.documentElement.clientHeight;
var docuWidth = document.documentElement.clientWidth;
$('#dv').css({
    height:docuHeight,
    width:docuWidth,
});

function back() {
    //ios ws
    if(typeof( goofypapaGame ) != "undefined" && goofypapaGame ){
        window.location.href='goofypapa://back';
        return;
    }
    //android ws
    if( typeof(goofyPapa) !== "undefined" ){
        goofyPapa.back();
        return;
    }
    if(history.length) {
        history.go(-1);
        return;
    }
}