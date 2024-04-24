function installClicker() {
    let EXapps = document.getElementById('EXapps');
    EXapps.innerHTML += `
		<div class="window" id="clicker">
    <div class="tabs">
	<button class="tablink" onClick="openTab('clicker-home')">Home</button>
    	<button class="tabaccIcon" onClick="closeApp('clicker')"><img src="systemH/accessibility/close.png"></button>
		<button class="tabaccIcon" onClick="miniApp('clicker')"><img src="systemH/accessibility/minimize.png"></button>
    </div>
	<div class="tabcontent" id="clicker-home">
		<center>
            <h1 id="clickerOutput">Loading</h1>
            <button class="button" onClick="clickerClicked()">Clicker</button><br><br><br>
			<button class="clicker-button" onClick="openTab('clicker-shop')">SHOP</button><br><br>
			<button class="clicker-fn-button" onClick="saveClicker()">Save</button><br><br>
			<button class="clicker-fn-button" onClick="loadClicker()">Load</button>
        </center>
	</div>
	<div class="tabcontent" id="clicker-shop">
		<center>
			<button class="clicker-button" onClick="openTab('clicker-home')">BACK</button><br><br>
			<button class="button" onClick="clickerUpgrade1()">+1</button>
        	<p id="clickerU1">Loading</p><br><br>
        	<button class="button" onClick="clickerUpgrade2()">x2</button>
        	<p id="clickerU2">Loading</p><br><br>
        	<button class="button" onClick="clickerUpgrade3()">Auto Clicker</button>
        	<p id="clickerU3">Loading</p><br><br>
		</center>
	</div>
</div>
    `;

    let deskpad = document.getElementById('deskpad');
    deskpad.innerHTML += `
        <button id="openClicker" class="padIcon" onClick="openApp('clicker')">
            <img src="systemH/appstore/clicker/clicker.png" class="padImage">
        </button>
    `;

    appscripts.push("systemH/appstore/clicker/program/clicker.js");

	appcontent += `
		<div class="window" id="clicker">
    <div class="tabs">
		<button class="tablink" onClick="openTab('clicker-home')">Home</button>
    	<button class="tabaccIcon" onClick="closeApp('clicker')"><img src="systemH/accessibility/close.png"></button>
		<button class="tabaccIcon" onClick="miniApp('clicker')"><img src="systemH/accessibility/minimize.png"></button>
    </div>
	<div class="tabcontent" id="clicker-home">
		<center>
            <h1 id="clickerOutput">Loading</h1>
            <button class="button" onClick="clickerClicked()">Clicker</button><br><br><br>
			<button class="clicker-button" onClick="openTab('clicker-shop')">SHOP</button><br><br>
			<button class="clicker-fn-button" onClick="saveClicker()">Save</button><br><br>
			<button class="clicker-fn-button" onClick="loadClicker()">Load</button>
        </center>
	</div>
	<div class="tabcontent" id="clicker-shop">
		<center>
			<button class="clicker-button" onClick="openTab('clicker-home')">BACK</button><br><br>
			<button class="button" onClick="clickerUpgrade1()">+1</button>
        	<p id="clickerU1">Loading</p><br><br>
        	<button class="button" onClick="clickerUpgrade2()">x2</button>
        	<p id="clickerU2">Loading</p><br><br>
        	<button class="button" onClick="clickerUpgrade3()">Auto Clicker</button>
        	<p id="clickerU3">Loading</p><br><br>
		</center>
	</div>
</div>
	`;

	appsdesk += `
		<button id="openClicker" class="padIcon" onClick="openApp('clicker')">
            <img src="systemH/appstore/clicker/clicker.png" class="padImage">
        </button>
	`;

	installedApps.push("installClicker");

    let script = document.createElement('script');
    script.src = "systemH/appstore/clicker/program/clicker.js";
    document.body.appendChild(script);

	appstyles.push("systemH/appstore/clicker/program/clicker.css");

	let style = document.createElement("link");
	style.rel = "stylesheet";
	style.href = "systemH/appstore/clicker/program/clicker.css";
	document.head.appendChild(style);

	saveApps();
    toggletheme();
    toggletheme();

    document.getElementById('installClicker').innerHTML = "Installed";
    document.getElementById('installClicker').disabled = true;
}
