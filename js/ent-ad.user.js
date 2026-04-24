chrome.storage.sync.get(['email'], function(result) {
    if (!result.email) {
        console.log("autoAuthFailed:noEmail");
        return
    } else {
        document.getElementById("userNameInput").value = result.email;
    }
});

chrome.storage.sync.get(['password'], function(result) {
    if (!result.password) {
        console.log("autoAuthFailed:noPassword");
        return
    } else {
        document.getElementById("passwordInput").value = result.password;
        if (document.getElementById("userNameInput").value) {
            document.getElementById("loginForm").submit();
        } else {
            console.log("autoAuthFailed:noEmail");
        }
    }
});