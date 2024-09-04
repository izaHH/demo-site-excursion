//set onclick attributes
(function(){

        var elementClass = document.getElementsByClassName('nav-link active')[0];
        var inject = elementClass.setAttribute("onClick","dataLayer.push({'event': 'Display'});");
        return inject;
})();