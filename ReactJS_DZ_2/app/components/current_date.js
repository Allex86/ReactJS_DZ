'use strict';

module.exports = function() 
{
	let now = new Date();
	let getData = document.getElementById('getData');
	getData.async = false;
	getData.addEventListener( "click" , function()
		{
			alert(now);
			console.log(now);
		});
}