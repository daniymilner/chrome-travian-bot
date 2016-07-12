(function(){
	window.storage.villages.clear();

	Array.prototype
		.slice
		.call(document.querySelectorAll('#sidebarBoxVillagelist .sidebarBoxInnerBox .innerBox.content ul li'))
		.forEach(function(item){
			window.storage.villages.add({
				active: item.classList.contains('active'),
				href: item.getElementsByTagName('a')[0].href,
				name: item.getElementsByClassName('name')[0].innerHTML
			});
		});
})();