'use strict';

module.exports
{

 window.onload = function() {
	
	let now = new Date();
	let getData = document.getElementById('getData');
	getData.addEventListener( "click" , function()
		{
			alert(now);
			console.log(now);
		});
	}
}