const saveids = document.getElementById("saveids");
const modenuit = document.getElementById("switch");

//Si le bouton "Sauvegarder" est appuyé, alors on récupère les données entrées, et on les envoie dans le stockage synchronisé

if (saveids) {
    saveids.onclick = function() {
        chrome.storage.sync.set({ email: document.getElementById("userNameInput").value, password: document.getElementById("passwordInput").value }, function() {
            console.log("saved")
        });
        window.close()
    };
}

if (modenuit) {
    modenuit.onclick = function() {
        chrome.storage.sync.set({ mode_nuit: document.getElementById("switch").checked }, function() {
            console.log("saved")
        });
    };
}