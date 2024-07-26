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

	if(content == ""){
		alert("내용을 입력해주세요");
	} else {
		let listBox = document.getElementById("listBox");
		let count = listBox.childElementCount+1;

		let tr = document.createElement('tr');

		let td_num = document.createElement('td');
		td_num.className = 'listNum';
		let text_num = document.createTextNode(`${count} `);

		let td_text = document.createElement('td');
		td_text.className = 'listContent';
		let text_content = document.createTextNode(`${content}`);

		listBox.appendChild(tr);
		tr.appendChild(td_num);
		tr.appendChild(td_text);
		td_num.appendChild(text_num);
		td_text.appendChild(text_content);
	}
	
	document.getElementById("content").value="";
}

