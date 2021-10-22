function fontSize(change, factor) {
    var f = parseInt(factor);
    var body = document.body; 
    style = window.getComputedStyle(body, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    
    if (change=='inc'){
        body.style.fontSize = (currentSize + f) + 'px';
    }else if (){
        // YOUR CODE GOES HERE
    }
}

function setTheme(theme) {
    if (theme=='light'){
        document.getElementById('theme-id').href= './css/light.css'
    }else if (theme=='dark') {
        document.getElementById('theme-id').href= './css/dark.css'
    }else if (theme=='neon') {
        document.getElementById('theme-id').href= './css/neon.css'
    }
    // YOUR CODE GOES HERE
    else {
        document.getElementById('theme-id').href= './css/styles.css'
    }
}
