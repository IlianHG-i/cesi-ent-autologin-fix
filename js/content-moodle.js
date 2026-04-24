function LoadCSS(cssURL) {
    return new Promise(function(resolve, reject) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssURL;
        document.head.appendChild(link);
        link.onload = function() {
            if (document.querySelector("#page-wrapper > div.hero-section > div.container.hero-content > h2 > div > p")) {
                document.querySelector("#page-wrapper > div.hero-section > div.container.hero-content > h2 > div > p").textContent = "JAWAD : L'enfant du chaos";
                document.querySelector("#page-wrapper > div.hero-section > div.container.hero-content > div.actions > a").href = "https://youtu.be/KUj8H7ZOfqM";
                document.querySelector("#page-wrapper > div.hero-section > div.container.hero-content > div.actions > a").textContent = "Voir le film";
            }
            resolve();
            console.log('Run 2 - CSS has loaded!');
        };
    });
}

chrome.storage.sync.get(['mode_nuit'], function(result) {
    if (!result.mode_nuit) {
        LoadCSS(`chrome-extension://${chrome.runtime.id}/css/style-moodle-blanc.css`)
    } else {
        if (result.mode_nuit) {
            /*
            if (document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table > tbody > tr:nth-child(2) > td:nth-child(1) > a > img")) {
                document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table > tbody > tr:nth-child(2) > td:nth-child(1) > a > img").src = "https://kintonhiryuu.live/cesi/moodle/images/fbgris2.png";
                document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table > tbody > tr:nth-child(2) > td:nth-child(1) > a > img").onmouseover = this.src="https://kintonhiryuu.live/cesi/moodle/images/fbgris2.png";
                document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table > tbody > tr:nth-child(2) > td:nth-child(1) > a > img").onmouseout = this.src="https://kintonhiryuu.live/cesi/moodle/images/fbgris2.png";
            }
            */
                /*
                if (document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table")) {
                    document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").bgColor = "#333333"
                    for (let index = 0; index <= document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows.length - 1; index++) {
                        for (let indexbis = 0; indexbis <= document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells.length - 1; indexbis++) {
                            const elementbis = document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis];
                            if (document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img")) {
                                document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img").src.replace("https://moodle-ingenieurs.cesi.fr/pluginfile.php/408561/mod_label/intro/", "https://kintonhiryuu.live/cesi/moodle/images/");
                                document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img").onmouseout = document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img").src.replace("https://moodle-ingenieurs.cesi.fr/pluginfile.php/408561/mod_label/intro/", "https://kintonhiryuu.live/cesi/moodle/images/");
                                document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img").onmouseover = document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img").src.replace("https://moodle-ingenieurs.cesi.fr/pluginfile.php/408561/mod_label/intro/", "https://kintonhiryuu.live/cesi/moodle/images/");
                                console.log("IMAGE Colonne " + indexbis + " Ligne " + index);
                                console.log(document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img").src);
                                console.log(document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img").onmouseover);
                                console.log(document.querySelector("#module-52829 > div > div > div:nth-child(2) > div > div > div > center > table").tBodies[0].rows[index].cells[indexbis].querySelector("img").onmouseout);
                            }
                        }
                    }
                }*/
            LoadCSS(`chrome-extension://${chrome.runtime.id}/css/style-moodle.css`)
            if (document.URL == "https://moodle-ingenieurs.cesi.fr/") {
                document.querySelector("#page-wrapper > div.hero-section > div.hero-slider-wrapper > div.flexslider.hero-slider > ul > li").style = "width: 100%; height: 250px; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;";
            }
        }
    }
});