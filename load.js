function renderAppstore() {
document.getElementById('appstore').innerHTML = `
<div class="tabs">
			<button class="tablink" onClick="openTab('appstore-home')">Home</button>
			<button class="tabaccIcon" onClick="closeApp('appstore')"><img src="systemH/accessibility/close.png"></button>
			<button class="tabaccIcon" onClick="miniApp('appstore')"><img src="systemH/accessibility/minimize.png"></button>
		</div>
		<div class="tabcontent" id="appstore-home">
			<h1>Universe Appstore</h1>
			<button class="padIcon" onClick="openTab('appstore-clicker')"><img class="padImage" src="systemH/appstore/clicker/clicker.png"></button>
			<button class="padIcon" onClick="openTab('appstore-calculator')"><img class="padImage" src="systemH/appstore/calculator/calculator.png"></button>
			<button class="padIcon" onClick="openTab('appstore-todo')"><img class="padImage" src="systemH/appstore/todo/todo.png"></button>
			<button class="padIcon" onClick="openTab('appstore-timer')"><img class="padImage" src="systemH/appstore/timer/timer.png"></button>
			<button class="padIcon" onClick="openTab('appstore-dog')"><img class="padImage" src="systemH/appstore/petdog/petdog.png"></button>
			<button class="padIcon" onClick="openTab('appstore-new')"><img class="padImage" src="systemH/appstore/new.png"></button>
			<center>
				<button class="warningButton" onClick="uninstallKeep()">Uninstall but keep saves</button><br><br>
				<button class="warningButton" onClick="uninstallAll()">Uninstall all apps</button>
			</center>
		</div>
		<div class="tabcontent" id="appstore-clicker">
			<center>
				<h1>Universe Clicker</h1>
				<img class="apsimg" src="systemH/appstore/clicker/clicker.png"><br>
				<span>By: GroupSSalt</span><br><br>
				<button class="button" onClick="installClicker()" id="installClicker">Install</button>
			</center>
		</div>
		<div class="tabcontent" id="appstore-calculator">
			<center>
				<h1>AI Calculator</h1>
				<img class="apsimg" src="systemH/appstore/calculator/calculator.png"><br>
				<span>By: ChatGPT</span><br><br>
				<button class="button" onClick="installCalculator()" id="installCalculator">Install</button>
			</center>
		</div>
		<div class="tabcontent" id="appstore-todo">
			<center>
				<h1>AI Todo List</h1>
				<img src="systemH/appstore/todo/todo.png" class="apsimg"><br>
				<span>By: ChatGPT</span><br><br>
				<button class="button" id="installTodo" onClick="installTodo()">Install</button>
			</center>
		</div>
		<div class="tabcontent" id="appstore-timer">
			<center>
				<h1>Timer</h1>
				<img src="systemH/appstore/timer/timer.png" class="apsimg"><br>
				<span>By: GroupSSalt</span><br><br>
				<button class="button" id="installTimer" onClick="installTimer()">Install</button>
			</center>
		</div>
		<div class="tabcontent" id="appstore-dog">
			<center>
				<h1>Pet Dog</h1>
				<img src="systemH/appstore/petdog/petdog.png" class="apsimg"><br>
				<span>By: Veda B & GroupSSalt</span><br><br>
				<button class="button" onClick="installDog()" id="installDog">Install</button>
			</center>
		</div>
		<div class="tabcontent" id="appstore-new">
			<center>
				<img class="apsimg" src="systemH/appstore/new.png"><br>
				<h1>Make a new app</h1>
				<p>To make a new app. Write all your code and send it RAW (don't send a file, send text) to <b>saltydevelopers@gmail.com</b><br>we will take care of your request and notify you if your app will be added to the next Universe Kernel update in the Appstore!</p>
			</center>
		</div>
`;
}

renderAppstore();
