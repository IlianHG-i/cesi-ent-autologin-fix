function LoadCSS(cssURL) {
    return new Promise(function(resolve, reject) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssURL;
        document.head.appendChild(link);
        link.onload = function() {
            resolve();
            console.log('CSS has loaded!');
        };
    });
}

chrome.storage.sync.get(['mode_nuit'], function(result) {
    if (!result.mode_nuit) { return } else {
        if (result.mode_nuit) {
            LoadCSS(`chrome-extension://${chrome.runtime.id}/css/style-ent.css`)
        }
    }
});