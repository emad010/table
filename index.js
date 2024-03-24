
var table = document.getElementById("myTable");

var data = [
  ["nvalue 1", "nvalue 2", "nvalue 3"],
  ["nvalue 4", "nvalue 5", "nvalue 6"],
  ["nvalue 1", "nvalue 2", "nvalue 3"],
   ["nvalue 1", "nvalue 2", "nvalue 3"],
  ["nvalue 4", "nvalue 5", "nvalue 6"],
  ["nvalue 1", "nvalue 2", "nvalue 3"],
   ["nvalue 1", "nvalue 2", "nvalue 3"],
  ["nvalue 4", "nvalue 5", "nvalue 6"],
  ["nvalue 1", "nvalue 2", "nvalue 3"],
   ["nvalue 1", "nvalue 2", "nvalue 3"],
  ["nvalue 4", "nvalue 5", "nvalue 6"],
  ["nvalue 1", "nvalue 2", "nvalue 3"],
];


for (var i = 0; i < data.length; i++) {

	var row = table.insertRow();
	
	for (var j = 0; j < data[0].length; j++) {

		var cell1 = row.insertCell();
		cell1.innerHTML = data[i][j];

	}



}


