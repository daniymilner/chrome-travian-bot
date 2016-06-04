(function(){
	var travianBot = document.createElement('div'),
		style = document.createElement('style'),
		travianBotPanel = document.createElement('div'),
		buildingsButton = document.createElement('div');

	travianBot.id = 'travianBot';
	travianBotPanel.id = 'travianBotPanel';

	buildingsButton.id = 'buildingsButton';
	buildingsButton.addEventListener('click', function(){
		travianBotPanel.classList.toggle('active');
	});

	style.id = 'travianBotStyles';
	style.type = 'text/css';
	style.innerText =
		'#travianBot{' +
			'position:absolute;' +
			'top:0;' +
			'left:0;' +
		'}' +
		'#travianBotPanel{' +
			'position:absolute;' +
			'top:0;' +
			'left:0;' +
			'background:#0033FF;' +
			'color:#fff;' +
			'z-index:1000000;' +
			'width:260px;' +
			'transform: translate3d(-260px,0,0);' +
			'transition: 0.5s ease-in-out;' +
		'}' +
		'#travianBotPanel.active{' +
			'transform: translate3d(0,0,0);' +
		'}' +
		'#buildingsButton{' +
			'position: absolute;' +
			'top:0;' +
			'right:-25px;' +
			'width:25px;' +
			'height:100px;' +
			'background: red;' +
		'}';

	travianBotPanel.appendChild(buildingsButton);
	travianBot.appendChild(travianBotPanel);
	document.head.appendChild(style);
	document.body.appendChild(travianBot);
})();