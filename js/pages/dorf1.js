(function(){
	var travianBotPanel = document.createElement('div'),
		buildingsButton = document.createElement('div'),
		buildings = document.createElement('div'),
		buildingsHtml,
		woodList = [1, 3, 14, 17],
		clayList = [5, 6, 16, 18],
		ironList = [4, 7, 10, 11],
		cropList = [2, 8, 9, 12, 13, 15],
		typesList = [woodList, clayList, ironList, cropList];

	travianBotPanel.id = 'travianBotPanel';
	buildingsButton.id = 'buildingsButton';

	buildings.id = 'travianBotBuildings';
	buildingsHtml = '<ul>';
	typesList.forEach(function(type){
		type.forEach(function(i){
			buildingsHtml += '<li id="build_' + i + '"><p></p></li>'
		});
	});
	buildingsHtml += '</ul>';
	buildings.innerHTML = buildingsHtml;
	travianBotPanel.appendChild(buildings);

	checkAndActivate();

	function checkAndActivate(){
		if(window.storage.activePanel.panel.isActive()){
			activatePanel();
		}else{
			deactivatePanel();
		}
	}

	function activatePanel(){
		window.storage.activePanel.panel.activate();
		travianBotPanel.classList.add('active');
	}

	function deactivatePanel(){
		window.storage.activePanel.panel.deactivate();
		travianBotPanel.classList.remove('active');
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
})();