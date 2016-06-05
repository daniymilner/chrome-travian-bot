(function(){
	var travianBot = document.createElement('div'),
		style = document.createElement('style'),
		travianBotPanel = document.createElement('div'),
		buildingsButton = document.createElement('div'),
		travianLog = document.createElement('div');

	travianBot.id = 'travianBot';
	travianBotPanel.id = 'travianBotPanel';
	travianLog.id = 'travianLog';
	buildingsButton.id = 'buildingsButton';
	buildingsButton.addEventListener('click', function(){
		travianBotPanel.classList.toggle('active');
		travianLog.classList.toggle('active');
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
			'background:#fff;' +
			'color:#000;' +
			'z-index:1000000;' +
			'width:280px;' +
			'transform: translate3d(-290px,0,0);' +
			'transition: 0.5s ease-in-out;' +
			'border: 5px solid #866443;' +
		'}' +
		'#travianBotPanel.active{' +
			'transform: translate3d(0,0,0);' +
		'}' +
		'#buildingsButton{' +
			'position: absolute;' +
			'top:-5px;' +
			'right:-30px;' +
			'width:25px;' +
			'height:100px;' +
			'background: #A62D00;' +
			'cursor:pointer;' +
		'}' +
		'#hrefLink {' +
			'color:#FFA200;' +
			'position:absolute;' +
			'right:5px;' +
			'border: 1px solid;' +
			'padding: 3px;' +
			'margin-top: -20px;' +
			'display: block;' +
		'}' +
		'#travianLog {' +
			'position:absolute;' +
			'top:0;' +
			'right:0;' +
			'width:280px;' +
			'height:500px;' +
			'background:#00733F;' +
			'color:#fff;' +
			'z-index:0;' +
			'opacity:0;' +
			'transition: 0.5s ease-in-out;' +
		'}' +
		'#travianLog.active{' +
			'opacity:1;' +
			'z-index:1000000;' +
		'}' +
		'#travianBotBuildings ul li{' +
			'background:#F6F2E6;' +
		'}' +
		'#travianBotBuildings ul li:nth-child(even){' +
			'background:#EFECDB;' +
		'}' +
		'#travianBotBuildings ul{' +
			'display: flex;' +
			'flex-direction: column;' +
			'padding: 0;' +
			'margin: 00;' +
		'}' +
		'}';

	travianBotPanel.appendChild(buildingsButton);
	travianBot.appendChild(travianBotPanel);
	document.head.appendChild(style);
	document.body.appendChild(travianBot);
	document.body.appendChild(travianLog);
})();