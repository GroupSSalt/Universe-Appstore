let clickerMoney = 0;
let moneyAdd = 1;
let up1cost = 50;
let up2cost = 1000;
let up3cost = 10000;

function clickerClicked() {
	clickerMoney += moneyAdd;
	displayOutput();
}

function displayOutput() {
	document.getElementById('clickerOutput').innerHTML = clickerMoney;
	document.getElementById('clickerU1').innerHTML = up1cost;
	document.getElementById('clickerU2').innerHTML = up2cost;
	document.getElementById('clickerU3').innerHTML = up3cost;
}

function clickerUpgrade1() {
	if (clickerMoney >= up1cost) {
		clickerMoney -= up1cost;
		up1cost *= 2;
		moneyAdd++;
		displayOutput();
	}
}

function clickerUpgrade2() {
	if (clickerMoney >= up2cost) {
		clickerMoney -= up2cost;
		up2cost *= 2;
		moneyAdd *= 2;
		displayOutput();
	}
}

function clickerUpgrade3() {
	if (clickerMoney >= up3cost) {
		clickerMoney -= up3cost;
		up3cost *= 2;
		setInterval(clickerClicked, 1000);
		displayOutput();
	}
}

function saveClicker() {
	localStorage.setItem('clickerMoney', clickerMoney);
	localStorage.setItem('moneyAdd', moneyAdd);
	localStorage.setItem('up1cost', up1cost);
	localStorage.setItem('up2cost', up2cost);

	let variables = [
		'clickerMoney',
		'moneyAdd',
		'up1cost',
		'up2cost'
	];

	variables.forEach(function(variable) {
		if (!appFiles.includes(variable)) {
			appFiles.push(variable);
			saveAppFiles();
		}
	});
	displayOutput();
	noti('Saved');
}

function loadClicker() {
	clickerMoney = parseInt(localStorage.getItem('clickerMoney')) || 0;
	moneyAdd = parseInt(localStorage.getItem('moneyAdd')) || 1;
	up1cost = parseInt(localStorage.getItem('up1cost')) || 50;
	up2cost = parseInt(localStorage.getItem('up2cost')) || 1000;
	displayOutput();
	noti('Loaded');
}

displayOutput();
