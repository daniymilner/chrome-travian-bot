(function(){
	var travianBotPanel = document.createElement('div'),
		buildingsButton = document.createElement('div'),
		travianBotTaskPanel = document.createElement('div'),
		background = document.getElementById('background');

	travianBotPanel.id = 'travianBotPanel';
	travianBotTaskPanel.id = 'travianBotTaskPanel';
	buildingsButton.id = 'buildingsButton';
	buildingsButton.addEventListener('click', function(){
		travianBotPanel.classList.toggle('active');
		travianBotTaskPanel.classList.toggle('active');
	});

	travianBotPanel.appendChild(buildingsButton);
	document.body.appendChild(travianBotPanel);
	document.body.appendChild(travianBotTaskPanel);

	background.addEventListener('click', function(){
		travianBotPanel.classList.remove('active');
		travianBotTaskPanel.classList.remove('active');
	});
})();