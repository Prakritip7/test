document.write('<meta http-equiv="content-Type" content="text/html;charset=utf-8"/>');

//DIALOG
setTimeout("toolshow()",5000);
document.write('<style type="text/css">.swt-db { display: block; }.float_container { display: none; position: fixed; width: 100%; left: 0; bottom: 0; z-index: 9999999;  background-color:#abe5ef;background-image:linear-gradient(#abe5ef, #deceb7);background-image:-webkit-gradient(linear,left top,left bottom, color-stop(0% #abe5ef),color-stop(100%, #deceb7);)background-image:-webkit-linear-gradient(top,#abe5ef，#deceb7);background-image:-moz-linear-gradient(top,#abe5ef,#deceb7);background-image:-ms-linear-gradient(top,#abe5ef,#deceb7);background-image:-o-linear-gradient(top,#abe5ef,#deceb7);}.cf { zoom: 1; }.cf:before, .cf:after { display: block; content: ""; }.cf:after { clear: both; }.shadow { z-index: 999990; display:none; position: fixed; width: 100%;  top: 0; left: 0; background-color: rgba(0,0,0,.2); }.float_container .diatitle { width:100%; background: #13a4db; font-size: 1.2rem; line-height: 40px; text-align: center; color: #fff; margin:0 auto;}.float_container .diatitle a:first-child{  display:inline-block; color:#fff; width: 300px; height: 40px; margin: 0 auto; background: url(http://wap.akcjnk.com/style/1.png) 5px center no-repeat; text-indent:40px; background-size: 40px; text-decoration:none; }.float_container dl { display: none; margin: 0; padding: 0; }.float_container dt { display: inline-block; width: 14%; float: left; margin: 16px 0 0 8px; text-align: center; }.float_container dt img { max-width: 100%; border: 0; border-radius: 50%; vertical-align: middle; -ms-interpolation-mode: bicubic; }.float_container dd { margin: 0; display: inline-block; position: relative; width: 68%; float: left; margin-top: 15px; }.float_container .time { font-size: 12px; line-height: 1.6; color: #6c6761; text-align: center; width: 100%; margin: 0; height: 1.6em; }.float_container .box1 { width:100%; font:16px simsun,Microsoft YaHei,arial; text-align:left; color: #000; position: relative; margin-left: 5%; padding: 10px; border: 1px solid #7ebbe4; border-top-color: #b2daf0; border-radius: 12px; box-shadow: 0 3px 0 #3ea0dd, inset 0 1px 1px #fff;background-color:#c6e5fa;background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #c6e5fa), color-stop(100%, #a6d7f7));background-image: -webkit-linear-gradient(top, #c6e5fa, #a6d7f7);background-image: -moz-linear-gradient(top, #c6e5fa, #a6d7f7);background-image: -ms-linear-gradient(top, #c6e5fa, #a6d7f7);background-image: -o-linear-gradient(top, #c6e5fa, #a6d7f7);background-image: linear-gradient(top, #c6e5fa, #a6d7f7);letter-spacing: -1px; }.float_container .box1 img { width: 22px; vertical-align: bottom; }.float_container .box1:before,.float_container .box1:after { position: absolute; content: ""; }.float_container .btns { width:100%; margin-top: 25px; padding: 10px 0; border-top: 1px solid #c7c7c0; border-bottom: 1px solid #979185; background-color: #eaebed; }.float_container .btns a { display: inline-block; width: 39%; height: 2em; float: left; margin: 0 5%; border: 1px solid #a6a5a1; border-radius: 12px; background-color:#f7f7f7 ; box-shadow: 0 2px 2px #d1d1d3; font-size: 16px; color: #ed8b0b; line-height: 2; text-align: center; text-decoration: none; transition: all .3s linear 0s; }.float_container .btns a:hover { border-color: #959490; background-color: #f7f7f7; }@media screen and (max-width: 320px) {.float_container .title { font-size: 18px; background-size: 32px; }.float_container dd { width: 73%; }.float_container .box1 { font-size: 13px; }.float_container .btns a { border-radius: 10px; font-size: 15px; }}</style>');

document.write('<style type="text/css">#chengse{ background-color:#ed8b0b; border::1px #ed8b0b solid; color:#ffffff;}</style>');

var _fSwtHtm = '<div id="toopl" class="shadow"></div><div id="footTool" class="float_container cf"><div class="diatitle"><div style="width:320px; margin:0 auto"><a href="tel:9851349099">China Great Wall Health Center Online Consultation Center</a><a href="javascript:void(0);" onClick="hidguan()" target="_self" style="width:20px; text-align:center;display:inline-block;color:#fff;font-size: 26px; text-decoration:none;">X</a></div></div><a onclick="openZoosUrl(\'chatwin\',\'&e=phone\');return false;"  href="javascript:void(0);"  target="_blank" ><dl id="tools2" class="cf swt-db">' +
'<dt><img src="http://wap.akcjnk.com/style/expertcc.jpg"></dt><dd><div id="now1" class="time">11:14:20</div>' +
'<div class="box1"><img src="http://wap.akcjnk.com/style/smile.gif" alt="smile"> Hello! I am an online andrology doctor. How can I help you?</div></dd></dl><dl id="tools3" class="cf swt-db">' +
'<dt><img src="http://wap.akcjnk.com/style/expertcc.jpg"></dt><dd><div id="now2" class="time">11:14:20</div>' +
'<div class="box1">I have many years of experience in the diagnosis and treatment of andrological diseases, and I can give you professional answers based on your symptom description！</div>' +
'</dd></dl></a><div class="btns cf"><a href="tel:9851349099">Telephone consultation</a><a onclick="openZoosUrl(\'chatwin\',\'&e=phone\');return false;"  href="javascript:void(0);"  target="_blank" id="chengse">Ask the Experts</a></div></div>';

document.write(_fSwtHtm);

var footTool = document.getElementById("footTool");
var toopl = document.getElementById("toopl");
var tools2 = document.getElementById("tools2");
var tools3 = document.getElementById("tools3");
var timer = null;
var timer02 = null;
var timer03 = null;
var now = new Date();
var hh = now.getHours();
var mm = now.getMinutes();
var ss = now.getSeconds();
var ssb = ss+3;
document.getElementById("now1").innerHTML=hh+ ":" + mm + ":" + ss;
document.getElementById("now2").innerHTML=hh+ ":" + mm + ":" + ssb;

function toolshow(){
        footTool.style.display = "block";
        toopl.style.display = "block";
        timer02 = setTimeout(toolshow2, 0);
		clearTimeout(timer); 
    }

function toolshow2() { tools2.style.display = "block"; timer03 = setTimeout(toolshow3, 1000);clearTimeout(timer02); }

function toolshow3() { tools3.style.display = "block"; clearTimeout(timer03);}

function hidguan(){  
   footTool.style.display="none";
   toopl.style.display="none";
   tools2.style.display="none";
   tools3.style.display="none";
   timer = setTimeout(toolshow,15000);   
 }
 