"use strict"

function addStudent() {
	const tableOfStudents = document.getElementById("tableOfStudents");
	const studentName = document.getElementById("studentName").value;
	const studentSex = document.getElementById("studentSex").value;
	const studentBirth = document.getElementById("studentBirth").value;

	const newRow = tableOfStudents.insertRow(tableOfStudents.rows.length-2);
	
	const newNameCell = newRow.insertCell(-1);
	newNameCell.appendChild(document.createTextNode(studentName));
	const newSexCell = newRow.insertCell(-1);
	newSexCell.appendChild(document.createTextNode(studentSex));
	const newDateCell = newRow.insertCell(-1);
	newDateCell.appendChild(document.createTextNode(studentBirth));
	const newAgeCell = newRow.insertCell(-1);
	newAgeCell.appendChild(document.createTextNode(Math.floor((new Date() - new Date(studentBirth))/1000/60/60/24/365)));
	counter++;
	sumAge+=Math.floor((new Date() - new Date(studentBirth))/1000/60/60/24/365);
	
	document.getElementById("averageAge").innerHTML = sumAge/counter;
}

let counter = 0;
let sumAge = 0;
