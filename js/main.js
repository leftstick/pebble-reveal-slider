(function(window, document) {
    'use strict';

    document.querySelector('#remoteAddress').value = localStorage['remoteAddress'];

    document.querySelector('#submit').addEventListener('click', function() {
        var options = {
            remoteAddress: document.querySelector('#remoteAddress').value
        };

        window.location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(options));
    }, false);

}(window, document));
