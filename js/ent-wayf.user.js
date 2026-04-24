chrome.storage.sync.get(['email'], function(result) {
    if (!result.email) {
        console.log("autoAuthFailed:noEmail");
        return;
    }
    const loginInput = document.getElementById("login");
    const form = document.forms["wayf"];
    if (!loginInput || !form) {
        console.log("autoAuthFailed:noForm");
        return;
    }
    loginInput.value = result.email;
    form.submit();
});
