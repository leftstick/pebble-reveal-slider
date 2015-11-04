(function(window, document) {
    'use strict';

    var getConfigData = function () {
        var address = document.getElementById('address');

        var options = {
            'address': address.value
        };
        // Save for next launch
        localStorage['address'] = options['address'];
        console.log('Got options: ' + JSON.stringify(options));
        return options;
    };

    var getQueryParam = function (variable, defaultValue) {
        var query = location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] === variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        return defaultValue || false;
    };

    var submitButton = document.getElementById('submit_button');
    submitButton.addEventListener('click', function() {
        console.log('Submit');
        // Set the return URL depending on the runtime environment
        var return_to = getQueryParam('return_to', 'pebblejs://close#');
        document.location = return_to + encodeURIComponent(JSON.stringify(getConfigData()));
    });


    var address = document.getElementById('address');
    // Load any previously saved configuration, if available
    if(localStorage['address']) {
        address.value = localStorage['address'];
    }

}(window, document));
