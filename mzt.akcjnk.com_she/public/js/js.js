var sTel = "http://dlt.zoosnet.net/JS/LsJS.aspx?siteid=dlt36664918&float=1?url=" + escape(window.location.href) + "?s=telphone";

var sURL = "http://dlt.zoosnet.net/JS/LsJS.aspx?siteid=dlt36664918&float=1?url=" + escape(window.location.href) + "?s=float";






var sReferrer = document.referrer;

if (sReferrer=="") {

	sTel = sTel + "&referrer=" + escape(window.location.href);

	sURL = sURL + "&referrer=" + escape(window.location.href);

}

else {

	sTel = sTel + "&referrer=" + escape(sReferrer);

	sURL = sURL + "&referrer=" + escape(sReferrer);

}



var userAgentInfo = navigator.userAgent.toLowerCase();

var Agents = new Array("android", "iphone", "symbianos", "windows phone", "ipod");

for (var i=0;i<Agents.length;i++) {

	if (userAgentInfo.indexOf(Agents[i])>=0) {

		sTel = "tel:0916-2182020";

		break;

	}

}



document.writeln("<div id=\"Float\" style=\"width:480px;clear:both; *width:480px; position:fixed !important;position:absolute;z-index:9999;bottom:0px !important;_top:expression(eval(document.compatMode && document.compatMode=='CSS1Compat')?documentElement.scrollTop+(document.documentElement.clientHeight-this.offsetHeight):document.body.scrollTop+(document.body.clientHeight-this.clientHeight));\">");

document.writeln("<div class=\"footer\">");

document.writeln("	<input type=\"hidden\" id=\"TemMenu\" name=\"TemMenu\" \/>");

document.writeln("	<dl>");

document.writeln("		<dt id=\"dt0\"><a href=\"\/\">��ҳ<\/a><\/dt>");

document.writeln("	<\/dl>");

document.writeln("	<dl>");

document.writeln("		<dt id=\"dt1\" ><span>ҽԺ�ſ�<\/span><\/dt>");


document.writeln("	<\/dl>");

document.writeln("	<dl>");

document.writeln("		<dt id=\"dt2\" onclick=\"Menu(2, 2)\"><span>���ҵ���<\/span><\/dt>");

document.writeln("		<dd id=\"dd2\">");

document.writeln("			<ul>");

document.writeln("				<li><span class=\"side\"><span class=\"s1\"><\/span><span class=\"s2\"><\/span><span class=\"s3\"><\/span><span class=\"s4\"><\/span><\/span><\/li>");

document.writeln("				<li class=\"li\"><a href=\"\http://m.xian86.com/bp/\/\">��Ƥ����<\/a><\/li>");

document.writeln("				<li class=\"li\"><a href=\"\http://m.63688011.com/nkyz\/\">�п���֢<\/a><\/li>");

document.writeln("				<li class=\"li\"><a href=\"\http://m.63688011.com/qlx\/\">ǰ������<\/a><\/li>");

document.writeln("				<li class=\"li\"><a href=\"\http://m.63688011.com/yw\/\">����<\/a><\/li>");

document.writeln("				<li class=\"li\"><a href=\"\http://m.63688011.com/zxsj\/\">��й<\/a><\/li>");

document.writeln("				<li><span class=\"side\"><span class=\"s4\"><\/span><span class=\"s3\"><\/span><span class=\"s2\"><\/span><span class=\"s1\"><\/span><\/span><\/li>");

document.writeln("			<\/ul>");

document.writeln("		<\/dd>");

document.writeln("	<\/dl>");

document.writeln("	<dl>");

/*document.writeln("		<dt id=\"dt3\"><a href=\"javascript:void(0);\" onclick=\"window.open('" + sURL + "');\">������ѯ<\/a><\/dt>");*/
document.writeln("		<dt id=\"dt3\"><a href=\"javascript:void(0);\" onclick=\"openZoosUrl('chatwin','&e=phone');return false;\">����ԤԼ<\/a><\/dt>");

document.writeln("	<\/dl>");

document.writeln("	<dl>");

document.writeln("		<dt id=\"dt4\"><a <a onclick=\"openZoosUrl(\'chatwin\',\'&e=phone\');return false;\" href=\"javascript:void(0);\" target=\"_blank\"> �����ѯ</a></dt>");

document.writeln("	<\/dl>");

document.writeln("<\/div>");

document.writeln("<\/div>");





