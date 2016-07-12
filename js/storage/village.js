(function(){
	window.storage['villages'] = {
		__key: 'villages',
		__store: function(list){
			localStorage.setItem(this.__key, JSON.stringify(list));
		},
		add: function(village){
			var list = this.list();
			list.push(village);
			this.__store(list);
		},
		list: function(){
			return JSON.parse(localStorage.getItem(this.__key)) || [];
		},
		clear: function(){
			this.__store([]);
		},
		getActive: function(){
			return this.list().find(function(item){
				return item.active;
			});
		}
	}
})();