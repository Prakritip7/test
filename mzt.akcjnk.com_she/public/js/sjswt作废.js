//获取手机号码
var bhid = 122;
document.write("<script type=\"text/javascript\" src=\"http://mo.momo1688.com:8081/tom.js\"><\/script>");

var LiveAutoInvite0='欢迎来到遵义九龙医院，免费提供男性健康咨询！';
var LiveAutoInvite1='来自首页的对话';
var LiveAutoInvite2=' 网站商务通 主要功能：<br>1、即时沟通<br>2、如果您有男性健康问题，请接受此邀请，开始与男科专家即时沟通';
var LrinviteTimeout = 3;
var LR_next_invite_seconds = 2; 
function openswt(){openZoosUrl('chatwin','&e=zxzx');return false;} 
function openleftswt(){openZoosUrl('chatwin','&e=leftswt');return false;} 
function openbottomswt(){openZoosUrl('chatwin','&e=bottomswt');return false;} 
function openqqswt(){openZoosUrl('chatwin','&e=qqswt');return false;} 
function openanniuswt(){openZoosUrl('chatwin','&e=anniuswt');return false;} 
var aObj = document.getElementsByTagName("a"); 
	for(var i=0;i<aObj.length;i++){ 
	if(aObj[i].getAttribute('href')=="javascript:openswt()"){ 
		aObj[i].href="javascript:void(swt)"; 
		aObj[i].target="_self"; 
	} 
	if(aObj[i].getAttribute('href')=="javascript:void(swt)"||aObj[i].getAttribute('href')=="javascript:void(swt);"||aObj[i].getAttribute('href')=="javascript:(swt)"){ 
	aObj[i].target="_self"; 
	} 
}

function hideswt(){
	document.getElementById("LRdiv0").style.display="none";
}
window.setInterval(hideswt,1);

lastScrollY=0;
function heartBeat(){ var diffY;if (document.documentElement && document.documentElement.scrollTop)diffY = document.documentElement.scrollTop;else if (document.body)diffY = document.body.scrollTop
else{/*Netscape stuff*/}
percent=.1*(diffY-lastScrollY); if(percent>0)percent=Math.ceil(percent); else percent=Math.floor(percent); 
document.getElementById("lovexin12").style.top=parseInt(document.getElementById("lovexin12").style.top)+percent+"px";
lastScrollY=lastScrollY+percent; }
suspendcode12="<div id=\"lovexin12\" style='width:36px;text-align:right;height:118px;overflow:hidden;position:absolute;top:160px;left:0px;z-index:100'>";
document.write(suspendcode12); 
document.writeln('<a  href="tel:085127908537" title="电话咨询" target="_blank"><img src="/public/images/sm_left.gif" /></a>');
document.write("</div>"); window.setInterval("heartBeat()",1);
function closeleft(){document.getElementById("lovexin12").style.display="none";}

document.writeln('<style type="text/css">');
document.writeln('#wrap{display:block;bottom:0px;right:1px!important;width:100%;height:50px;position:fixed;	text-align:center;color:#fff;background:#FDFA00 url(/public/images/bottom.gif) no-repeat top center;background-size:auto 100%;/* for IE6 */_top: expression(documentElement.scrollTop + documentElement.clientHeight-this.offsetHeight); /* for IE6 */}');
document.writeln('*html #wrap{position:absolute;}');
document.writeln('#wrap a.di_dh{background:#f37b38;}');
document.writeln('#wrap a{ color:#FFF;float:left;display:block;text-align:center;}');

document.writeln('#wrap a{ color:#FFF;float:left;display:block;text-align:center;height:100%;}');
document.writeln('</style>');
document.writeln("<div id=\"wrap\">");
var oeWrap =  document.getElementById("wrap");
var faWidth = (oeWrap.offsetWidth - 205) / 2;

document.writeln("<a href=\"/\" target=\"_bank\" style=\"width:" + (faWidth - 14) + "px\" rel=\"nofollow\"></a><a href=\"tel:085127908537\" style=\"width:" + 205 +"px\" target=\"_blank\" rel=\"nofollow\"></a><a href=\"javascript:void(swt)\" style=\"width:" + (faWidth + 14) + "px\" onclick=\"openbottomswt()\" target=\"_self\" rel=\"nofollow\"></a> ");
document.writeln("</div>");
document.write("<script language=\"javascript\" src=\'http:\/\/pdt.zoosnet.net\/JS\/LsJS.aspx?siteid=PDT69767939&float=1&lng=cn\'><\/script>");