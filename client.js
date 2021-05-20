
function createTable(container, mas)
{
	let mastable = JSON.parse(mas);
	let htmltable = '<table><thead><tr><th>username</th><th>post</th><th>password</th><th>age</th></tr></thead><tbody>';
	for(i = 0; i < mastable.length; i++){
		htmltable += '<tr><td>';
		htmltable += mastable[i]['username'];
		htmltable += '</td><td>';
		htmltable += mastable[i]['post'];
		htmltable += '</td><td>';
		htmltable += mastable[i]['password'];
		htmltable += '</td><td>';
		htmltable += mastable[i]['age'];
		htmltable += '</td></tr>';
	}
	htmltable += '</tbody><table>';
	document.getElementById(container).innerHTML = htmltable;
}

$(document).ready(function(){
	function getUsers(){
		$.get('/getusers',function(data){
			createTable('table',data);
		})
	}
	getUsers();
})


