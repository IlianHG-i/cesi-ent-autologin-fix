//Récupère les anciennes données enregistrées pour pré-remplir le formulaire

chrome.storage.sync.get(['email'], function(result) { if (!result.email) { return } else { document.getElementById("userNameInput").value = result.email; } });

chrome.storage.sync.get(['password'], function(result) { if (!result.password) { return } else { document.getElementById("passwordInput").value = result.password; } });

chrome.storage.sync.get(['mode_nuit'], function(result) { if (!result.mode_nuit) { return } else { document.getElementById("switch").checked = result.mode_nuit } });