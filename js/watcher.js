(function(){
	var currentTask,
		currentStep = window.storage.tasks.build.getCurrentStep(),
		currentResources;
	if(window.storage.tasks.action.isProgress() && getList().length){
		currentTask = getCurrent();
		switch(currentStep){
			case 'analyze':
				window.storage.tasks.build.setStep('analyzeInBuild');
				changeLocationByBuildingId(currentTask.buildId);
				break;
			case 'analyzeInBuild':
				analyzeBuildResources();
				setInterval(compareResources, 5000);
				break;
			case 'start':
				if(!isCurrentBuildingsNow()){
					window.storage.tasks.build.setStep('build');
					changeLocationByBuildingId(currentTask.buildId);
				}else{
					window.storage.tasks.build.setStep('analyzeInBuild');
					checkLocation();
				}
				break;
			case 'build':
				clickBuild();
				break;
		}
	}else{
		window.storage.tasks.build.setStep('analyze');
	}

	function clickBuild(){
		var button = document.querySelector('.green.build'),
			levelToUpdate = parseInt(document.querySelector('.titleInHeader .level').innerText.split(' ')[1]);
		if(!button.classList.contains('disabled')){
			if(currentTask.level === levelToUpdate + 1){
				window.storage.tasks.remove(currentTask.buildId);
			}else{
				window.storage.tasks.updateByBuildId(currentTask.buildId, {level: currentTask.level + 1});
				currentTask = getCurrent();
			}

			window.storage.tasks.build.setStep('analyze');
			button.click();
		}else{
			window.storage.tasks.build.setStep('analyzeInBuild');
			checkLocation();
		}
	}

	function analyzeCurrentResources(){
		currentResources = {
			wood: parseInt(replaceWhitespaces(window.l1.innerText)),
			clay: parseInt(replaceWhitespaces(window.l2.innerText)),
			iron: parseInt(replaceWhitespaces(window.l3.innerText)),
			crop: parseInt(replaceWhitespaces(window.l4.innerText))
		};
	}

	function analyzeBuildResources(){
		if(!currentTask.resources){
			var showCosts = document.querySelector('.showCosts');
			window.storage.tasks.updateByBuildId(currentTask.buildId, {
				resources: {
					wood: parseInt(showCosts.querySelector('.resources.r1').innerText),
					clay: parseInt(showCosts.querySelector('.resources.r2').innerText),
					iron: parseInt(showCosts.querySelector('.resources.r3').innerText),
					crop: parseInt(showCosts.querySelector('.resources.r4').innerText)
				}
			});
			currentTask = getCurrent();
		}
	}

	function compareResources(){
		analyzeCurrentResources();
		if((currentResources.wood > currentTask.resources.wood) &&
			(currentResources.clay > currentTask.resources.clay) &&
			(currentResources.iron > currentTask.resources.iron) &&
			(currentResources.crop > currentTask.resources.crop)){
			window.storage.tasks.build.setStep('start');
			checkLocation(true);
		}else{
			window.storage.tasks.build.setStep('analyzeInBuild');
			setTimeout(checkLocation, 2000);
		}
	}

	function changeLocationByBuildingId(id){
		id = parseInt(id);
		if(!id) return;
		location.href = location.origin + '/build.php?id=' + id;
	}

	function getList(){
		return window.storage.tasks.list();
	}

	function getCurrent(){
		var list = getList();
		return list.length && list[0];
	}

	function replaceWhitespaces(str){
		return str.replace(/ /g, '');
	}

	function checkLocation(reload){
		if(location.pathname !== '/dorf1.php'){
			location.href = location.origin + '/dorf1.php';
		}else if(reload){
			location.reload();
		}
	}

	function isCurrentBuildingsNow(){
		var ulList = document.querySelector('.buildingList .boxes-contents ul');
		return ulList && ulList.children.length;
	}
})();