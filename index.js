(function(){
	var travianBot = document.createElement('div');
	travianBot.id = 'travianBot';
	travianBot.innerHTML = '<div id="travianBotPanel"></div>';
	document.body.appendChild(travianBot);
	var style = document.createElement('style');
	document.head.appendChild(style);
	style.type = 'text/css';
	style.innerText = '#travianBot{position:absolute;top:0;left:0;background:#0033FF;color:#fff;z-index:1000000;}';
})();