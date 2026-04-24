function waitFor(selector, timeoutMs = 5000) {
    return new Promise((resolve, reject) => {
        const found = document.querySelector(selector);
        if (found) return resolve(found);
        const observer = new MutationObserver(() => {
            const el = document.querySelector(selector);
            if (el) {
                observer.disconnect();
                resolve(el);
            }
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
        setTimeout(() => {
            observer.disconnect();
            reject(new Error("timeout:" + selector));
        }, timeoutMs);
    });
}

(async function autoLoginAdfs() {
    let creds;
    try {
        creds = await new Promise((resolve) =>
            chrome.storage.sync.get(['email', 'password'], resolve)
        );
    } catch (e) {
        console.log("autoAuthFailed:storage", e);
        return;
    }

    if (!creds.password) {
        console.log("autoAuthFailed:noPassword");
        return;
    }

    let userInput, passInput, form;
    try {
        userInput = await waitFor("#userNameInput");
        passInput = await waitFor("#passwordInput");
        form = document.getElementById("loginForm");
    } catch (e) {
        console.log("autoAuthFailed:noForm", e.message);
        return;
    }

    if (!userInput.value) {
        if (!creds.email) {
            console.log("autoAuthFailed:noEmail");
            return;
        }
        userInput.value = creds.email;
    }

    passInput.value = creds.password;

    if (form) {
        form.submit();
    } else {
        passInput.form && passInput.form.submit();
    }
})();
