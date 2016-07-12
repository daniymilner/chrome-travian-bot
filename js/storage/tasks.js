(function(){
	window.storage['tasks'] = {
		__key: 'taskList',
		__store: function(list){
			localStorage.setItem(this.__key, JSON.stringify(list));
		},
		add: function(name, buildId, level, min, max){
			var taskList = JSON.parse(localStorage.getItem(this.__key)) || [],
				saved = false;
			for(var i = 0; i < taskList.length; i++){
				if(taskList[i].buildId === buildId){
					taskList[i].level = level;
					saved = true;
					break;
				}
			}
			if(!saved){
				taskList.push({
					name: name,
					village: window.storage.villages.getActive(),
					buildId: buildId,
					level: level,
					min: min,
					max: max
				})
			}
			this.__store(taskList);
		},
		remove: function(buildId){
			var taskList = JSON.parse(localStorage.getItem(this.__key));
			for(var i = 0; i < taskList.length; i++){
				if(taskList[i].buildId === buildId){
					taskList.splice(i, 1);
					break;
				}
			}
			this.__store(taskList);
		},
		list: function(){
			return JSON.parse(localStorage.getItem(this.__key)) || [];
		},
		getByBuildId: function(buildId){
			var search = this.list().filter(function(item){
				return item.buildId === buildId;
			});
			return search && search.length ? search[0] : null;
		},
		updateByBuildId: function(buildId, data){
			var list = this.list();
			for(var i = 0; i < list.length; i++){
				if(list[i].buildId === buildId){
					if(parseInt(data.level)){
						list[i].level = parseInt(data.level);
					}
					if(data.resources){
						list[i].resources = data.resources;
					}
					this.__store(list);
					break;
				}
			}
		},
		action: {
			__key: 'taskListStatus',
			start: function(){
				localStorage.setItem(this.__key, 1);
			},
			stop: function(){
				localStorage.setItem(this.__key, 0);
			},
			isProgress: function(){
				return parseInt(localStorage.getItem(this.__key));
			},
			toggle: function(){
				if(this.isProgress()){
					this.stop();
				}else{
					this.start();
				}
			}
		},
		build: {
			__key: 'currentBuildStep', //analyze, analyzeInBuild, start, build, finish
			setStep: function(step){
				localStorage.setItem(this.__key, step);
			},
			getCurrentStep: function(){
				return localStorage.getItem(this.__key) || 'analyze';
			}
		}
	}
})();