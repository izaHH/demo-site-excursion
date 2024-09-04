// Insert GTM code into the <head> section
(function() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':" +
    "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0]," +
    "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=" +
    "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);" +
    "})(window,document,'script','dataLayer','GTM-PFVNC69P');";
    head.appendChild(script);
})();

// Insert GTM <noscript> iframe into the <body> section
(function() {
    var body = document.getElementsByTagName('body')[0];
    var noscript = document.createElement('noscript');
    noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFVNC69P"' +
                         'height="0" width="0" style="display:none;visibility:hidden"></iframe>';
    body.appendChild(noscript);
})();
