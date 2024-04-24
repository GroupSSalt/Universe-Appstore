function loadApps() {
    appscripts = JSON.parse(localStorage.getItem('appscripts'));
    appcontent = localStorage.getItem('appcontent') || "";
    appsdesk = localStorage.getItem('appsdesk') || "";
    installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
	appscripts = JSON.parse(localStorage.getItem('appscripts')) || [];
	appstyles = JSON.parse(localStorage.getItem('appstyles')) || [];
    appendFiles();
}

function saveApps() {
    localStorage.setItem('appscripts', JSON.stringify(appscripts));
    localStorage.setItem('appcontent', appcontent);
    localStorage.setItem('appsdesk', appsdesk);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
	localStorage.setItem('appstyles', JSON.stringify(appstyles));
}

function appendFiles() {
    // Load scripts
    appscripts.forEach(function(url) {
        let script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    });

    // Load styles
    appstyles.forEach(function(url) {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        document.head.appendChild(link);
    });
    document.getElementById('deskpad').innerHTML += appsdesk;
    document.getElementById('EXapps').innerHTML += appcontent;
    updateInstalledApps();
}

function updateInstalledApps() {
    installedApps.forEach(function(id) {
        let button = document.getElementById(id);
        if (button) {
            if (installedApps.includes(id)) {
                button.innerHTML = "Installed";
                button.disabled = true;
            }
        }
    });
}

function uninstallAll() {
    ask('Are you sure?', function() {
        localStorage.removeItem('appsdesk');
        localStorage.removeItem('appcontent');
        localStorage.removeItem('quickLoadData');
        localStorage.removeItem('appstyles');
        localStorage.removeItem('appscripts');
        localStorage.removeItem('installedApps');
        localStorage.removeItem('appFiles');
        ask('Restart Now?', function() {
            restart();
        });
    });
}

function uninstallKeep() {
    ask('Are you sure?', function() {
        localStorage.removeItem('appsdesk');
        localStorage.removeItem('appcontent');
        localStorage.removeItem
        localStorage.removeItem('appstyles');
        localStorage.removeItem('appscripts');
        localStorage.removeItem('installedApps');
        ask('Restart Now?', function() {
            restart();
        });
    });
}