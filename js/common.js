/*控制页面的高度*/
document.documentElement.style.fontSize = innerWidth/16+'px';
onresize = function(){
    document.documentElement.style.fontSize = innerWidth/16+'px';
};
var docuHeight = document.documentElement.clientHeight;
var docuWidth = document.documentElement.clientWidth;
$('#dv').css({
    height:window.screen.availHeight+'px',
    width:window.screen.availWidth+'px',
});
