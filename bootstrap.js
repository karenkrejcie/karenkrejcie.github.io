$(function(){
             
        // Get HTML head element
        var head = document.getElementsByTagName('head')[0];
 
        // Create new link Element
        var link = document.createElement('link');
 
        // set the attributes for link element
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css';
        link.integrity = 'sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor';
        link.crossorigin = 'anonymous'
 
        // Append link element to HTML head
        head.appendChild(link);
    });
