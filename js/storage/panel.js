(function(){
	var storageKey = 'activePanel', that;
	window.storage[storageKey] = {
		__key: 'panel_left',
		__taskkey: 'panel_task',
		panel:{
			activate: function(){
				that.activate(that.__key);
			},
			deactivate: function(){
				that.deactivate(that.__key);
			},
			isActive: function(){
				return that.isActive(that.__key);
			}
		},
		taskPanel:{
			activate: function(){
				that.activate(that.__taskkey);
			},
			deactivate: function(){
				that.deactivate(that.__taskkey);
			},
			isActive: function(){
				return that.isActive(that.__taskkey);
			}
		},
		activate: function(key){
			localStorage.setItem(key, 1);
		},
		deactivate: function(key){
			localStorage.setItem(key, 0);
		},
		isActive: function(key){
			return parseInt(localStorage.getItem(key));
		}
	};
	that = window.storage[storageKey];
})();