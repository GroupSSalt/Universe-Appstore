function installClicker() {
    let EXapps = document.getElementById('EXapps');
    EXapps.innerHTML += `
        <div class="window" id="clicker">
            <div class="tabs">
                <button class="tabaccIcon" onClick="closeApp('clicker')"><img src="systemH/accessibility/close.png"></button>
                <button class="tabaccIcon" onClick="miniApp('clicker')"><img src="systemH/accessibility/minimize.png"></button>
            </div>
            <center>
                <h1 id="clickerOutput">Loading</h1>
                <button class="button" onClick="clickerClicked()">Clicker</button><br><br><br>
                <button class="button" onClick="clickerUpgrade1()">+1</button>
                <p id="clickerU1">Loading</p><br><br>
                <button class="button" onClick="clickerUpgrade2()">x2</button>
                <p id="clickerU2">Loading</p><br><br>
                <button class="button" onClick="clickerUpgrade3()">Auto Clicker</button>
                <p id="clickerU3">Loading</p><br><br>
            </center>
        </div>
    `;

    let deskpad = document.getElementById('deskpad');
    deskpad.innerHTML += `
        <button class="padIcon" onClick="openApp('clicker')">
            <img src="https://raw.githubusercontent.com/GroupSSalt/Universe-Appstore/main/clicker/clicker.png" class="padImage">
        </button>
    `;

    appscripts.push("systemH/appstore/clicker/program/clicker.js");

	appcontent += `
		<div class="window" id="clicker">
            <div class="tabs">
                <button class="tabaccIcon" onClick="closeApp('clicker')"><img src="systemH/accessibility/close.png"></button>
                <button class="tabaccIcon" onClick="miniApp('clicker')"><img src="systemH/accessibility/minimize.png"></button>
            </div>
            <center>
                <h1 id="clickerOutput">Loading</h1>
                <button class="button" onClick="clickerClicked()">Clicker</button><br><br><br>
                <button class="button" onClick="clickerUpgrade1()">+1</button>
                <p id="clickerU1">Loading</p><br><br>
                <button class="button" onClick="clickerUpgrade2()">x2</button>
                <p id="clickerU2">Loading</p><br><br>
                <button class="button" onClick="clickerUpgrade3()">Auto Clicker</button>
                <p id="clickerU3">Loading</p><br><br>
            </center>
        </div>
	`;

	appsdesk += `
		<button class="padIcon" onClick="openApp('clicker')">
            <img src="https://raw.githubusercontent.com/GroupSSalt/Universe-Appstore/main/clicker/clicker.png" class="padImage">
        </button>
	`;

	installedApps.push("installClicker");

	saveApps();

    let script = document.createElement('script');
    script.src = "systemH/appstore/clicker/program/clicker.js";
    document.body.appendChild(script);

    document.getElementById('installClicker').innerHTML = "Installed";
    document.getElementById('installClicker').disabled = true;
}
