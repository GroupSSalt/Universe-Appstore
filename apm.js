let appscripts = [];
let appcontent = "";
let appsdesk = "";
let installedApps = [];

function loadApps() {
    let storedAppScripts = localStorage.getItem('appscripts');
    if (storedAppScripts) {
        appscripts = JSON.parse(storedAppScripts);
        loadScripts();
    }
	appcontent = localStorage.getItem('appcontent') || "";
	appsdesk = localStorage.getItem('appsdesk') || "";
	installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
	document.getElementById('deskpad').innerHTML += appsdesk;
	document.getElementById('EXapps').innerHTML += appcontent;
}

function saveApps() {
    localStorage.setItem('appscripts', JSON.stringify(appscripts));
	localStorage.setItem('appcontent', appcontent);
	localStorage.setItem('appsdesk', appsdesk);
	localStorage.setItem('installedApps', JSON.stringify(installedApps));
}

function loadScripts() {
    appscripts.forEach(function(url) {
        let script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    });
}

function updateInstalledApps() {
    installedApps.forEach(function(id) {
        let button = document.getElementById(id);
        if (button) {
            if (installedApps.includes(id)) {
                button.innerHTML = "Installed";
                button.disabled = true;
            } else {
                button.innerHTML = "Install";
                button.disabled = false;
            }
        }
    });
}