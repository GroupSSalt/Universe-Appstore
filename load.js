function loadAppstore() {
  document.getElementById('appstore').innerHTML = `
  <div class="tabs">
			<button class="tablink" onClick="openTab('appstore-home')">Home</button>
			<button class="tabaccIcon" onClick="closeApp('appstore')"><img src="systemH/accessibility/close.png"></button>
			<button class="tabaccIcon" onClick="miniApp('appstore')"><img src="systemH/accessibility/minimize.png"></button>
		</div>
		<div class="tabcontent" id="appstore-home">
		<h1>Universe Appstore</h1>
		<button class="padIcon" onClick="openTab('appstore-clicker')"><img class="padImage" src="systemH/appstore/clicker/clicker.png"></button>
	</div>
		<div class="tabcontent" id="appstore-clicker">
	<center>
			<h1>Universe Clicker</h1>
			<img src="systemH/appstore/clicker/clicker.png"><br>
			<span>By: GroupSSalt</span><br>
			<span>Version: 1</span><br><br>
			<button class="button" onClick="installClicker()" id="installClicker">Install</button>
	</center>
		</div>
  `;
}
