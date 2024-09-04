(function() {
    var head = document.getElementsByTagName('head')[0];

    // Create the first script tag for the gtag.js script
    var script1 = document.createElement('script');
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-81VRG15LW2";
    head.appendChild(script1);

    // Create the second script tag for the inline gtag config script
    var script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-81VRG15LW2');
    `;
    head.appendChild(script2);
})();
