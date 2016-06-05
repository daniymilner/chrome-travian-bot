(function(){
	var buildsStart = 1,
		buildsEnd = 18,
		element, mapElement, elementInnerP,
		hrefLink;
	for(var i = buildsStart; i <= buildsEnd; i++){
		element = document.getElementById('build_' + i);
		elementInnerP = document.querySelector('#build_' + i + ' p');
		mapElement = document.querySelector('area[href="build.php?id=' + i + '"]');
		elementInnerP.innerHTML = mapElement.alt;

		hrefLink = document.createElement('a');
		hrefLink.href = mapElement.href;
		hrefLink.alt = mapElement.alt;
		hrefLink.innerText = 'Покращити';

		hrefLink.id = 'hrefLink';
		elementInnerP.appendChild(hrefLink);
	}
})();