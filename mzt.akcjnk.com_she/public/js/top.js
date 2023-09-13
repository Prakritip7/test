
/**QQ提醒-ST*/
(function(){                
    var sHTML = [
        '<style type="text/css">',
        '.topTips {height:0px;overflow:hidden; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; position: fixed; left:0; top: 0px; width: 100%; z-index: 100;-webkit-perspective: 600px; perspective: 600px; z-index:9999999;}',
        '.tipsInner {font-family: "Microsoft YaHei"; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-radius: 5px; -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);/* background: #fff;-webkit-transform-origin: 0px 0px; transform-origin: 0px 0px; -webkit-transform: rotateX(90deg); transform: rotateX(90deg);*/ opacity: 1; }',
        '.tipsInner a { height:60px;text-decoration:none;display: block; position: relative; padding-left: 50px; color: #FFFFFF; filter:alpha(opacity=80); -moz-opacity:0.8; -khtml-opacity: 0.8; opacity: 0.8;background-color:black;}',
        '.tipsInner img { position: absolute; left: 8px; top: 50%; margin-top: -18px; width: 38px; height: auto; margin-right: 5px; border-radius: .3125em;opacity: 1}',
        '.tipsInner dl {height: 40px; margin:0; padding:10px 5px; border-left: 1px solid #ccc; font-size:12px;}',
        '.tipsInner dt { font-weight: bold;line-height:2.1em; }',
        '.tipsInner dd { margin:0; line-height: 1.2em;white-space:nowrap;text-overflow:ellipsis;overflow:hidden; }',
        '.showTip { height:60px; }',
        '.showTip .tipsInner { opacity: 1; }',
        '.hideTip { height:0px; }',
        '.hideTip .tipsInner { opacity: 0; }',
		'</style>',
        '<div class="topTips" id="toptips">',
        '   <div class="tipsInner">',
        '       <a onclick="openZoosUrl(\'chatwin\',\'&e=topQQ\');return false;" href="javascript:void(0)" >', 
        '         <img src="/public/qq.png">',
        '         <dl>',
        '           <dt>QQ消息(2)_王中琨主任：</dt>',
        '           <dd>您好！我是在线咨询医生，有什么能帮您的?</dd>',
        '         </dl>',
        '       </a>',
        '   </div>',
        '</div>'].join('\r\n');
    var o = document.createElement('div');
    o.innerHTML = sHTML;	
    while(o.firstElementChild){
        document.body.appendChild(o.firstElementChild);
		
    }; 
	
         T={hasClass:function(d,a){var c=d.className.split(/\s+/);for(var b=0;b<c.length;b++){if(c[b]==a){return true}}return false},addClass:function(b,a){if(!this.hasClass(b,a)){b.className+=" "+a}},removeClass:function(d,a){if(this.hasClass(d,a)){var c=d.className.split(/\s+/);for(var b=0;b<c.length;b++){if(c[b]==a){delete c[b]}}d.className=c.join(" ")}}};

        function Toptips(options){
            this.init(options);
        };

        Toptips.prototype = {

            constructor : Toptips,

            init : function(options){
                this.item = options.item;
                this.itemInner = options.item.children[0];
                this.loop = typeof options.loop == "undefined" ? true : options.loop;
                this.showTime = typeof options.showTime == "undefined" ? 5000 : options.showTime;
                this.hideTime = typeof options.hideTime == "undefined" ? 8000 : options.hideTime;
                this.showTimer = null;
                this.hideTimer = null;
                this.preTimer = null;
                this.item.style.WebkitTransition = this.item.style.transition = this.itemInner.style.WebkitTransition = this.itemInner.style.transition = "0.5s";
                var me = this;
                var initTimer = setTimeout(function(){
                        me.showTip();
                },9000);
            },

            showTip : function(){
                var me = this;
                T.addClass(me.item,"showTip");
                T.removeClass(me.item,"hideTip");

                clearTimeout(me.hideTimer);
                me.showTimer = setTimeout(function(){
                    me.hideTip();
                },me.showTime);

            },

            hideTip : function(){
                var me = this;
                T.removeClass(me.item,"showTip");
                T.addClass(me.item,"hideTip");
                me.item.style.height = me.itemInner.style.height = "0";

                if(me.loop){
                    clearTimeout(me.showTimer);

                    me.preTimer = setTimeout(function(){
                        me.item.style.height = me.itemInner.style.height = "60px";
                    },me.hideTime-100);

                    me.hideTimer = setTimeout(function(){
                        me.showTip();
                    },me.hideTime);

                }
            },

        };

        var toptip = document.getElementById("toptips");

        new Toptips({
            item : toptip,
            loop : true
        }); 
        return false;
   delete o;
})();