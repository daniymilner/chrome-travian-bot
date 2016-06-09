(function(){
	var travianBotPanel = document.getElementById('travianBotPanel'),
		buildings = document.createElement('div'),
		buildingsHtml,
		woodList = [1, 3, 14, 17],
		clayList = [5, 6, 16, 18],
		ironList = [4, 7, 10, 11],
		cropList = [2, 8, 9, 12, 13, 15],
		typesList = [woodList, clayList, ironList, cropList];
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
})();