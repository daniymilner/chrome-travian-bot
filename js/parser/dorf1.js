(function(){
	var buildsStart = 1,
		buildsEnd = 18,
		mapElement, elementInnerP,
		hrefLink, buildObject;

	function getBuildObject(str){
		var splited = str.split(' '),
			level = parseInt(splited[splited.length - 1]), name;
		splited.splice(splited.length - 1, 1);
		splited.splice(splited.length - 1, 1);
		name = splited.join(' ');
		return {
			name: name,
			level: level
		}
	}
	for(var i = buildsStart; i <= buildsEnd; i++){
		elementInnerP = document.querySelector('#build_' + i + ' p');
		mapElement = document.querySelector('area[href="build.php?id=' + i + '"]');
		elementInnerP.innerHTML = mapElement.alt;

		buildObject = getBuildObject(mapElement.alt);

		hrefLink = document.createElement('a');
		hrefLink.innerHTML = '<img src="chrome-extension://' + chrome.runtime.id + '/img/up-arrow.png" width="17px" height="17px">';
		hrefLink.id = 'hrefLink';
		(function(i, buildObject){
			hrefLink.addEventListener('click', function(){
				var nextLevel = buildObject.level + 1;
				window.storage.tasks.add(buildObject.name, i, nextLevel, nextLevel, 10);
				location.reload();
			});
		})(i, buildObject);

		elementInnerP.appendChild(hrefLink);
	}
})();