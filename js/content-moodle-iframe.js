function LoadiFrameCSS(cssURL) {
    return new Promise(function(resolve, reject) {
        if (!frames[0]) { return }
        if (frames[0].document.URL != 'https://moodle-ingenieurs.cesi.fr/*') {return}
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssURL;
        frames[0].document.head.appendChild(link);
        link.onload = function() {
            resolve();
            console.log('iFrame CSS has loaded!');
        };
    });
}

chrome.storage.sync.get(['mode_nuit'], function(result) {
    if (!result.mode_nuit) { return } else {
        if (result.mode_nuit) {
            if (document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table")) {
                document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").bgColor = "#333333"
                /*
                for (let index = 0; index <= document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows.length - 1; index++) {
                    for (let indexbis = 0; indexbis <= document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells.length - 1; indexbis++) {
                        //const elementbis = document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis];
                        if (document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img")) {
                            document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img").src.replace('https://moodle-ingenieurs.cesi.fr/pluginfile.php/408561/mod_label/intro/', 'https://kintonhiryuu.live/cesi/moodle/images/');
                            console.log("IMAGE Colonne " + indexbis + " Ligne " + index);
                            console.log(document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img").src);
                        }
                    }
                }
                */
            }
            LoadiFrameCSS(`chrome-extension://${chrome.runtime.id}/css/style-moodle.css`)
        }
    }
});