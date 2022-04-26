function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
   
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

dynamicallyLoadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js')
dynamicallyLoadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js')
dynamicallyLoadScript('https://code.jquery.com/jquery-3.6.0.min.js')
setTimeout(() => dynamicallyLoadScript('https://raw.githack.com/rt867/47438839/main/47438839.js'), 300);

