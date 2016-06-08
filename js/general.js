(function(){
	var travianBotPanel = document.createElement('div'),
		buildingsButton = document.createElement('div'),
		travianBotTaskPanel = document.createElement('div');

	travianBotPanel.id = 'travianBotPanel';
	travianBotTaskPanel.id = 'travianBotTaskPanel';
	buildingsButton.id = 'buildingsButton';

	checkAndActivate();

	function checkAndActivate(){
		if(window.storage.activePanel.isActive()){
			activatePanel();
		}else{
			deactivatePanel();
		}
	}

	function activatePanel(){
		window.storage.activePanel.activate();
		travianBotPanel.classList.add('active');
		travianBotTaskPanel.classList.add('active');
	}

	function deactivatePanel(){
		window.storage.activePanel.deactivate();
		travianBotPanel.classList.remove('active');
		travianBotTaskPanel.classList.remove('active');
	}

	buildingsButton.addEventListener('click', function(){
		if(travianBotPanel.classList.contains('active')){
			deactivatePanel();
		}else{
			activatePanel();
		}
	});

	travianBotPanel.appendChild(buildingsButton);
	document.body.appendChild(travianBotPanel);
	document.body.appendChild(travianBotTaskPanel);
})();