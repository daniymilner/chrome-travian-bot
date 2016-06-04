(function(){
	var travianBotPanel = document.getElementById('travianBotPanel'),
		buildings = document.createElement('div'),
		buildingsLength = 18,
		buildingsHtml;
	buildings.id = 'travianBotBuildings';
	buildingsHtml = '<ul>';
	for(var i = 1; i <= buildingsLength; i++){
		buildingsHtml += '<li id="build_' + i + '"><p></p></li>'
	}
	buildingsHtml += '</ul>';
	buildings.innerHTML = buildingsHtml;
	travianBotPanel.appendChild(buildings);
})();