setInterval(clock, 1000);

function clock(){
	let date = new Date();

	let year = date.getFullYear();
	let month = String(date.getMonth() + 1).padStart(2,"0");
	let day = String(date.getDate()).padStart(2, "0");
	let dayOfWeek = date.getDay();
	let week = new Array('일', '월', '화', '수', '목', '금', '토');
	dayOfWeek = week[dayOfWeek];

	let hour = String(date.getHours()).padStart(2,"0");
	let min = String(date.getMinutes()).padStart(2,"0");
	let sec = String(date.getSeconds()).padStart(2,"0");

	let dateStr = `${year}/${month}/${day} (${dayOfWeek})`;
	let timeStr = `${hour}:${min}:${sec}`;

	document.getElementById("date").textContent = dateStr;
	document.getElementById("time").textContent = timeStr;
}

function addList(){

	let list = document.getElementById("list");
	let content = document.getElementById("content").value;
	let count = list.childElementCount;

	let newDiv = document.createElement('div');
	let text = document.createTextNode(`${count+1}. ${content}`);

	list.appendChild(newDiv);
	newDiv.appendChild(text);
	document.getElementById("content").value="";
}

