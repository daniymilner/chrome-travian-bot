(function(){
	var travianBotTaskPanel = document.getElementById('travianBotTaskPanel'),
		storageTaskList = window.storage.tasks.list(),
		wrapper = document.createElement('ul'),
		line, p, img, select, option;
	for(var i = 0; i < storageTaskList.length; i++){
		line = document.createElement('li');
		p = document.createElement('p');
		p.innerHTML = storageTaskList[i].name;

		select = document.createElement('select');
		for(var j = storageTaskList[i].min; j <= storageTaskList[i].max; j++){
			option = document.createElement('option');
			option.innerHTML = j;
			select.appendChild(option);
		}
		select.value = storageTaskList[i].level;

		img = document.createElement('img');
		img.src = 'chrome-extension://' + chrome.runtime.id + '/img/x-button.png';
		img.height = img.width = '17';

		(function(i){
			select.addEventListener('change', function(){
				window.storage.tasks.updateByBuildId(storageTaskList[i].buildId, {level: this.value});
			});
			img.addEventListener('click', function(){
				window.storage.tasks.remove(storageTaskList[i].buildId);
				location.reload();
			});
		})(i);

		p.appendChild(select);
		p.appendChild(img);
		line.appendChild(p);
		wrapper.appendChild(line);
	}
	travianBotTaskPanel.appendChild(wrapper);
})();