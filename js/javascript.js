function fontSize(change, factor) {
    var f = parseInt(factor);
    var body = document.body; 
    var style = window.getComputedStyle(body, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    
    if (change=='inc'){
        body.style.fontSize = (currentSize + f) + 'px';
    }else if (change=='dec'){
        body.style.fontSize = (currentSize - f) + 'px';
    }

    // switch (change) {
    //     case 'inc':
    //         body.style.fontSize = (currentSize + f) + 'px';
    //         break;
    //     case 'dec':
    //         body.style.fontSize = (currentSize - f) + 'px';
    //         break;
    //     }
}

function setTheme(theme) {
    if (theme=='light'){
        document.getElementById('theme-id').href= './css/light.css'
    }else if (theme=='dark') {
        document.getElementById('theme-id').href= './css/dark.css'
    }else if (theme=='neon') {
        document.getElementById('theme-id').href= './css/neon.css'
    }else {
        document.getElementById('theme-id').href= './css/styles.css'
    }
}
