(function(){
	var contractWrapper = window.contract,
		addBuildingButton = document.createElement('button');
	addBuildingButton.id = 'addBuildingButton';
	addBuildingButton.type = 'button';
	addBuildingButton.classList.add('green');
	addBuildingButton.innerHTML =
		'<div class="button-container">' +
			'<div class="button-background">' +
				'<div class="buttonStart">' +
					'<div class="buttonEnd">' +
						'<div class="buttonMiddle"></div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="button-content">Запланувати розвиток</div>' +
		'</div>';

	addBuildingButton.addEventListener('click', function(){
		var headerTitle = document.querySelector('.titleInHeader'),
			levelElement = headerTitle.getElementsByClassName('level')[0],
			name = headerTitle.innerText.replace(levelElement.innerText, '').trim(),
			level = parseInt(levelElement.innerText.trim().split(' ')[1]),
			id = parseInt(location.search.replace('?id=','')),
			nextLevel = level + 1;
		window.storage.tasks.add(name, id, nextLevel, nextLevel, 20);
		location.reload();
	});

	contractWrapper.appendChild(addBuildingButton);
})();