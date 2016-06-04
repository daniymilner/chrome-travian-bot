(function(){
	var travianBot = document.createElement('div'),
		style = document.createElement('style');
	travianBot.id = 'travianBot';
	travianBot.innerHTML = '<div id="travianBotPanel"></div>';

	style.id = 'travianBotStyles';
	style.type = 'text/css';
	style.innerText = '' +
		'#travianBot{' +
			'position:absolute;' +
			'top:0;' +
			'left:0;' +
			'background:#0033FF;' +
			'color:#fff;' +
			'z-index:1000000;' +
		'}';

	document.head.appendChild(style);
	document.body.appendChild(travianBot);
})();