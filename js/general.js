(function(){
	var buildingsButton = document.createElement('div'),
		travianBotTaskPanel = document.createElement('div');

	travianBotTaskPanel.id = 'travianBotTaskPanel';
	buildingsButton.id = 'buildingsButton';

	checkAndActivate();

	function checkAndActivate(){
		if(window.storage.activePanel.taskPanel.isActive()){
			activatePanel();
		}else{
			deactivatePanel();
		}
	}

	function activatePanel(){
		window.storage.activePanel.taskPanel.activate();
		travianBotTaskPanel.classList.add('active');
	}

	function deactivatePanel(){
		window.storage.activePanel.taskPanel.deactivate();
		travianBotTaskPanel.classList.remove('active');
	}

	buildingsButton.addEventListener('click', function(){
		if(travianBotTaskPanel.classList.contains('active')){
			deactivatePanel();
		}else{
			activatePanel();
		}
	});

	travianBotTaskPanel.appendChild(buildingsButton);
	document.body.appendChild(travianBotTaskPanel);
})();